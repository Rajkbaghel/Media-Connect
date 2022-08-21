import "./landing_page.css" 
import Image from "./banner_image.webp";
import {Link} from "react-router-dom"
const LandingPage=()=>{
    return(
        <>
        <div className="landing-container">
            <img src={Image} alt="banner"></img>
            <div className="data">
            <h1>
                10X Team 04
            </h1>
            <Link to="/postview"><button>Enter</button></Link>
            </div>
        </div>
        </>
    )
}
export default LandingPage;