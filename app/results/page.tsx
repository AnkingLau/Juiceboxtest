'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Player } from '@lottiefiles/react-lottie-player';
import styles from './styles/Results.module.css';

const Results = () => {
    const searchParams = useSearchParams();
    const firstName = searchParams.get('firstName');
    const email = searchParams.get('email');

    return (
        <div className={styles.container}>
            <div className={styles.lottieContainer}>
                <Player
                    autoplay
                    loop
                    src="/animations/Juicebot.json"
                    style={{ height: '200px', width: '200px' }}
                />
            </div>
            <p className={styles.result}>Thanks, {firstName}! Now, it’s time to get a reality check</p>
            <p className={styles.result}>This will take 2-3 minutes.</p>
            <div className={styles.buttonContainer}>
                <img src="/images/Chatbot textboxr.png" alt="Next Step" className={styles.button} />
            </div>
        </div>
    );
};

export default Results;
