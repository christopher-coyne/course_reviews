import React from "react";
import "./styles/Review.css";

const Review = ({ review, type }) => {
  return (
    <div className="reviewContainer">
      <div className="reviewHeader">
        <div className="reviewName">
          {" "}
          {type === "PROF" ? review.course_name : review.prof_name}{" "}
        </div>
        <div className="reviewDate"> {review.date} </div>
      </div>
      <div className="reviewContent">{review.content}</div>
      <div className="reviewWorkload">
        <h4 className="workloadTitle">Workload</h4>
        {review.workload}
      </div>
      <div className="reviewAgrees">
        <div className="agreeButtons">
          <button className="agree-btn">Agree</button>
          <button className="agree-btn">Disagree</button>
        </div>
        <div className="agreeNumbers">
          <span className="agree">
            {review.agree}
            {" Agree"}
          </span>
          <span className="disagree">
            {review.disagree}
            {" Disagree"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Review;
