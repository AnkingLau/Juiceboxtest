'use client';

import React, { useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { gsap } from 'gsap';
import Lenis from '@studio-freight/lenis';
import Link from 'next/link';

const Home = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        gsap.to(".animate-button", {
            y: 20,
            duration: 2,
            ease: "bounce",
            repeat: -1,
            yoyo: true,
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div>
            <Player
                autoplay
                loop
                src="../Juicebot.json" // 将此路径替换为你的JSON文件路径
                style={{ height: '300px', width: '300px' }}
            />
            <Link href="/tutorial">
                <button className="animate-button">
                    Go to Tutorial
                </button>
            </Link>
            
            <div id="form-section" style={{ marginTop: '1000px' }}>
                {/* 多步表单将会放在这里 */}
            </div>
        </div>
    );
};

export default Home;
