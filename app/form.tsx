'use client';
import React, { useState } from 'react';
import TextInput from '../components/TextInput';

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
        console.log(formData);
    };

    return (
        <div>
            {step === 1 && (
                <div>
                    <TextInput label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                    <button onClick={nextStep}>Next</button>
                </div>
            )}
            {step === 2 && (
                <div>
                    <TextInput label="Email" name="email" value={formData.email} onChange={handleChange} />
                    <button onClick={prevStep}>Back</button>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            )}
        </div>
    );
};

export default Form;
