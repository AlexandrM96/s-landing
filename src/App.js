import React, {useEffect, useRef, useState} from "react";
import Header from "./component/Header/Header";
import InfoCards from "./component/InfoCards/InfoCards";
import './App.css';
import ChangesInAdvertising from "./component/ChangesInAdvertising/ChangesInAdvertising";
import StrategyDevelopment from "./component/StrategyDevelopment/StrategyDevelopment";

export default function App() {

    const [scroll, setScroll] = useState(0);
    const [placeholder, setPlaceholder] = useState('');
    const [opacity, setOpacity] = useState('');
    const [fontSize, setFontSize] = useState('')
    const [filterOne, setFilterOne] = useState(54.591)
    const [filterTwo, setFilterTwo] = useState(83.591)
    const [filterThree, setFilterThree] = useState(98.591)
    const
        string = 'Больше, чем маркетинг',
        index = useRef(0);
    let indexOne = useRef(54.591);
    let indexTwo = useRef(83.591);
    let indexThree = useRef(98.591);

    const
        handleScroll = () => {
            setScroll(window.scrollY);
            if ((window.scrollY < 850 && indexOne.current >= 54.591
                &&
                indexTwo.current >= 83.591 && indexThree.current >= 98.591)
                &&
                (window.scrollY < 850 && indexOne.current <= 200
                    &&
                    indexTwo.current <= 200 && indexThree.current <= 200)) {
                indexOne.current++;
                indexTwo.current++;
                indexThree.current++;
                setFilterOne(indexOne.current);
                setFilterTwo(indexTwo.current);
                setFilterThree(indexThree.current);
            }
            if (window.scrollY > 850 && indexOne.current <= 200
                &&
                indexTwo.current <= 200 && indexThree.current <= 200
                &&
                (window.scrollY > 850 && indexOne.current >= 54.591
                    &&
                    indexTwo.current >= 83.591 && indexThree.current >= 98.591)) {
                indexOne.current--;
                indexTwo.current--;
                indexThree.current--;
                setFilterOne(indexOne.current);
                setFilterTwo(indexTwo.current);
                setFilterThree(indexThree.current);
            }
            console.log(indexOne, indexTwo, indexThree)
            if ((window.scrollY >= 200 && window.scrollY <= 2000) && index.current < string.length) {
                setPlaceholder(prev => prev + string[index.current - 1]);
                index.current++;
                setOpacity('');
                setFontSize('');
            }
            // } else if (window.scrollY >= 2000 && index.current !== 0) {
            //     // console.log(setPlaceholder(string.slice(0, index.current - 1)));
            //     // setPlaceholder(string.slice(0, string[index.current - 1]));
            //     // index.current--;
            // }

            if (window.scrollY >= 2000) {
                setOpacity('0.8');
                setFontSize('60px');
            }
            if (window.scrollY >= 2500) {
                setOpacity('0.7');
                setFontSize('58px');
            }
            if (window.scrollY >= 3000) {
                console.log('aaa')
                setOpacity('0.6');
                setFontSize('56px');
            }
            if (window.scrollY >= 3500) {
                setOpacity('0.5');
                setFontSize('54px');
            }
            if (window.scrollY >= 4000) {
                setOpacity('0.4');
                setFontSize('52px');
            }
            if (window.scrollY >= 4500) {
                setOpacity('0.2');
                setFontSize('52px');
            }
            if (window.scrollY >= 5000) {
                setOpacity('0.1');
                setFontSize('52px');
            }
            if (window.scrollY >= 5100) {
                setOpacity('0');
            }
        };

    useEffect(() => {
            const scroller = document.querySelector("#scroller");
            scroller.addEventListener("scroll", (event) => {
                console.log('fffff', scroller.scrollTop);
            });
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []
    );

    return (
        <div className="App">
            <Header/>
            <div
            //     style={{
            //     filter: `blur(${filterOne}px)`
            // }}
                className='circleOne'>1
            </div>
            <div
            //     style={{
            //     filter: `blur(${filterTwo}px)`
            // }}
                className='circleTwo'>1
            </div>
            <div
            //     style={{
            //     filter: `blur(${filterThree}px)`
            // }}
                className='circleThree'>1
            </div>
            <section className="banner-wrapper">
                <div id="scroller" data-aos="fade-right">
                    <h1 style={{
                        opacity: opacity,
                        fontSize: fontSize
                    }} className='App-container-title'>{placeholder}</h1>
                </div>
            </section>
            <section className="media-wrapper clearfix">
                <div className="content">
                    <InfoCards/>
                    <ChangesInAdvertising/>
                    {/*<StrategyDevelopment/>*/}
                </div>
                <StrategyDevelopment/>
            </section>
        </div>
    );
}
