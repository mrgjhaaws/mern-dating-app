// Infographic 07/15 - Like / Super Like / Dislike buttons
import './SwipeButtons.css';

const SwipeButtons = ({ onSwipe }) => {
  return (
    <div className="swipe-buttons">
      <button className="btn dislike" onClick={() => onSwipe('dislike')} aria-label="Dislike" title="Dislike">
        ✕
      </button>
      <button className="btn superlike" onClick={() => onSwipe('superlike')} aria-label="Super like" title="Super like">
        ★
      </button>
      <button className="btn like" onClick={() => onSwipe('like')} aria-label="Like" title="Like">
        ♥
      </button>
    </div>
  );
};

export default SwipeButtons;
