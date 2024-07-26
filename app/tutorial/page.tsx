'use client';

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Player } from '@lottiefiles/react-lottie-player';
import styles from '../styles/Tutorial.module.css';

const Tutorial = () => {
    const slide1Ref = useRef(null);
    const slide2Ref = useRef(null);
    const slide3Ref = useRef(null);

    useEffect(() => {
        gsap.to(slide1Ref.current, { color: 'white', duration: 2 });
        gsap.to(slide2Ref.current, { color: 'white', duration: 2 });
        gsap.to(slide3Ref.current, { color: 'white', duration: 2 });
    }, []);

    return (
        <div className={styles.container}>
            <Swiper spaceBetween={50} slidesPerView={1}>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <Player
                            autoplay
                            loop
                            src="/animations/Juicebot.json"
                            style={{ height: '200px', width: '200px' }}
                        />
                        <p ref={slide1Ref} className={styles.text}>Professionals around the world shared how they feel about technology and I’ve listened. Now it’s your turn.</p>
                        <Link href="#anchor-point">
                            <img src="/images/Chatbot textboxc.png" alt="Get Started" className={styles.button} />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide} id="anchor-point">
                        <Player
                            autoplay
                            loop
                            src="/animations/Juicebot.json"
                            style={{ height: '200px', width: '200px' }}
                        />
                        <p ref={slide2Ref} className={styles.text}>I’ll ask you a handful of meaningful questions and compare your responses with people in your industry.</p>
                        <Link href="#slide3Ref">
                            <img src="/images/Chatbot textboxc.png" alt="Get Started" className={styles.button} />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide} id="slide3Ref">
                        <Player
                            autoplay
                            loop
                            src="/animations/Juicebot.json"
                            style={{ height: '200px', width: '200px' }}
                        />
                        <p ref={slide3Ref} className={styles.text}>You’ll get insights into current industry sentiments and a reality check about technology in a few minutes. Deal? Great!</p>
                        <Link href="/form">
                            <img src="/images/Primary Buttons.png" alt="Get Started" className={styles.button} />
                        </Link>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Tutorial;
