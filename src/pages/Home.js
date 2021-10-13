import React, { useEffect, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('./db.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    
    return (
        <div>
            <p>This is home!</p>
        </div>
    );
};

export default Home;