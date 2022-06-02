import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <Link to ={"/"} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link  to ={"admin"} className="nav-link">Admin</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;