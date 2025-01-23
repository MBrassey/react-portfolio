import React, { useState, useEffect } from 'react';

const EthPrice = () => {
    const [price, setPrice] = useState('Loading...');
    const API_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd';

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`Error fetching ETH price: ${response.statusText}`);
                }

                const data = await response.json();
                const ethPrice = data.ethereum.usd;
                setPrice(ethPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
            } catch (error) {
                console.error('Failed to fetch ETH price:', error);
                setPrice('0.00');
            }
        };

        fetchPrice();
    }, []);

    return <>{price}</>;
};

export default EthPrice;