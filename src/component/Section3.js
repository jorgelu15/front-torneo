import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import imgSlider1 from '../../img/Web/19.png';
import imgSlider2 from '../../img/Web/20.png';
import imgSlider3 from '../../img/Web/21.png';
import imgSlider4 from '../../img/Web/22.png';
import imgSlider5 from '../../img/Web/23.png';
import imgSlider6 from '../../img/Web/24.png';
import imgSlider7 from '../../img/Web/26.jpeg';
import imgSlider8 from '../../img/Web/27.jpeg';
import imgSlider9 from '../../img/Web/28.jpeg';
import locationIcon from '../../img/location.png';

const Section3 = () => {
    //useTranslation() se usa para el manejo de el multilenguaje de la plataforma
    const { t } = useTranslation();

    //una referencia para el contenedor de los cards/items
    const sliderContainer = useRef();

    //un state para el manejo de los datos que se van a necesitar
    const [slider, setSlider] = useState({
        cardWidth: "",//este guardara el ancho de las tarjetas
        cardMarginRight: "",//el margen de las tarjetas
        totalCards: "",//numero total de tarjetas
        currentSlide: 0//tarjeta actual o posicion actual de el slider
    });

    const { cardWidth, cardMarginRight, totalCards, currentSlide } = slider;

    useEffect(() => {
        //seleccionamos el contenedor de las tarjetas
        const cards = document.querySelectorAll('.slide_item');
        //le asignamos el tamaño total a el contenedor, lo calculamos a partir de los datos de el ancho, margen y cantidad de tarjetas
        sliderContainer.current.style.width = (cards[0].offsetWidth + parseInt(window.getComputedStyle(cards[0]).marginRight)) * cards.length - parseInt(window.getComputedStyle(cards[0]).marginRight) + 'px';
        //seteamos los datos en el state
        setSlider({
            cardWidth: cards[0].offsetWidth,
            cardMarginRight: parseInt(window.getComputedStyle(cards[0]).marginRight),
            totalCards: cards.length,
            currentSlide: 0
        })
    }, []);

    //cuando se precione la flecha de la derecha el slider se desplaza a la izquierda justo el tamaño de una tarjeta
    const onClickRight = () => {
        if (currentSlide * (cardWidth + cardMarginRight) < (cardWidth + cardMarginRight) * totalCards - cardMarginRight - window.innerWidth) {//verificamos que el tamaño de el desplazamiento sea menor a el contenedor, para evitar que se siga desplazando y deje espacios vacios
            setSlider({
                ...slider, currentSlide: currentSlide + 1
            });
            sliderContainer.current.style.transform = 'translateX(-' + (cardWidth + cardMarginRight) * (currentSlide + 1) + 'px)';//se usa la propiedad transform: translate para el movimiento
        }
    }

    //para la flecha izquierda es el mismo procedimiento solo variando la condicion del if
    const onClickLeft = () => {
        if (currentSlide > 0) {
            setSlider({
                ...slider, currentSlide: currentSlide - 1
            });
            sliderContainer.current.style.transform = 'translateX(-' + (cardWidth + cardMarginRight) * (currentSlide - 1) + 'px)';
        }
    }

    return (
        <div className='nuestros_proyectos'>
            <h2>{t('nuestros_proyectos')}</h2>
            <div className='nuestros_proyectos_container'>
                <div className="slider-arrow slider-arrow-left" onClick={onClickLeft}>&#10094;</div>
                <div className='inner_slider' ref={sliderContainer}>
                    <div className='slide_item'>
                        <img src={imgSlider1} />
                        <div className='img_info'>
                            <h2>Lorem Ipsum</h2>
                            <div className='location'>
                                <img src={locationIcon} alt='' />
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className='slide_item'>
                        <img src={imgSlider2} />
                        <div className='img_info'>
                            <h2>Lorem Ipsum</h2>
                            <div className='location'>
                                <img src={locationIcon} alt='' />
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className='slide_item'>
                        <img src={imgSlider3} />
                        <div className='img_info'>
                            <h2>Lorem Ipsum</h2>
                            <div className='location'>
                                <img src={locationIcon} alt='' />
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className='slide_item'>
                        <img src={imgSlider4} />
                        <div className='img_info'>
                            <h2>Lorem Ipsum</h2>
                            <div className='location'>
                                <img src={locationIcon} alt='' />
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className='slide_item'>
                        <img src={imgSlider5} />
                        <div className='img_info'>
                            <h2>Lorem Ipsum</h2>
                            <div className='location'>
                                <img src={locationIcon} alt='' />
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className='slide_item'>
                        <img src={imgSlider6} />
                        <div className='img_info'>
                            <h2>Lorem Ipsum</h2>
                            <div className='location'>
                                <img src={locationIcon} alt='' />
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className='slide_item'>
                        <img src={imgSlider7} />
                        <div className='img_info'>
                            <h2>Lorem Ipsum</h2>
                            <div className='location'>
                                <img src={locationIcon} alt='' />
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className='slide_item'>
                        <img src={imgSlider8} />
                        <div className='img_info'>
                            <h2>Lorem Ipsum</h2>
                            <div className='location'>
                                <img src={locationIcon} alt='' />
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className='slide_item'>
                        <img src={imgSlider9} />
                        <div className='img_info'>
                            <h2>Lorem Ipsum</h2>
                            <div className='location'>
                                <img src={locationIcon} alt='' />
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-arrow slider-arrow-right" onClick={onClickRight}>&#10095;</div>
            </div>
        </div>
    );
}

export default Section3;