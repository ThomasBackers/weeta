import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Carousel = ({ name, slides }) => {
    const slidesContainer = useRef()

    const ulWidth = 100 * slides.length + "%"
    const liWidth = 100 / slides.length + "%"

    const carouselButtonEffect = event => {
        if (!event.target.className.includes("--active")) {
            let clickedButtonIndex, previousButtonIndex
            const buttons = [...event.target.parentElement.children]
            for (let button of buttons) {
                if (button === event.target)
                    clickedButtonIndex = buttons.indexOf(button)
                if (button.className.includes("--active")) {
                    previousButtonIndex = buttons.indexOf(button)
                    button.className = "carousel__buttons__button"
                }
            }
            event.target.className += "--active"
        }
    }

    return (
        <section className="carousel">
            <h2 className="carousel__heading hidden">
                {name}
            </h2>

            <div className="carousel__screen">
                <ul 
                    className="carousel__screen__slides"
                    ref={slidesContainer}
                    style={{ width: `${ulWidth}` }}
                >
                    {slides.map(slide => {
                        return (
                            <li 
                                key={uuidv4()}
                                className="carousel__screen__slides__slide"
                                style={{ width: `${liWidth}` }}
                            >
                                {slide}
                            </li>
                        )
                    })}
                </ul>
            </div>
            
            <div className="carousel__buttons">
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
