import React from 'react';
import { useTranslation } from 'react-i18next';
import './ourServices.css'
import deti1 from '../../img/deti1.jpg'
import deti2 from '../../img/deti2.jpg'
import deti3 from '../../img/deti3.jpg'
import volunteer from '../../img/volunteer.jpg'
const OurServices = () => {
    const { i18n, t } = useTranslation()
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    };
    return (
        <div id='ourservices'>
            {/* <marquee behavior="scroll" direction="left" loop="5" scrollamount="10px" className='marquee2'>
                {t("ourServices.marquee")}
            </marquee> */}
            <section className='container'>
                <div className='ourServices_title'>
                    <h2>{t("ourServices.ourServices_title")}</h2>
                </div>
                <div className='ourServices_title'><p>{t("ourServices.ourServices_title2")}</p></div>
                <div className='ourServices_imgs'>
                    <div className='ourServices_info'>
                        <img src={deti1} alt="" />
                        <h2>{t("ourServices.ourServices_info")}</h2>
                        <p>Сбор и анализ информации по вопросам нарушения прав и свобод человека
                        </p>
                    </div>
                    <div className='ourServices_info'>
                        <img src={deti2} alt="" />
                        <h2>{t("ourServices.education")}</h2>
                        <p>Качественное бразование для всех нуждающихся
                        </p>
                    </div>
                    <div className='ourServices_info'>
                        <img src={deti3} alt="" />
                        <h2>{t("ourServices.foods")}</h2>
                        <p>Обеспечение всем необходимым для нуждающихся
                        </p>
                    </div>
                </div>
            </section>
            <section className='container'>
                <div className='ourServices_info2'>
                    <div className='ourServices_portret'>
                        <img src={volunteer} alt="" />
                    </div>
                    <div className='ourServices_volunteer'>
                        <div className='ourServices_volunteer_title'>
                            <h3>{t("ourServices.volunteer-title")}</h3>
                            <h5>{t("ourServices.volunteer-title2")}</h5>
                        </div>
                        <div className='ourServices_skills'>
                            <div>
                                <h3>{t("ourServices.contribution-education")}</h3>
                                <div className='skill1'>
                                    <span></span>
                                </div>
                            </div>
                            <div>
                                <h3>{t("ourServices.contribution-health-care")}</h3>
                                <div className='skill2'><span></span></div>
                            </div>
                            <div>
                                <h3>{t("ourServices.contribution-gum-help")}</h3>
                                <div className='skill3'><span></span></div>
                            </div>
                            <div>
                                <h3>{t("ourServices.contribution-funding")}</h3>
                                <div className='skill4'><span></span></div>
                            </div>
                            <div>
                                <h3>{t("ourServices.contribution-future")}</h3>
                                <div className='skill5'><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurServices;