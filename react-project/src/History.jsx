import  { useState } from "react";
import "./index.css"; // Add necessary CSS
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Api1 from "./Api"; // Assuming Api1 is imported from a data file
import { Link } from "react-router-dom";

const History = () => {
  const [data, setData] = useState(Api1);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="mainDiv" id="maindivId1">
        <div className="container">
          <h6 className="topicName mt-2 text-center text-white display-6" style={{ textShadow: "2px 2px 4px black" }}>History & Culture</h6>
          <div className="mt-4">
            {data.map((currElm, index) => {
              const { id, question, ans, img } = currElm;
              return (
                <div key={id} className="question-box">
                  <div className="question">
                    <button
                      onClick={() => toggleAnswer(index)}
                      className="btn btn-outline-warning"
                    >
                      {activeIndex === index ? <VisibilityOff className="eye" /> : <Visibility className="eye" />}
                    </button>{" "}
                    {question}
                  </div>
                  {activeIndex === index && (
                    <div className="answer">
                      <img className="listImg" src={img} alt="" />
                      {ans}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
         <Link className="link btn btn-outline-danger" to="/quiz">Exit</Link>       
        </div>
      </div>
    </>
  );
};

export default History;