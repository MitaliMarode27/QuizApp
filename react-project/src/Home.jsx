import "./Home.css"; 
import { Link } from "react-router-dom";
import backgroundImage from "./ProjectImages/HomepageImg.jpg";

const Home = () => {
    return(
        <>
        <img className="homeImg" src={backgroundImage} alt="" />
       <div className="HomePage">
        <p className="para text-white display-6"> " Test Your Knowledge! Click Below </p>
        <p className="para text-white display-6">To Begin The <span style={{color:"goldenrod"}}>Quiz..💡</span>"</p>
        <Link to="/quiz" className="startbtn btn btn-outline-light">Start</Link>
       </div>
        </>
    )
}

export default Home