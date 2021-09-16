import React from "react";
import Review from "./Review/Review";

const Reviews = ({ reviews, type }) => {
  console.log("reviews from reviews: ", reviews);
  return (
    <div>
      {reviews ? (
        reviews.map((review) => <Review type={type} review={review} />)
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};

export default Reviews;
