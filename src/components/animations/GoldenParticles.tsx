import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    dx: number;
    dy: number;
    size: number;
    alpha: number;
    targetAlpha: number;
}

export default function GoldenParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouseX = 0;
        let mouseY = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(window.innerWidth * 0.05, 50); // Responsive count - Reduced for mobile perf

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    dx: (Math.random() - 0.5) * 0.5, // Slow horizontal drift
                    dy: (Math.random() - 0.5) * 0.5 - 0.2, // Slight upward trend
                    size: Math.random() * 2 + 0.5,
                    alpha: Math.random() * 0.5 + 0.1,
                    targetAlpha: Math.random() * 0.5 + 0.1,
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                // Update
                particle.x += particle.dx;
                particle.y += particle.dy;

                // Mouse influence (subtle attraction)
                const dx = mouseX - particle.x;
                const dy = mouseY - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 200) {
                    particle.x += dx * 0.005;
                    particle.y += dy * 0.005;
                }

                // Twinkle effect
                if (Math.random() > 0.95) {
                    particle.targetAlpha = Math.random() * 0.6 + 0.1;
                }
                const alphaDiff = particle.targetAlpha - particle.alpha;
                particle.alpha += alphaDiff * 0.05;

                // Wrap around screen
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Draw
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 215, 0, ${particle.alpha})`; // Gold color
                // ctx.shadowBlur = 10; // Removed for performance
                // ctx.shadowColor = "rgba(255, 215, 0, 0.5)"; // Removed for performance
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(drawParticles);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);

        resizeCanvas();
        drawParticles();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ mixBlendMode: 'screen' }}
        />
    );
}
