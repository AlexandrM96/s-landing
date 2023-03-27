import React, {useEffect, useRef, useState} from "react";
import './ChangesInAdvertising.css';

export default function ChangesInAdvertising() {

    const [cardClass, setCardClass] = useState(false);
    const [cardClassTwo, setCardClassTwo] = useState(false);
    const [scale, setScale] = useState('');
    const [opacity, setOpacity] = useState('');
    const [top, setTop] = useState('');
    const [flagBackground, setFlagBackground] = useState(false);

    const handleScroll = () => {
        if (window.scrollY <= 6967) {
            setCardClass(false)
        }

        if (window.scrollY >= 6967) {
            setCardClass(true)
        }

        if (window.scrollY <= 7200) {
            setCardClassTwo(false)
        }

        if (window.scrollY >= 7200) {
            setCardClassTwo(true)
        }

        if (window.scrollY <= 7300) {
            setScale('');
            setTop('');
        }

        if (window.scrollY >= 7300) {
            setScale('1.5');
            setTop('110%')
            setFlagBackground(false);
        }
        if (window.scrollY >= 7350) {
            setScale('2');
            setOpacity('0.9')
            setFlagBackground(true);
        }
        if (window.scrollY >= 7400) {
            setScale('2.5');
            setOpacity('0.8')
        }
        if (window.scrollY >= 7450) {
            setScale('3');
            setOpacity('0.6')
        }
        if (window.scrollY >= 7500) {
            setScale('3.5');
            setOpacity('0.4')
        }
        if (window.scrollY >= 7550) {
            setScale('4');
            setOpacity('0.3')
        }
        if (window.scrollY >= 7600) {
            setScale('4.5');
            setOpacity('0.1')
        }
        if (window.scrollY >= 7650) {
            setScale('5');
            setOpacity('0')
        }
        if (window.scrollY >= 7700) {
            setScale('5.5')
        }
        if (window.scrollY >= 7550) {
            setScale('6')
        }
    }

    useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []
    );

    return (
        <div className="changes-in-advertising">
            <div className="changes-in-advertising__container">
                <h2
                    className={!cardClass ?
                        'changes-in-advertising__container-title'
                        :
                        !cardClassTwo ?
                            'changes-in-advertising__container-title opacity-true'
                            :
                            'changes-in-advertising__container-title opacityTwo-true'}>
                    Мы меняем рекламную индустрию
                </h2>
                <p
                    className={!cardClassTwo ?
                        'changes-in-advertising__container-paragraph'
                        :
                        'changes-in-advertising__container-paragraph opacity-true'}
                >
                    Самый полный комплекс маркетинговых услуг на
                    российском рынке
                </p>
                <div className="changes-in-advertising__container-cards">
                    <div className={
                        !cardClass ?
                            'container-cards__card opacityThree-true'
                            :
                            !cardClassTwo ?
                                'container-cards__card opacity-true '
                                :
                                'container-cards__card opacity-true three-right'}
                    >
                        <img src='img/creative_agency_1 1.png' alt='картинка'/>
                    </div>
                    <div
                        className={!cardClass ?
                            'container-cards__card'
                            :
                            !cardClassTwo ?
                                'container-cards__card opacity-true '
                                :
                                'container-cards__card opacity-true  two-right'}
                    >
                        <img src='img/sShop.png' alt='картинка'/>
                    </div>
                    <div
                        className={!cardClass ?
                            'container-cards__card'
                            :
                            !cardClassTwo ?
                                'container-cards__card opacity-true'
                                :
                                'container-cards__card opacity-true one-right'}
                    >
                        <img src='img/blogAg.png' alt='картинка'/>
                    </div>
                    <div
                        className={!cardClass ?
                            'container-cards__card'
                            :
                            !cardClassTwo ?
                                'container-cards__card opacity-true '
                                :
                                'container-cards__card opacity-true three-left'}
                    >
                        <img src='img/gLab.png' alt='картинка'/>
                    </div>
                    <div
                        className={!cardClass ?
                            'container-cards__card'
                            :
                            !cardClassTwo ?
                                'container-cards__card opacity-true'
                                :
                                'container-cards__card opacity-true two-left'}
                    >
                        <img src='img/VR.png' alt='картинка'/>
                    </div>
                    <div
                        className={!cardClass ?
                            'container-cards__card'
                            :
                            !cardClassTwo ?
                                'container-cards__card opacity-true '
                                :
                                'container-cards__card opacity-true one-left'}
                    >
                        <img src='img/creative_agency_1 1.png' alt='картинка'/>
                    </div>
                    <div style={{
                        scale: scale,
                    }}
                         className={!cardClass ?
                             'container-cards__card'
                             :
                             !cardClassTwo ?
                                 'container-cards__card opacity-true'
                                 :
                                 'container-cards__card opacity-true '
                         }>
                        {/*<img src='img/girl2.png' alt='картинка'/>*/}
                        <div className={!flagBackground ? 'container-cards__card-main' :'container-cards__card-main card__color'}>
                            <div style={{
                                transition: 'all 1s ease 0s',
                                marginTop: top
                            }}>
                                <h5 style={{
                                    // opacity: opacity,
                                }}>
                                    12
                                </h5>
                                <p style={{
                                    // opacity: opacity,
                                }}>
                                    направлений
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}