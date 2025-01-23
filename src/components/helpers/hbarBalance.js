import React, { useState, useEffect } from 'react';

const HbarBalance = () => {
    const [balance, setBalance] = useState('Loading...');
    const address = '0.0.6287097';
    const API_URL = `https://mainnet-public.mirrornode.hedera.com/api/v1/accounts/${address}`;

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`Error fetching balance: ${response.statusText}`);
                }

                const data = await response.json();
                const tinybars = data.balance.balance;
                const hbar = tinybars / 100000000;
                setBalance(hbar.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
            } catch (error) {
                console.error('Failed to fetch HBAR balance:', error);
                setBalance('0.00');
            }
        };

        fetchBalance();
    }, []);

    return <>{balance}</>;
};

export default HbarBalance;