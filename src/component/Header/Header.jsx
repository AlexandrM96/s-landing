import React, {useEffect, useState} from "react";
import './Header.css';

export default function Header() {
    const [imgOne] = useState('img/logoSber.svg');
    const [imgTwo] = useState('img/logoSber2.svg');
    const [imageFlag, setImageflag] = useState(false);

    const handleScroll = () => {
        if (window.scrollY <= 7400) {
            setImageflag(false);
        }
        if (window.scrollY >= 7400) {
            setImageflag(true);
        }
    }

    useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []
    );

    return (
        <div className="header">
            <div className="header__container">
                <div className={!imageFlag ? 'header__container-navigation' : 'header__container-navigation__two'}>
                    <div>Меню</div>
                    <div>
                        <img src={!imageFlag ? imgOne : imgTwo} alt='logo'/>
                    </div>
                    <div
                        className={!imageFlag ? 'container-navigation__svaz' : 'container-navigation__svaz__two'}>
                        Связаться
                    </div>
                </div>
            </div>
        </div>
    );
}
;
