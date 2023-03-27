import React, {useEffect, useState} from "react";

import './StrategyDevelopment.css';

export default function StrategyDevelopment() {

    const [position, setPosition] = useState('');
    const [scale, setScale] = useState('');
    const [opacity, setOpacity] = useState('');

    const handleScroll = () => {

        if (window.scrollY <= 7300) {
            setScale('');
            setOpacity('');
            setPosition('');
        }

        if (window.scrollY >= 7300) {
            setScale('0.26');
            setOpacity('0.2');
            setPosition('');
        }
        // if (window.scrollY >= 7350) {
        //     setScale('0.2');
        //     setOpacity('0.4')
        //     setPosition('');
        // }
        if (window.scrollY >= 7400) {
            setScale('0.43');
            setOpacity('0.6')

        }
        if (window.scrollY >= 7450) {
            setScale('0.4');
            setOpacity('0.8')
            setPosition(false);
        }
        if (window.scrollY >= 7500) {
            setScale('0.596');
            setOpacity('0.8');
            setPosition(false);
        }
        if (window.scrollY >= 7550) {
            setScale('');
            setOpacity('');
            setPosition(true);
        }
    }

    useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []
    );

    return (
        <div
            style={{
                opacity: opacity,
                scale: scale,
                position: position
            }}
            className={!position ? "strategy-development" : "strategy-development position-true"}>
            <div className="strategy-development__container">
                <div className="strategy-development__container-swiper">
                    <div style={{
                        right: '60%',
                        bottom: ' 0',
                        transform: 'rotate(-14deg)'
                        // left: '109%',
                        // top: '-119%',
                        // transform: 'rotate(50deg)'
                    }} className='strategy-development__container-swiper__card'>
                        <img src='img/sShop.png' alt='картинка'/>
                    </div>
                    <div style={{
                        left: '-135%',
                        top: '10%',
                        transform: 'rotate(-50deg)'
                    }} className='strategy-development__container-swiper__card'>
                        <img src='img/girl.png' alt='картинка'/>
                    </div>
                    {/*<div className='strategy-development__container-swiper__card'>*/}
                    {/*    <img src='img/sShop.png' alt='картинка'/>*/}
                    {/*</div>*/}
                    <div style={{
                        // right: '60%',
                        // bottom: ' 0',
                        // transform: 'rotate(-14deg)'
                        left: '109%',
                        top: '-119%',
                        transform: 'rotate(50deg)'
                    }} className='strategy-development__container-swiper__card'>
                        <img src='img/girl2.png' alt='картинка'/>
                    </div>
                    <div style={{
                        left: '60%',
                        bottom: '0',
                        transform: 'rotate(14deg)'
                    }} className='strategy-development__container-swiper__card'>
                        <img src='img/mozg.png' alt='картинка'/>
                    </div>
                    <div className='strategy-development__container-swiper__card'>
                        <img src='img/creative_agency_1 1.png' alt='картинка'/>
                    </div>
                    <div className='strategy-development__container-buttons-slider'>
                        <button className='buttons-slider__button slide-prev'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                 className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                            </svg>
                        </button>
                        <button className='buttons-slider__button slide-next'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                 className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='strategy-development__container-description'>
                    Разработка стратегии, рекламных идей, креативных рамок, слоганов. Кейвижуалы.
                </div>
            </div>
        </div>
    );
}

