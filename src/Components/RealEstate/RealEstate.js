import React from 'react';
import img1 from '../../img/building1.jpeg'
import { useTranslation } from 'react-i18next';
import './realEstate.css'
const RealEstate = () => {
    const { i18n, t } = useTranslation()
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    };
    return (
        <div id='realestate' className='container'>
            <div className='estate'>
                <div className='estate_block'>
                    <h2 className='estate_title'>{t("real-estate.real-estate-title")}</h2>
                    <div className='estate_cards'>
                        <div className='estate_card'>
                            <img src={img1} width='70%' height='550px' alt='estate1' />
                            <div className='estate_card-info'>
                                <h3>{t("real-estate.fundriser")}</h3>
                                <p>
                                    <span>{t("real-estate.date")}</span> |
                                    <span>{t("real-estate.fund-credo")}</span>
                                </p>
                                <p>{t("real-estate.free-house")}</p>
                                <button className="button-36" role="button">{t("real-estate.more")}</button>
                            </div>
                        </div>
                        {/* <div className='estate_card'>
                            <img src={img1} width='70%' height='550px' alt='estate1' />
                            <div className='estate_card-info'>
                                <h3>{t("real-estate.fundriser")}</h3>
                                <p>
                                    <span>{t("real-estate.date")}</span> |
                                    <span>{t("real-estate.fund-credo")}</span>
                                </p>
                                <p>{t("real-estate.free-house")}</p>
                                <button className="button-36" role="button">{t("real-estate.more")}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='estate_block'>
                    <h2 className='estate_title'>{t("real-estate.featured")}</h2>
                    <div>
                        <div className='estate_card'>
                            <img src={img1} width='70%' height='550px' alt='estate1' />
                            <div className='estate_card-info'>
                                <h3>{t("real-estate.fundriser")}</h3>
                                <p>
                                    <span>{t("real-estate.date")}</span> |
                                    <span>{t("real-estate.fund-credo")}</span>
                                </p>
                                <p>{t("real-estate.free-house")}</p>
                                <button className="button-36" role="button">{t("real-estate.more")}</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                    </div>
                </div >
            </div>
        </div>
    );
};

export default RealEstate;