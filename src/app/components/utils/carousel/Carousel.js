import { v4 as uuidv4 } from 'uuid'

const Carousel = ({ name, slides }) => {
    const ulSlidesWidth = 100 * slides.length + "%"
    const liSlideWidth = 100 / slides.length + "%"

    return (
        <section className="carousel">
            <h2 className="carousel__heading hidden">
                {name}
            </h2>

            <div className="carousel__screen">
                <ul className="carousel__screen__slides">
                    {slides.map(slide => {
                        return (
                            <li key={uuidv4()} className="carousel__screen__slides__slide">
                                {slide}
                            </li>
                        )
                    })}
                </ul>
            </div>
            
            <ul className="carousel__buttons">
                {slides.map(() => {
                    return (
                        <li key={uuidv4()} className="carousel__buttons__button"></li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Carousel
