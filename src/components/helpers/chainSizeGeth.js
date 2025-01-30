import React, { useState, useEffect } from 'react';

const ChainSizeGeth = () => {
    const [size, setSize] = useState('Loading...');
    const API_KEY = process.env.REACT_APP_API_KEY;

    const today = new Date().toISOString().split('T')[0];
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 3);
    const startDate = sixMonthsAgo.toISOString().split('T')[0];

    const API_URL = `https://api.etherscan.io/api?module=stats&action=chainsize&startdate=${startDate}&enddate=${today}&clienttype=geth&syncmode=archive&sort=desc&apikey=${API_KEY}`;

    useEffect(() => {
        const fetchChainSize = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`Error fetching chain size: ${response.statusText}`);
                }

                const data = await response.json();
                if (data.status === "1" && Array.isArray(data.result) && data.result.length > 0) {

                    const latestEntry = data.result[0]; 
                    const latestSizeBytes = parseFloat(latestEntry.chainSize);
                    const sizeTB = latestSizeBytes / 1_099_511_627_776;

                    setSize(`${sizeTB.toFixed(2)} TB`);
                } else {
                    setSize('No data available');
                }
            } catch (error) {
                console.error('Failed to fetch chain size:', error);
                setSize('Error fetching size');
            }
        };

        fetchChainSize();
    }, []);

    return <>{size}</>;
};

export default ChainSizeGeth;