import { Link } from "react-router-dom"
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import Header from "../components/Header"
import '../components/Header.css'

const HomePage = () => {
    return (
        <div className="HomePage">
            <Header />
            <Link to='/beers'>
                <img src={beers} alt="img of beers to illustrate" />
                <h1>All Beers</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis odit hic dolor assumenda similique consequatur obcaecati est totam aperiam inventore aut quibusdam exercitationem beatae, iure dolore voluptas dignissimos tenetur?</p>
            </Link>
            <Link to='/random-beer'>
                <img src={randomBeer} alt="img of beers to illustrate" />
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias quibusdam aspernatur aut? Perspiciatis repellat reiciendis dignissimos adipisci aut fuga amet, quisquam rem illo esse officiis explicabo ducimus veritatis magni.</p>
            </Link>
            <Link to='/new-beer'>
                <img src={newBeer} alt="img of beers to illustrate" />
                <h1>New Beer</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus harum molestiae iusto! Alias, ea id consequatur suscipit, explicabo, magnam fugit voluptatum commodi in tempora ullam velit. Tenetur culpa nisi eaque?</p>
            </Link>
        </div>
    )
}

export default HomePage