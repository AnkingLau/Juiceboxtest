'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Player } from '@lottiefiles/react-lottie-player';
import styles from './styles/Form.module.css';

const Form = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

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
            {step === 1 && (
                <div className={styles.formStep}>
                    <p className={styles.instruction}>Let’s start with the basics. Type in your first name.</p>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First name"
                            className={styles.input}
                            style={{ backgroundImage: "url('/Chatbot textbox name.png')" }}
                        />
                    </div>
                    <button className={styles.button} onClick={nextStep}>Next</button>
                </div>
            )}
            {step === 2 && (
                <div className={styles.formStep}>
                    <p className={styles.instruction}>How should we contact you? Type in your email address.</p>
                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            className={styles.input}
                            style={{ backgroundImage: "url('/Chatbot textbox mail.png')" }}
                        />
                    </div>
                    <button className={styles.button} onClick={prevStep}>Back</button>
                    <button className={styles.button} onClick={handleSubmit}>
                        <Link href={{ pathname: '/results', query: formData }}>
                            Submit
                        </Link>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Form;
