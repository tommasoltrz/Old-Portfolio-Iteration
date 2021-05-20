import * as React from "react";
import { useEffect, useRef, useState } from "react";
import * as styles from "./Particles.module.scss";
type Props = {
  color: string;
  bgColor: string;
};

const Particles: React.FC<Props> = ({ color, bgColor }) => {
  const canvasRef = useRef<any | null>(null);
  let canvasOffsetY: number;
  let ctx: CanvasRenderingContext2D;
  let mouse = { x: 0, y: 0, radius: 150 };
  let particleArray: any = [];
  useEffect(() => {
    addEventListeners();
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    canvasOffsetY =
      canvasRef.current.getBoundingClientRect().top + window.scrollY;
    ctx = canvasRef.current.getContext("2d");
    init();
    animate();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onPageResize);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("resize", onPageResize);
  };

  const onPageResize = () => {
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    particleArray = [];
    init();
  };

  const onMouseMove = (e: any) => {
    mouse = {
      x: e.pageX,
      y: e.pageY,
      radius: 150,
    };
  };

  class Particle {
    x: number;
    y: number;
    size: number;
    baseX: number;
    baseY: number;
    density: number;
    maxDistance: number;
    constructor(x: number, y: number, maxDistance: number) {
      this.x = x;
      this.y = y;
      this.size = 1;
      this.baseX = this.x;
      this.baseY = this.y;
      this.density = Math.random() * 40 + 5;
      this.maxDistance = maxDistance;
    }
    draw = () => {
      ctx.fillStyle = color;
      ctx.beginPath();
      // ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.rect(this.x, this.y, 15, 15);
      ctx.closePath();
      ctx.fill();
    };
    update = () => {
      const dx = mouse.x - this.x;
      const dy = mouse.y - canvasOffsetY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const force = (this.maxDistance - distance) / this.maxDistance;
      const directionX = forceDirectionX * force * this.density;
      const directionY = forceDirectionY * force * this.density;
      if (distance < this.maxDistance) {
        this.x -= directionX;
        this.y -= directionY;
      } else {
        if (this.x !== this.baseX) {
          const dx = this.x - this.baseX;
          this.x -= dx / 10;
        }
        if (this.y !== this.baseY) {
          const dy = this.y - this.baseY;
          this.y -= dy / 10;
        }
      }
    };
  }

  const init = () => {
    const pdistance = 45;
    const pAmountX = canvasRef.current.width / pdistance;
    const pAmountY = canvasRef.current.height / pdistance;
    particleArray = [];
    for (let i = 0; i < pAmountX; i++) {
      const x = i * pdistance + pdistance;
      for (let d = 0; d < pAmountY; d++) {
        const y = d * pdistance + pdistance;
        particleArray.push(new Particle(x, y, Math.random() * 200 + 60));
      }
    }
  };

  const animate = () => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    particleArray.forEach((particle: Particle, idx: number) => {
      particle.draw();
      particle.update();
    });
    requestAnimationFrame(animate);
  };

  return (
    <canvas
      id={styles.canvas}
      ref={canvasRef}
      style={{ backgroundColor: bgColor }}
    ></canvas>
  );
};

export default Particles;
