// Infographic 13/15 - Fetch and display profiles (manage grid)
import { useEffect, useState } from 'react';
import { getProfiles } from '../../services/api';
import ProfileCard from '../ProfileCard/ProfileCard';
import { Loader, ErrorBox } from '../Status/Status';
import './Profiles.css';

function Profiles() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfiles = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getProfiles();
      setProfiles(res.data);
    } catch (err) {
      setError('Failed to fetch profiles. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const handleUpdated = (updated) =>
    setProfiles((list) => list.map((p) => (p._id === updated._id ? updated : p)));

  const handleDeleted = (id) => setProfiles((list) => list.filter((p) => p._id !== id));

  if (loading) return <Loader />;
  if (error) return <ErrorBox message={error} onRetry={fetchProfiles} />;
  if (profiles.length === 0) return <p className="empty">No profiles yet. Add one from the “Add Profile” page.</p>;

  return (
    <div className="profile-grid">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile._id}
          profile={profile}
          onProfileUpdated={handleUpdated}
          onProfileDeleted={handleDeleted}
        />
      ))}
    </div>
  );
}

export default Profiles;
