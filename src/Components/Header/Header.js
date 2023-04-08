
import { useTranslation } from 'react-i18next';
import i18n from './../../i18n';
import logo3 from '../../img/header_logo.png'
import '../Header/header.css'
const Header = () => {
    const { i18n, t } = useTranslation()
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    };
    const ruBtn = useRef(null)
    useEffect(() => {
        ruBtn.current.focus()
    }, [ruBtn])

    return (
        <section id='header' className='header_general'>
            <header className='container'>
                <div>
                    <nav className='navigation'>
                        <img className='logo' src={logo3} onClick={() => { changeLanguage(i18n.language === 'ru' ? 'en' : 'ru') }} />
                        <ul className='menu_box'>
                            <li><a href='#aboutus'>{t("header.link1")}</a></li>
                            <li><a href='#realestate'>{t("header.link2")}</a></li>
                            <li><a href='#ourservices'>{t("header.link3")}</a></li>
                            <li><a href='#ourservices'>{t("header.link4")}</a></li>
                            <li><a href='#review'>{t("header.link5")}</a></li>
                            <li><a href='#footer'>{t("header.link6")}</a></li>
                            <li><Link to='/employees' >{t("header.link7")}</Link></li>
                        </ul>
                        <div className='btnlanguage'>
                            <button ref={ruBtn} className='btnru' onClick={() => { changeLanguage('ru') }}>RU</button>
                            <button className='btnen' onClick={() => { changeLanguage('en') }}>EN</button>
                        </div>
                    </nav>
                </div>
            </header >
        </section >
    );
};
export default Header;



