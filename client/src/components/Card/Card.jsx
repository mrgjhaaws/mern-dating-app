// Infographic 06/15 (card) + 07/15 (swipe buttons below the card)
import './Card.css';
import SwipeButtons from '../SwipeButtons/SwipeButtons';
import { formatInterests, onImageError } from '../../utils/helpers';

// "onSwipe" is optional. When it is passed, swipe buttons are shown.
const Card = ({ profile, onSwipe }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <img
          src={profile.photo}
          alt={profile.name}
          className="card-img"
          onError={onImageError}
        />
        <div className="card-info">
          <h3 className="card-name">
            {profile.name}, {profile.age}
          </h3>
          <p className="card-details">{formatInterests(profile.interests)}</p>
        </div>
      </div>
      {onSwipe && <SwipeButtons onSwipe={onSwipe} />}
    </div>
  );
};

export default Card;
