'use client';

import React, { useEffect, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { gsap } from 'gsap';
import Lenis from '@studio-freight/lenis';
import Link from 'next/link';
import styles from './styles/Home.module.css';

const Home = () => {
    const lineRefs = useRef([]);

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

        if (lineRefs.current) {
            lineRefs.current.forEach((line, index) => {
                gsap.fromTo(line, 
                    { x: '-100%' }, 
                    { x: '100%', duration: 10 + index * 2, repeat: -1, ease: 'linear' }
                );
            });
        }

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className={styles.container}>
            <Player
                autoplay
                loop
                src="/animations/Juicebot.json"
                style={{ height: '300px', width: '300px' }}
            />
            <div className={styles.bottomContainer}>
                <img 
                    src="/images/Tomptext.png"
                    alt="Tomptext"
                    className={styles.tomptextImage}
                />
            </div>
            <Link href="/tutorial">
                <img 
                    src="/images/tutorial-button.png" 
                    alt="Go to Tutorial" 
                    className={styles.tutorialButton} 
                />
            </Link>
        
            <div id="form-section" style={{ marginTop: '1000px' }}>
                {/* 多步表单将会放在这里 */}
            </div>
            <div className={styles.textContainer}>
                <p ref={(el) => (lineRefs.current[0] = el)} className={`${styles.textLine} ${styles.line1}`}>WA businesses feel confident about future growth</p>
                <p ref={(el) => (lineRefs.current[1] = el)} className={`${styles.textLine} ${styles.line2}`}>AI can't replace creativity</p>
                <p ref={(el) => (lineRefs.current[2] = el)} className={`${styles.textLine} ${styles.line3}`}>Sales measure true success</p>
                <p ref={(el) => (lineRefs.current[3] = el)} className={`${styles.textLine} ${styles.line4}`}>Human connection drives WA business</p>
                <p ref={(el) => (lineRefs.current[4] = el)} className={`${styles.textLine} ${styles.line5}`}>The primary barrier to digital transformation is financial investment</p>
            </div>
        </div>
    );
};

export default Home;
