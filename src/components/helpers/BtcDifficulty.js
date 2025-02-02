import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BtcDifficulty = () => {
    const [difficulty, setDifficulty] = useState('Loading...');
    const API_URL = 'https://blockchain.info/q/getdifficulty';

    useEffect(() => {
        const fetchDifficulty = async () => {
            try {
                const response = await axios.get(API_URL);
                setDifficulty(Math.floor(response.data).toString());
            } catch (error) {
                console.error('Failed to fetch BTC difficulty:', error);
                setDifficulty('0');
            }
        };

        fetchDifficulty();
    }, []);

    return <>{difficulty}</>;
};

export default BtcDifficulty;