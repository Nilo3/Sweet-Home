import { useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

function Stars({ handleRating }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div style={{ display: "flex" }}> 
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              className="hidden"
              name="rating"
              value={currentRating}
              onClick={() => {
                setRating(currentRating);
                handleRating(currentRating);
              }}
            />
            <FaStar
              className="star cursor-pointer"
              size={15}
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

Stars.propTypes = {
  handleRating: PropTypes.any.isRequired,
};

export default Stars;
