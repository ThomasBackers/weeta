import Header from './components/header/Header'
import Carousel from './components/utils/carousel/Carousel'

const UNSPLASH_API_URL = "https://api.unsplash.com/"
const OPENWEATHER_API_URL = "https://api.openweathermap.org/data/2.5/"

const App = () => {
    return (
        <>
			<Header />
			<main>
                <Carousel name="homepage carousel" slides={[
                    <>
                        <img src="" alt="" />
                        <p></p>
                    </>,
                    <>
                        <img src="" alt="" />
                        <p></p>
                    </>,
                    <>
                        <img src="" alt="" />
                        <p></p>
                    </>,
                ]} />
            </main>
			<footer></footer>
        </>
    )
}

export default App
