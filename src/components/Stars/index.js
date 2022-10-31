import React from "react";
import './style.css';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars,reviews }) => {
  const startRating = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill className="star-icon" />
        ) : stars >= number ? (
          <BsStarHalf className="star-icon" />
        ) : (
          <BsStar className="star-icon" />
        )}
      </span>
    );
  });

  return <div className="star-container">
    {startRating}
    <p>({reviews} customer reviews)</p>
  </div>;
};

export default Stars;
