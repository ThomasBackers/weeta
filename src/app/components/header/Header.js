import weetaIcon from '../../img/weeta-icon.svg'
import { FaBars } from 'react-icons/fa'

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__heading hidden">
                Weeta
            </h1>

            <div className="header__top-bar container">
                <img 
                    className="header__top-bar__icon"
                    src={weetaIcon}
                    alt="Weeta icon"
                />

                <nav className="header__top-bar__menu">
                    <ul className="header__top-bar__menu__buttons">
                        <li className="header__top-bar__menu__buttons__button"></li>
                        <li className="header__top-bar__menu__buttons__button"></li>
                        <li className="header__top-bar__menu__buttons__button"></li>
                    </ul>
                </nav>

                <button className="header__top-bar__burger-button" type="button">
                    <FaBars />
                </button>
            </div>
        </header>
    )
}

export default Header
