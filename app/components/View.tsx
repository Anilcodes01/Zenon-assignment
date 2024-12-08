'use client'
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface Car3DViewProps {
  modelPath: string;
  width?: number | string;
  height?: number | string;
}

const Car3DView: React.FC<Car3DViewProps> = ({ 
  modelPath, 
  width = '100%', 
  height = 400 
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
   
    if (typeof window !== 'undefined' && mountRef.current) {
      const mount = mountRef.current;
      const mountWidth = mount.clientWidth || 800;
      const mountHeight = mount.clientHeight || 600;
      
      
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, mountWidth / mountHeight, 1, 2000);
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      
      renderer.setSize(mountWidth, mountHeight);
      mount.appendChild(renderer.domElement);

      
      scene.background = new THREE.Color(0xf0f0f0);

     
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      
      camera.position.set(0, 100, 500);

      
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 100, 0);
      controls.enableDamping = true;
      controls.dampingFactor = 0.1;
      controls.minDistance = 100;
      controls.maxDistance = 1000;

     
      const loader = new FBXLoader();
      loader.load(
        modelPath, 
        (object) => {
          
          object.scale.set(0.5, 0.5, 0.5); 
          object.position.set(0, 0, 0);
          
         
          const box = new THREE.Box3().setFromObject(object);
          const center = box.getCenter(new THREE.Vector3());
          object.position.sub(center);
          
          scene.add(object);
        }, 
        
        (xhr) => {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
       
        (error) => {
          console.error('An error happened while loading the model', error);
        }
      );

      
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      
      return () => {
        controls.dispose();
        renderer.dispose();
        mount.removeChild(renderer.domElement);
      };
    }
  }, [modelPath]);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width, 
        height: typeof height === 'number' ? `${height}px` : height,
        minHeight: '300px'
      }} 
    />
  );
};

export default Car3DView;