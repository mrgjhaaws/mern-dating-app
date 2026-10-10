import { Link } from 'react-router-dom';
import { onImageError } from '../utils/helpers';

function Matches({ matches, onClear }) {
  if (matches.length === 0) {
    return (
      <div className="center-text">
        <h2>No matches yet</h2>
        <p>Like someone on the <Link to="/">Discover</Link> page to see them here.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="row-between">
        <h2>Your Matches ({matches.length})</h2>
        <button className="primary-btn" onClick={onClear}>Clear</button>
      </div>
      <div className="match-grid">
        {matches.map((m) => (
          <div className="match" key={m._id}>
            <img src={m.photo} alt={m.name} onError={onImageError} />
            <p>{m.superliked ? '⭐ ' : '❤ '}{m.name}, {m.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Matches;
