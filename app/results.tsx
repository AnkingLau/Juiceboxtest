'use client';

import React from 'react';
import { useRouter } from 'next/router';

const Results = () => {
    const router = useRouter();
    const { firstName, email } = router.query;

    return (
        <div>
            <h1>Results</h1>
            <p>First Name: {firstName}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default Results;
