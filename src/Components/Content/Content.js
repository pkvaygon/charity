import React from 'react';
import { Route } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurServices from '../OurServices/OurServices';
import RealEstate from '../RealEstate/RealEstate';
import Review from '../Review/Review';
import { Link, animateScroll as scroll } from "react-scroll";
import arrow from '../../img/top-arrow.svg'
import './content.css'
const Content = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return (
        <div>
            <Header />
            <AboutUs />
            <OurServices />
            <Review />
            <RealEstate />
            <Footer />
            <div>
                <button className='scroll'
                    onClick={() => scrollToTop()}
                >
                    <img src={arrow} width='100px' height='100px' alt="" />
                </button> </div>
        </div>
    );
};

export default Content;