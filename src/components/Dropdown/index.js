import { Link } from "react-router-dom";
import "./styles.css";

export default function Dropdown({ onClick }) {
    return (
        <ul onClick={onClick} className='dropdown'>
            <li>
                <Link to='/'>HOME</Link>
            </li>
            <li>
                <Link to='/about'>ABOUT</Link>
            </li>
            <li>
                <Link to='/projects'>PROJECTS</Link>
            </li>
            <li>
                <Link to='/skills'>SKILLS</Link>
            </li>

            <li>
                <Link to='/contact'>CONTACT</Link>
            </li>
        </ul>
    );
}
