import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
function NavBar() {
    return (
        <nav>
            <ul className="menu">
                <li>
                    <Link className="homeLink" to="/">
                        <h2 className="homeLinkTitle">Home</h2>
                    </Link>
                </li>
                <li>
                    <Link to="/sign-in">                        
                        <h2  className="userIcon"><i><FontAwesomeIcon icon={faUser} /></i></h2>
                    </Link>
                </li>                
            </ul>
        </nav>
    )
}
export default NavBar;