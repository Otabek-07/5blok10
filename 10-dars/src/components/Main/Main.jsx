import React, { useEffect, useState, useReducer } from 'react';
import "./Main.css";

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return [...state, action.data];
        default:
            return state;
    }
};

const Main = () => {
    const [products, setProducts] = useState([]);
    const [state, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(response => response.json())
            .then(data => setProducts(data.products));
    }, []);

    const handleClick = (data) => {
        dispatch({ type: "ADD_TO_CART", data });
    };

    console.log(state);

    return (
        <div className='bg'>
            <div className="container">
            <div className="box0">
                <div className="box">
                    {products.map((data, index) => (
                        <div className='productsCard' key={index}>
                            <img src={data.images[0]} alt={data.title} />
                            <h2>{data.title}</h2>
                            <span>{data.description}</span>
                            <p>{data.category}</p>
                            <div className="carzinca">
                                <b>{data.price}</b>
                                <button onClick={() => handleClick(data)}>🧡</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                {state.map((data, index) => (
                        <div className='productsCardd' key={index}>
                            <img src={data.images[0]} alt={data.title} />
                            <h2>{data.title}</h2>
                            <span>{data.description}</span>
                            <p>{data.category}</p>
                            <div className="carzinca">
                                <b>{data.price}</b>
                                <button onClick={() => handleClick(data)}>🧡</button>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Main;

