import React, { useEffect } from 'react';
import { setProducts } from '../redux/productSlice'; 
import { useDispatch, useSelector } from 'react-redux';
import { mockData } from '../Data/mockData';
import ProductCard from '../components/ProductCard';
import Arrivals from './Arrivals';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Feedbacks from '../components/Feedbacks';

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product);

    useEffect(() => {
        dispatch(setProducts(mockData));
    }, [dispatch]);

    return (
        <div>
            <Hero />
            <div className="pt-16 px-6 md:px-12 lg:px-20 bg-gray-100">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-black">TOP SELLING</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {products.products.slice(0, 5).map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
            <div className="bg-gray-100 pt-16">
                <Arrivals />
                <Feedbacks />
            </div>
        </div>
    );
};

export default Home;
