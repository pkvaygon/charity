import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import './aboutUs.css'
import aboutUsphoto1 from '../../img/aboutUSPhoto1.png'
import planet from '../../img/planet.png'


const AboutUs = () => {
    const { i18n, t } = useTranslation()
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    };
    return (
        <div >
            <section id='aboutus' className='aboutUs'>
                {/* <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={0}
                    navigation={true}
                    loop={true}
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                >
                    <SwiperSlide id='section1'> */}
                <div className='bg_shadow'>
                    <div className='aboutUs_text'>
                        <h1>{t("aboutUs.title")}</h1>
                        <div className='aboutUsBorderLine'></div>
                        <p className='subtitle'><b className='subtitleBold'>{t("aboutUs.subtitleBold")}</b> {t("aboutUs.subtitle")} </p>
                    </div>
                    <div className='aboutUs_img'>
                        <img src={aboutUsphoto1} alt="" />
                    </div>
                </div>
                {/* </SwiperSlide>
                </Swiper> */}
            </section>
            <section className='container aboutUs_row'>
                <div className='aboutUs_row-card'>
                    <img src="https://img.icons8.com/ios/50/null/property.png" />
                    <p>{t("aboutUs.cards")}</p>
                    <p>{t("aboutUs.card's-text")}</p>
                </div>
                <div className='aboutUs_row-card'>
                    <img src="https://img.icons8.com/ios/50/null/property.png" />
                    <p>{t("aboutUs.cards")}</p>
                    <p>{t("aboutUs.card's-text")}</p>
                </div>
                <div className='aboutUs_row-card'>
                    <img src="https://img.icons8.com/ios/50/null/property.png" />
                    <p>{t("aboutUs.cards")}</p>
                    <p>{t("aboutUs.card's-text")}</p>
                </div>
                <div className='aboutUs_row-card'>
                    <img src="https://img.icons8.com/ios/50/null/property.png" />
                    <p>{t("aboutUs.cards")}</p>
                    <p>{t("aboutUs.card's-text")}</p>
                </div>
            </section>
            <section className='container'>
                <div className='aboutUs_Links'>
                    <div className='planetFlex'>
                        <img src={planet} alt="planetImg" />
                        <h2><a href='#'>{t("aboutUs.planet-link")}</a></h2>
                    </div>
                    <div className='planetFlex'>
                        <img src={planet} alt="planetImg" />
                        <h2><a href='#'>{t("aboutUs.planet-link")}</a></h2>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;