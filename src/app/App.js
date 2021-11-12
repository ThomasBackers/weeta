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
                    <figure>
                        <img src="" alt="" />
                        <p></p>
                    </figure>,
                    <figure>
                        <img src="" alt="" />
                        <p></p>
                    </figure>,
                    <figure>
                        <img src="" alt="" />
                        <p></p>
                    </figure>,
                ]} />
            </main>
			<footer></footer>
        </>
    )
}

export default App
