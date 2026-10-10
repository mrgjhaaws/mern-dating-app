// Infographic 13/15 - Profile card with Edit and Delete buttons
import { useState } from 'react';
import { updateProfile, deleteProfile } from '../../services/api';
import { parseInterests, onImageError } from '../../utils/helpers';
import './ProfileCard.css';

function ProfileCard({ profile, onProfileUpdated, onProfileDeleted }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: profile.name,
    age: profile.age,
    bio: profile.bio || '',
    interests: (profile.interests || []).join(', '),
  });

  const handleDelete = async () => {
    if (window.confirm('Delete this profile?')) {
      try {
        await deleteProfile(profile._id);
        onProfileDeleted(profile._id);
      } catch (err) {
        alert('Error deleting profile');
      }
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await updateProfile(profile._id, {
        name: form.name,
        age: Number(form.age),
        bio: form.bio,
        interests: parseInterests(form.interests),
      });
      onProfileUpdated(res.data.profile);
      setEditing(false);
    } catch (err) {
      alert('Error updating profile');
    }
  };

  const change = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} onError={onImageError} />

      {editing ? (
        <form className="profile-edit" onSubmit={handleSave}>
          <input value={form.name} onChange={change('name')} placeholder="Name" required />
          <input type="number" min="18" value={form.age} onChange={change('age')} placeholder="Age" required />
          <textarea value={form.bio} onChange={change('bio')} placeholder="Bio" />
          <input value={form.interests} onChange={change('interests')} placeholder="Interests (comma separated)" />
          <div className="actions">
            <button type="submit" className="save">Save</button>
            <button type="button" onClick={() => setEditing(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <div className="profile-body">
          <h3>{profile.name}, {profile.age}</h3>
          <p className="bio">{profile.bio}</p>
          <div className="tags">
            {profile.interests?.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <div className="actions">
            <button onClick={() => setEditing(true)}>Edit</button>
            <button className="delete" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
