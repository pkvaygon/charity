import React from 'react';
import './employess.css';
import Marquee from 'react-fast-marquee';
import img1 from '../../img/unnamed.png'
import img2 from '../../img/unnamed.png'
import img3 from '../../img/unnamed.png'
import img4 from '../../img/unnamed.png'
import img5 from '../../img/unnamed.png'
import img6 from '../../img/unnamed.png'
import img7 from '../../img/unnamed.png'


const Employees = () => {
    return (
        <div className="app">
            <div className="title">
                <h1>Наша команда</h1>
            </div>
            <div>
                <Marquee className='marquee' direction="left" speed={100} delay={1} pauseOnHover={true} gradient={false}>
                    <div className="image_wrapper">
                        <img src={img1} alt="" />
                        <h2>Денис Денисович</h2>
                        <h2>Генеральный директор</h2>
                    </div>
                    <div className="image_wrapper">
                        <img src={img2} alt="" />
                        <h2>Аришем байке</h2>
                        <h2>Просто директор</h2>
                    </div>
                    <div className="image_wrapper">
                        <img src={img3} alt="" />
                        <h2>Рука Аришем байке</h2>
                        <h2>ГБР</h2>
                    </div>
                    <div className="image_wrapper">
                        <img src={img3} alt="" />
                        <h2>Аришем байке2</h2>
                        <h2>Электрик по совмести-ву</h2>
                    </div>
                    <div className='image_wrapper'>
                        <img src={img5} alt="" />
                        <h2>Любовь Павловна</h2>
                        <h2>Гадалка </h2>
                    </div>
                    <div className="image_wrapper">
                        <img src={img6} alt="" />
                        <h2>Жыпаргуль Запаховна</h2>
                        <h2>Ленивый бухгалтер</h2>
                    </div>
                    <div className="image_wrapper">
                        <img src={img7} alt="" />
                        <h2>Хзыевы</h2>
                        <h2>Важные бездельники</h2>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Employees;