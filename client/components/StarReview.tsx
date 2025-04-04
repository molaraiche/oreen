import { useState } from "react";
import { Star } from "lucide-react";

interface StarReviewProps {
  onChange: (review: number) => void;
}

const StarReview: React.FC<StarReviewProps> = ({ onChange }) => {
  const [hover, setHover] = useState<number | null>(null);
  const [selectedReview, setSelectedReview] = useState<number>(0);

  const handleClick = (review: number) => {
    setSelectedReview(review);
    onChange(review);
  };

  return (
    <div className='flex space-x-2 justify-center py-2'>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-8 h-8 cursor-pointer transition-all ${
            (hover ?? selectedReview) >= star
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-400"
          }`}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(null)}
          onClick={() => handleClick(star)}
        />
      ))}
    </div>
  );
};

export default StarReview;
