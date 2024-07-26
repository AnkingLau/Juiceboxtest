'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Link from 'next/link';

const Tutorial = () => {
    return (
        <Swiper spaceBetween={50} slidesPerView={1}>
            <SwiperSlide>
                <div>Slide 1</div>
            </SwiperSlide>
            <SwiperSlide>
                <div>Slide 2</div>
            </SwiperSlide>
            <SwiperSlide>
                <div>Slide 3</div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <div>Slide 4</div>
                    // 在 Tutorial 组件中
                    <button>
                        <Link href="/form">
                            Get Started
                        </Link>
                    </button>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Tutorial;
