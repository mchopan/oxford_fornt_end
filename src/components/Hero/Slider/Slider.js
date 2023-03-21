import React from 'react'
import classNames from 'classnames';

import './Slider.css'

const Slider = () => {

    const [activeSlide, setActiveSlide] = React.useState(-1);
    const [prevSlide, setPrevSlide] = React.useState(-1);
    const [sliderReady, setSliderReady] = React.useState(false);
    const IMAGE_PARTS = 4;
    const AUTOCHANGE_TIME = 4000;
    const changeTO = React.useRef(null);

    const changeSlides = (change) => {
        clearTimeout(changeTO.current);
        const prevSlide = activeSlide;
        let newActiveSlide = prevSlide + change;
        if (newActiveSlide < 0) newActiveSlide = slides.length - 1;
        if (newActiveSlide >= slides.length) newActiveSlide = 0;
        setActiveSlide(newActiveSlide);
        setPrevSlide(prevSlide);
    }

    React.useEffect(() => {
        const runAutochangeTO = () => {
            changeTO.current = setTimeout(() => {
                changeSlides(1);
                runAutochangeTO();
            }, AUTOCHANGE_TIME);
        }
        runAutochangeTO();
        setTimeout(() => {
            setActiveSlide(0);
            setSliderReady(true);
        }, 0);
        return () => {
            clearTimeout(changeTO.current);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // New Code




    const slides = [
        {
            heading: 'Education',
            subHeading: 'A solid foundation for success',
            img: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            heading: 'ENRICH',
            subHeading: 'Experiential learning opportunities',
            img: 'https://images.pexels.com/photos/1236421/pexels-photo-1236421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            heading: 'Empowerment',
            subHeading: 'Unlock your full potential',
            img: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            heading: 'Nourish',
            subHeading: 'A place for growth',
            img: 'https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
    ];

    return (
        <div className={classNames('slider', { 's--ready': sliderReady })}>
            <p className="slider__top-heading">Welcome To Caset College Of Computer Science</p>
            <div className="slider__slides">
                {slides.map((slide, index) => (
                    <div
                        className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index })}
                        key={slide.city}
                    >
                        <div className="slider__slide-content">
                            <h3 className="slider__slide-subheading">{slide.subHeading || slide.heading}</h3>
                            <h2 className="slider__slide-heading">
                                {slide.heading.split('').map(l => <span style={{ fontWeight: 'bolder' }}>{l}</span>)}
                            </h2>
                        </div>
                        <div className="slider__slide-parts">
                            {[...Array(IMAGE_PARTS).fill()].map((x, i) => (
                                <div className="slider__slide-part" key={i}>
                                    <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="slider__control" onClick={() => changeSlides(-1)} />
            <div className="slider__control slider__control--right" onClick={() => changeSlides(1)} />
        </div>
    );
}
export default Slider;