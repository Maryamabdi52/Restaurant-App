import React, { useEffect, useState } from 'react';
import axios from "axios";
import logo from "../assets/images.png";
import restaurant from "../assets/restaurant1.jpg";

import FoodCard from '../components/FoodCard';

const Home = () => {

    const [food, setFood] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:3000/food')
            .then((response) => {
                setFood(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

    }, []);

return (
    <div className='p-4 max-w-[1500px] mx-auto mt-12'>
        <div className='grid sm:grid-cols-2 gap-2 p-4 max-w-[1200px] mx-auto mt-6'>
            <img src={logo} className='rounded-2xl w-full h-full object-cover' />
            <img src={restaurant} className='rounded-2xl w-full h-full object-cover' />
        </div>
        <div className='rounded-tr-lg rounded-bl-lg bg-gradient-to-l from-blue-400 to-blue-600 mt-6 h-[35px] justify-start my-6'>
            <h1 className='text-2xl my-6 font-bold pl-8 text-white'>Lunch Specials</h1>
        </div>
        <FoodCard food={food} />
    </div>
)
}

export default Home