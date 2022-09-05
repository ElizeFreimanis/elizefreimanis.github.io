import "./styles.css";
import { Link } from "react-router-dom";

export default function ProjectContainer({ children, img, link }) {
    return (
        <Link to={{ pathname: `${link}` }} target='_blank' style={{ textDecoration: "none" }}>
            <div>
                <div className='projectContainer'>
                    <img alt='project screenshot' className='projectImage' src={img} />
                    <h2 className='project-title'>{children}</h2>
                </div>
            </div>
        </Link>
    );
}
