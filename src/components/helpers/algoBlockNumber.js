import React, { useState, useEffect } from 'react';

const AlgoBlockNumber = () => {
    const [blockNumber, setBlockNumber] = useState('Loading...');
    const ALGO_NODE_CLOUD_URL = 'https://mainnet-api.algonode.cloud';

    useEffect(() => {
        const fetchBlockNumber = async () => {
            try {
                const response = await fetch(`${ALGO_NODE_CLOUD_URL}/v2/status`);
                if (!response.ok) {
                    throw new Error(`Error fetching block number: ${response.statusText}`);
                }
                const data = await response.json();
                setBlockNumber(data['last-round']);
            } catch (error) {
                console.error('Failed to fetch Algorand block number:', error);
                setBlockNumber('0');
            }
        };

        fetchBlockNumber();
    }, []);

    return <>{blockNumber}</>;
};

export default AlgoBlockNumber;