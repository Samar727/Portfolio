import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000be, 0.015);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 250;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particle nodes configuration
    const particleCount = window.innerWidth < 768 ? 60 : 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Colors mapping (indigo to cyan gradient)
    const colorIndigo = new THREE.Color('#6366f1');
    const colorCyan = new THREE.Color('#06b6d4');

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 350;
      const y = (Math.random() - 0.5) * 350;
      const z = (Math.random() - 0.5) * 350;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      particles.push({
        position: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.2,
          (Math.random() - 0.5) * 0.2,
          (Math.random() - 0.5) * 0.2
        )
      });

      // Gradient color based on position
      const mixRatio = (x + 175) / 350;
      const mixedColor = new THREE.Color().copy(colorIndigo).lerp(colorCyan, mixRatio);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Glowy round texture for particles
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 16);
    const particleTexture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 4,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    // Line segments connecting close particles
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4f46e5,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    let lineGeometry = new THREE.BufferGeometry();
    let lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // Mouse movement state
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.05;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.05;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Gentle rotation of the overall network
      pointCloud.rotation.y += 0.001;
      pointCloud.rotation.x += 0.0005;

      // Parallax effect on mouse move
      pointCloud.position.x = targetX * 0.5;
      pointCloud.position.y = -targetY * 0.5;
      lineMesh.position.x = targetX * 0.5;
      lineMesh.position.y = -targetY * 0.5;

      lineMesh.rotation.y = pointCloud.rotation.y;
      lineMesh.rotation.x = pointCloud.rotation.x;

      // Move particle positions slightly
      const positionsArr = geometry.attributes.position.array;
      const linePositions = [];

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.position.add(p.velocity);

        // Boundary checks
        if (p.position.x < -175 || p.position.x > 175) p.velocity.x *= -1;
        if (p.position.y < -175 || p.position.y > 175) p.velocity.y *= -1;
        if (p.position.z < -175 || p.position.z > 175) p.velocity.z *= -1;

        positionsArr[i * 3] = p.position.x;
        positionsArr[i * 3 + 1] = p.position.y;
        positionsArr[i * 3 + 2] = p.position.z;

        // Search neighbors for connections
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dist = p.position.distanceTo(p2.position);

          if (dist < 75) {
            linePositions.push(p.position.x, p.position.y, p.position.z);
            linePositions.push(p2.position.x, p2.position.y, p2.position.z);
          }
        }
      }

      geometry.attributes.position.needsUpdate = true;

      // Update line connections
      if (linePositions.length > 0) {
        scene.remove(lineMesh);
        lineGeometry.dispose();
        
        lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute(
          'position',
          new THREE.Float32BufferAttribute(linePositions, 3)
        );
        lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
        lineMesh.position.x = targetX * 0.5;
        lineMesh.position.y = -targetY * 0.5;
        lineMesh.rotation.y = pointCloud.rotation.y;
        lineMesh.rotation.x = pointCloud.rotation.x;
        scene.add(lineMesh);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-20 pointer-events-none overflow-hidden bg-[#000000be]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ThreeBackground;
