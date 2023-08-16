import React from 'react';
import useCustomHttpHook from 'use-custom-http-hook';

function App() {
    const { data, isLoading, error } = useCustomHttpHook('https://jsonplaceholder.typicode.com/', {});

    if (isLoading) {
        return <div>Завантаження...</div>;
    }

    if (error) {
        return <div>Помилка: {error.message}</div>;
    }

    return <div>{JSON.stringify(data)}</div>;
}

export default App;