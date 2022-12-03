import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="Header">
            <Link to='/'>
                🏠
            </Link>
        </nav>
    )
}

export default Header