import { Autoplay, Pagination, Navigation } from "swiper";
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import comm1 from '../../img/unnamed.png'
import './review.css'

const Review = () => {
    const { i18n, t } = useTranslation()
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    };
    return (
        <section id="review" className='review_wrapper'>
            <div className='container review'>
                <div className='review_left'>
                    <h3 className='review_left-title'>{t("review.review-title")}</h3>
                    <p className='review_left-text'>{t("review.review-title2")}</p>
                </div>
                <div className='review_right'>
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={10}
                        navigation={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={2}
                    >
                        <SwiperSlide>
                            <div className='review_card'>
                                <div className='review_card-text'>
                                    <p>We are ipsum dolor sit amet, ctetur adipisicing elit, sed do eiusmod por incididunt ut labore et dolore agna aliqua. enim ad minim miam, quis nostrud exercitation
                                    </p>
                                </div>
                                <div className='review_card-client'>
                                    <img width="63" height="63" src={comm1} className="review_card-img" alt="" decoding="async" loading="lazy"></img>
                                    <div>
                                        <p>{t("review.name")}</p>
                                        <span>{t("review.about")}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='review_card'>
                                <div className='review_card-text'>
                                    <p>We are ipsum dolor sit amet, ctetur adipisicing elit, sed do eiusmod por incididunt ut labore et dolore agna aliqua. enim ad minim miam, quis nostrud exercitation
                                    </p>
                                </div>
                                <div className='review_card-client'>
                                    <img width="63" height="63" src={comm1} className="review_card-img" alt="" decoding="async" loading="lazy"></img>
                                    <div>
                                        <p>{t("review.name")}</p>
                                        <span>{t("review.about")}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='review_card'>
                                <div className='review_card-text'>
                                    <p>We are ipsum dolor sit amet, ctetur adipisicing elit, sed do eiusmod por incididunt ut labore et dolore agna aliqua. enim ad minim miam, quis nostrud exercitation
                                    </p>
                                </div>
                                <div className='review_card-client'>
                                    <img width="63" height="63" src={comm1} className="review_card-img" alt="" decoding="async" loading="lazy"></img>
                                    <div>
                                        <p>{t("review.name")}</p>
                                        <span>{t("review.about")}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='review_card'>
                                <div className='review_card-text'>
                                    <p>We are ipsum dolor sit amet, ctetur adipisicing elit, sed do eiusmod por incididunt ut labore et dolore agna aliqua. enim ad minim miam, quis nostrud exercitation
                                    </p>
                                </div>
                                <div className='review_card-client'>
                                    <img width="63" height="63" src={comm1} className="review_card-img" alt="" decoding="async" loading="lazy"></img>
                                    <div>
                                        <p>{t("review.name")}</p>
                                        <span>{t("review.about")}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='review_card'>
                                <div className='review_card-text'>
                                    <p>We are ipsum dolor sit amet, ctetur adipisicing elit, sed do eiusmod por incididunt ut labore et dolore agna aliqua. enim ad minim miam, quis nostrud exercitation
                                    </p>
                                </div>
                                <div className='review_card-client'>
                                    <img width="63" height="63" src={comm1} className="review_card-img" alt="" decoding="async" loading="lazy"></img>
                                    <div>
                                        <p>{t("review.name")}</p>
                                        <span>{t("review.about")}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='review_card'>
                                <div className='review_card-text'>
                                    <p>We are ipsum dolor sit amet, ctetur adipisicing elit, sed do eiusmod por incididunt ut labore et dolore agna aliqua. enim ad minim miam, quis nostrud exercitation
                                    </p>
                                </div>
                                <div className='review_card-client'>
                                    <img width="63" height="63" src={comm1} className="review_card-img" alt="" decoding="async" loading="lazy"></img>
                                    <div>
                                        <p>{t("review.name")}</p>
                                        <span>{t("review.about")}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>

    );
};

export default Review;