import { useState, useEffect } from 'react';

const useCustomHttpHook = (url, options) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }
                const data = await response.json();
                setData(data);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url, options]);

    return { data, isLoading, error };
};

export default useCustomHttpHook;
