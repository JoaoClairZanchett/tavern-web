import React, {useState} from "react";
import { Link } from 'react-router-dom'
import "./home.styles.scss";

const Home = () => {

    const [mouseHover, setMouseHover] = useState<boolean>();
    
    function handleHoverIn() {
        setMouseHover(true);
    }

    function handleHoverOut() {
        setMouseHover(false);
    }

    return (
        <div className={`${mouseHover ? 'colorfull' : 'black-white'} container`} >
        <Link id='home-link' className="link" to="/login" onMouseLeave={handleHoverOut} onMouseEnter={handleHoverIn}>
            <span>
            </span>
            <strong>Comece sua aventura.</strong>
        </Link>
        </div>
    );
};

export default Home;
