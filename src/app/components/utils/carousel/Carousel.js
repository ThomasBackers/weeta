import { useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Carousel = ({ name, slides }) => {
    const ulWidth = 100 * slides.length
    const liWidth = 100 / slides.length
    const slidesContainer = useRef()
    const buttonsContainer = useRef()
    const styleTag = useRef()

    useEffect(() => {
        document.querySelector("head").appendChild(styleTag.current)
    }, [])

    let keyframeSwitch = 0
    const carouselKeyframesGenerator = (startIndex, endIndex) => {
        const keyframeName = `carouselSlide${keyframeSwitch}`
        styleTag.current.textContent = `
            @keyframes ${keyframeName} {
                0% {
                    transform: translateX(${-(startIndex * liWidth) + "%"})
                }
                100% {
                    transform: translateX(${-(endIndex * liWidth) + "%"})
                }
            }
        `
        keyframeSwitch ? keyframeSwitch = 0 : keyframeSwitch = 1
        return keyframeName
    }

    const carouselButtonEffect = event => {
        if (!event.target.className.includes("--active")) {
            let clickedButtonIndex, previousButtonIndex
            const buttons = [...buttonsContainer.current.children]
            for (let button of buttons) {
                if (button === event.target)
                    clickedButtonIndex = buttons.indexOf(button)
                if (button.className.includes("--active")) {
                    previousButtonIndex = buttons.indexOf(button)
                    button.className = "carousel__buttons__button"
                }
            }
            event.target.className += "--active"
            const keyframeName = carouselKeyframesGenerator(previousButtonIndex, clickedButtonIndex)
            slidesContainer.current.style.animation = `${keyframeName} 0.3s ease-out forwards`
        }
    }

    let touchStartXCoordinate = null
    const touchStartEffect = event => {
        touchStartXCoordinate = event.touches[0].clientX
    }

    const swipeSlides = (event, xDelta) => {
        const slides = [...slidesContainer.current.children]
        let end, step, start
        if (xDelta > 0) {
            // to the left
            end = slides.length - 1
            step = 1
            start = 0
        } else {
            // to the right
            end = 0
            step = -1
            start = slides.length - 1
        }
        let touchedSlideIndex, nextSlideIndex
        for (let slide of slides) {
            if (slide === event.target) {
                touchedSlideIndex = slides.indexOf(slide)
                if (touchedSlideIndex !== end)
                    nextSlideIndex = touchedSlideIndex + step
                else nextSlideIndex = start
            }
        }
        const buttons = buttonsContainer.current.children
        buttons[touchedSlideIndex].className = "carousel__buttons__button"
        buttons[nextSlideIndex].className += "--active"
        const keyframeName = carouselKeyframesGenerator(touchedSlideIndex, nextSlideIndex)
        slidesContainer.current.style.animation = `${keyframeName} 0.3s ease-out forwards`
    }
    
    const touchMoveEffect = event => {
        if (touchStartXCoordinate) {
            const currentX = event.touches[0].clientX
            const xDelta = touchStartXCoordinate - currentX
            swipeSlides(event, xDelta)
            touchStartXCoordinate = null
        }
    }

    return (
        <section className="carousel">
            <h2 className="carousel__heading hidden">
                {name}
            </h2>

            <style className={`${name}-keyframes`} ref={styleTag}></style>

            <div className="carousel__screen">
                <ul 
                    className="carousel__screen__slides"
                    ref={slidesContainer}
                    style={{ width: `${ulWidth}%` }}
                    onTouchStart={touchStartEffect}
                    onTouchMove={touchMoveEffect}
                >
                    {slides.map(slide => {
                        return (
                            <li 
                                key={uuidv4()}
                                className="carousel__screen__slides__slide"
                                style={{ width: `${liWidth}%` }}
                            >
                                {slide}
                            </li>
                        )
                    })}
                </ul>
            </div>
            
            <div className="carousel__buttons" ref={buttonsContainer}>
                {(() => {
                    const buttonsChildren = []
                    let className = "carousel__buttons__button--active"
                    for (let i = 0; i < slides.length; i++) {
                        buttonsChildren.push(
                            <input
                                key={uuidv4()}
                                type="checkbox"
                                className={className}
                                onChange={carouselButtonEffect}
                            />
                        )
                        if (i === 0) className = "carousel__buttons__button"
                    }
                    return buttonsChildren
                })()}
            </div>
        </section>
    )
}

export default Carousel
