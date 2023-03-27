import React, {useEffect, useRef, useState} from "react";
import './InfoCards.css';

export default function InfoCards() {
    const [scale, setScale] = useState('');
    const [margin, setMargin] = useState('20rem');

    const handleScroll = () => {
        console.log(window.scrollY);
        console.log(window.pageYOffset)
        console.log(document.body.scrollTop)
        if (window.scrollY < 4800) {
            setMargin('20rem');
        }
        if (window.scrollY > 4800) {
            setMargin('18rem');
        }
        if (window.scrollY > 4900) {
            setMargin('17rem');
        }
        if (window.scrollY > 5000) {
            setMargin('16rem');
        }
        if (window.scrollY > 5100) {
            setMargin('15rem');
        }
        if (window.scrollY > 5200) {
            setMargin('14rem');
        }
        if (window.scrollY > 5300) {
            setMargin('13rem');
        }
        if (window.scrollY > 5400) {
            setMargin('11rem');
        }
        if (window.scrollY < 5506) {
            setScale('');
        }
        if (window.scrollY >= 5506) {
            setMargin('10rem')
            setScale('0.8');
        }
        if (window.scrollY >= 5807) {
            setMargin('25rem')
        }
    };

    useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []
    );
    return (
        <div className="info-cards">
            <div style={{
                scale: scale,
            }} className="info-cards__container">
                <div style={{
                    marginTop: margin
                }} className="info-cards__container-column">
                    <div className="info-cards__container-column__card">
                        <img src='img/creative_agency_1 1.png' alt='картинка'/>
                    </div>
                    <div className="info-cards__container-column__card">
                        <img src='img/sShop.png' alt='картинка'/>
                    </div>
                    <div className="info-cards__container-column__card">
                        <img src='img/blogAg.png' alt='картинка'/>
                    </div>
                </div>
                <div className="info-cards__container-column">
                    <div className="info-cards__container-column__card">
                        <img src='img/gLab.png' alt='картинка'/>
                    </div>
                    <div className="info-cards__container-column__card">
                        <img src='img/VR.png' alt='картинка'/>
                    </div>
                    <div className="info-cards__container-column__card">
                        <img src='img/imageMMM.png' alt='картинка'/>
                    </div>
                </div>
                <div style={{
                    marginTop: margin
                }} className="info-cards__container-column">
                    <div className="info-cards__container-column__card">
                        <img src='img/girl2.png' alt='картинка'/>
                    </div>
                    <div className="info-cards__container-column__card">
                        <img src='img/web555.png' alt='картинка'/>
                    </div>
                    <div className="info-cards__container-column__card mpm">
                        <img src='img/MPM.png' alt='картинка'/>
                    </div>
                </div>
                <div className="info-cards__container-column">
                    <div className="info-cards__container-column__card">
                        <img src='img/ddddd.png' alt='картинка'/>
                    </div>
                    <div className="info-cards__container-column__card">
                        <img src='img/lab.png' alt='картинка'/>
                    </div>
                    <div className="info-cards__container-column__card">
                        <img src='img/mozg.png' alt='картинка'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

