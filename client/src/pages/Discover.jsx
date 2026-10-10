// Swipe-style discovery page: Card (06) + SwipeButtons (07) + real data (13)
import { useEffect, useState } from 'react';
import { getProfiles } from '../services/api';
import Card from '../components/Card/Card';
import { Loader, ErrorBox } from '../components/Status/Status';

function Discover({ onMatch }) {
  const [profiles, setProfiles] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState('');

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getProfiles();
      setProfiles(res.data);
      setIndex(0);
    } catch (err) {
      setError('Failed to fetch profiles. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleSwipe = (type) => {
    const current = profiles[index];
    if (type === 'like' || type === 'superlike') {
      onMatch(current, type);
      setToast(type === 'superlike' ? `⭐ Super liked ${current.name}!` : `❤ You liked ${current.name}!`);
    } else {
      setToast(`✕ Skipped ${current.name}`);
    }
    setTimeout(() => setToast(''), 1500);
    setIndex((i) => i + 1);
  };

  if (loading) return <Loader />;
  if (error) return <ErrorBox message={error} onRetry={load} />;

  if (profiles.length === 0) {
    return <p className="center-text">No profiles found. Run <code>npm run seed</code> in the server folder or add one.</p>;
  }

  if (index >= profiles.length) {
    return (
      <div className="center-text">
        <h2>🎉 You have seen everyone!</h2>
        <button className="primary-btn" onClick={load}>Start again</button>
      </div>
    );
  }

  return (
    <div>
      <Card key={profiles[index]._id} profile={profiles[index]} onSwipe={handleSwipe} />
      <p className="toast">{toast || '\u00A0'}</p>
    </div>
  );
}

export default Discover;
