import { Link } from "react-router-dom";
import "./Quiz.css"; 
import scienceImg from "./ProjectImages/science&naturetopicImg.jpg";
import HistoryImg from "./ProjectImages/history&culturetopicImg.jpg"
import sportsImg from "./ProjectImages/sportsTopicImg.png";
import bollywoodImg from "./ProjectImages/bollywoodTopicImg.jpg"
import socialmediaImg from "./ProjectImages/socialmediaTopicImg.jpg";
import traditionImg from "./ProjectImages/traditionTopicImg.jpg";



const Quiz = () => {
    return(
        <>
<div className="quizDiv">
<div className="box" >
<h1 className="heading text-center">- Choose your Challenge -</h1>
  <div className="row" style={{columnGap:"3rem"}}>
    <div className="col">
    <div className="card" style={{width: "23rem", height:"15rem"}}>
  <img src={scienceImg} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Science & Nature</h5>
    <Link to="/science" className="quizBtn btn btn-outline-dark">Start</Link>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" style={{width: "23rem", height:"15rem"}}>
  <img src={HistoryImg} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">History & Culture</h5>
    <Link to="/history" className="quizBtn btn btn-outline-dark">Start</Link>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" style={{width: "23rem", height:"15rem"}}>
  <img src={sportsImg} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Games & Sports</h5>
    <Link to="/sport" className="quizBtn btn btn-outline-dark">Start</Link>
  </div>
</div>
    </div>
    </div>



    <div className="row" style={{marginTop:"3rem", columnGap:"3rem"}}>
    <div className="col">
    <div className="card" style={{width: "23rem", height:"15rem"}}>
  <img src={bollywoodImg} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Bollywood</h5>
    <Link to="/bollywood" className="quizBtn btn btn-outline-dark">Start</Link>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" style={{width: "23rem", height:"15rem"}}>
  <img src={socialmediaImg} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Internet & SocialMedia</h5>
    <Link to="/social" className="quizBtn btn btn-outline-dark">Start</Link>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" style={{width: "23rem", height:"15rem"}}>
  <img src={traditionImg} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Festivals & Traditions</h5>
    <Link to="/tradition" className="quizBtn btn btn-outline-dark">Start</Link>
  </div>
</div>
    </div>
    </div>
  </div>
</div>
 </>
    )
}

export default Quiz;
