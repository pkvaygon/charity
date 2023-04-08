import React from 'react';
import logo from '../../img/unnamed.png'
import './footer.css'
import logo2 from '../../img/CREFO.png'
import logo3 from '../../img/whatsapp.png'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { i18n, t } = useTranslation()
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    };
    return (
        <footer id='footer' className='footer-color'>
            <div className='container_info'>
                <div className='img'>
                    <h2 className='color'>Кредо</h2>
                    <img src={logo2} width='130px' alt="" />
                </div>
                <div className='footer_info1'>
                    <h2 className='color'>{t("footer.campaign")}</h2>
                    <p className='color'>{t("footer.name")}</p>
                    <p className='color'>{t("footer.address")}</p>
                    <p className='color'>{t("footer.address2")}</p>
                    <p className='color'>{t("footer.address3")}</p>
                </div>
                <div className='footer_info'>
                    <h2 className='color'>{t("footer.contacts")}</h2>
                    <p className='color'>{t("footer.email")}</p>
                    <p className='color'>{t("footer.telephone")}</p>
                    <p className='color'>{t("footer.telephone2")}</p>
                </div>
                <div className='footer_photo'>
                    <div className='footer_images'>
                        <a href="https://wa.me/996707425117">
                            <img src={logo3} width='65px' alt="" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;