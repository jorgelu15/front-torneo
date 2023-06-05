import React, { useEffect, useRef, useState } from 'react';

const Carousel: React.FC = () => {
    const sliderContainer = useRef<HTMLDivElement>(null);

    const [slider, setSlider] = useState({
        cardWidth: "",
        cardMarginRight: "",
        totalCards: "",
        currentSlide: 0
    });

    const { cardWidth, cardMarginRight, totalCards, currentSlide } = slider;

    useEffect(() => {
        const cards = sliderContainer.current?.querySelectorAll<HTMLDivElement>('.slide_item');
        if (sliderContainer.current && cards) {
            sliderContainer.current.style.width = (cards[0].offsetWidth + parseInt(window.getComputedStyle(cards[0]).marginRight)) * cards.length - parseInt(window.getComputedStyle(cards[0]).marginRight) + 'px';
            setSlider({
                cardWidth: cards[0].offsetWidth.toString(),
                cardMarginRight: parseInt(window.getComputedStyle(cards[0]).marginRight).toString(),
                totalCards: cards.length.toString(),
                currentSlide: 0
            });
        }
    }, []);

    const onClickRight = () => {
        if (sliderContainer.current && currentSlide * (parseInt(cardWidth) + parseInt(cardMarginRight)) < (parseInt(cardWidth) + parseInt(cardMarginRight)) * parseInt(totalCards) - parseInt(cardMarginRight) - window.innerWidth) {
            setSlider({
                ...slider,
                currentSlide: currentSlide + 1
            });
            if (sliderContainer.current.style) {
                sliderContainer.current.style.transform = 'translateX(-' + (parseInt(cardWidth) + parseInt(cardMarginRight)) * (currentSlide + 1) + 'px)';
            }
        }
    }

    const onClickLeft = () => {
        if (currentSlide > 0) {
            setSlider({
                ...slider,
                currentSlide: currentSlide - 1
            });
            if (sliderContainer.current && sliderContainer.current.style) {
                sliderContainer.current.style.transform = 'translateX(-' + (parseInt(cardWidth) + parseInt(cardMarginRight)) * (currentSlide - 1) + 'px)';
            }
        }
    }

    return (
        <div className='nuestros_proyectos'>
            <div className='nuestros_proyectos_container'>
                <div className="slider-arrow slider-arrow-left" onClick={onClickLeft}>&#10094;</div>
                <div className='inner_slider' ref={sliderContainer}>
                    <div className='slide_item'>
                        {new Array(15).fill("").map((item, idx) => (
                            <div className='slide_item'>
                                <img src={"https://esports.as.com/2020/06/04/valorant/grupos-Twitch-Rivals-Valorant_1361283862_403051_1440x600.jpg"} alt='Slider 1' />
                            </div>
                        ))}
                    </div>
                    {/* Agrega más elementos de slide_item con las imágenes y contenido correspondiente */}
                </div>
                <div className="slider-arrow slider-arrow-right" onClick={onClickRight}>&#10095;</div>
            </div>
        </div>
    );
}

export default Carousel;
