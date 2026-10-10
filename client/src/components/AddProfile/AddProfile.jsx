// Infographic 13/15 - Add a new profile (form)  | calls POST /api/profiles
import { useState } from 'react';
import { addProfile } from '../../services/api';
import { parseInterests } from '../../utils/helpers';
import './AddProfile.css';

const emptyForm = { name: '', age: '', photo: '', bio: '', interests: '' };

function AddProfile({ onProfileAdded }) {
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null); // { type: 'success' | 'error', text }

  const change = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    try {
      await addProfile({
        ...form,
        age: Number(form.age),
        interests: parseInterests(form.interests),
      });
      setForm(emptyForm);
      setMessage({ type: 'success', text: 'Profile added successfully!' });
      onProfileAdded?.();
    } catch (err) {
      const text = err.response?.data?.message || 'Error adding profile';
      setMessage({ type: 'error', text });
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add New Dating Profile</h2>

      <label>Name</label>
      <input type="text" placeholder="Name" value={form.name} onChange={change('name')} required />

      <label>Age</label>
      <input type="number" min="18" placeholder="Age" value={form.age} onChange={change('age')} required />

      <label>Photo URL</label>
      <input type="url" placeholder="https://..." value={form.photo} onChange={change('photo')} required />

      <label>Bio</label>
      <textarea placeholder="Bio" value={form.bio} onChange={change('bio')} />

      <label>Interests (comma separated)</label>
      <input type="text" placeholder="Travel, Music, Food" value={form.interests} onChange={change('interests')} />

      <button type="submit" disabled={saving}>{saving ? 'Saving...' : 'Add Profile'}</button>

      {message && <p className={`msg ${message.type}`}>{message.text}</p>}
    </form>
  );
}

export default AddProfile;
