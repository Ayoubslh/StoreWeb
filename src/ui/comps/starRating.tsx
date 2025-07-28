import { useState } from "react";

function StarRatingComponent( ratingProps: { rating: number }) {
  const [rating, setRating] = useState(ratingProps.rating|| 0);
  // const [hoveredStar, setHoveredStar] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="flex space-x-1 text-3xl sm:text-4xl cursor-pointer text-yellow-400">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            // onMouseEnter={() => setHoveredStar(star)}
            // onMouseLeave={() => setHoveredStar(0)}
            aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
            // className={`transition-transform duration-200 ${
            //   (hoveredStar || rating) >= star
            //     ? "text-yellow-400 scale-110"
            //     : "text-gray-300"
            // }`}
          >
            ★
          </span>
        ))}
      </div>
      
    </div>
  );
}

export default StarRatingComponent;
