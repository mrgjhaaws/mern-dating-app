// Infographics 10, 11, 12 - CRUD routes for dating profiles
const express = require('express');
const mongoose = require('mongoose');
const Profile = require('../models/Profile');

const router = express.Router();

// Small helper: make sure interests is always an array of clean strings
const cleanInterests = (value) => {
  if (Array.isArray(value)) return value.map((i) => String(i).trim()).filter(Boolean);
  if (typeof value === 'string') return value.split(',').map((i) => i.trim()).filter(Boolean);
  return [];
};

// Small helper: reject invalid MongoDB ids with 400 instead of crashing
const checkId = (req, res, next) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({ message: 'Invalid profile id' });
  }
  next();
};

// ---------------- GET /api/profiles  (Infographic 10) ----------------
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().sort({ createdAt: -1 });
    res.json(profiles);
  } catch (error) {
    console.error('Error fetching profiles:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ---------------- GET /api/profiles/:id  (bonus) ----------------
router.get('/:id', checkId, async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json(profile);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ---------------- POST /api/profiles  (Infographic 11) ----------------
router.post('/', async (req, res) => {
  try {
    const { name, age, photo, bio, interests } = req.body;

    if (!name || !age || !photo) {
      return res.status(400).json({ message: 'Name, age and photo are required' });
    }

    const newProfile = new Profile({
      name,
      age,
      photo,
      bio: bio || '',
      interests: cleanInterests(interests),
    });

    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    console.error('Error adding profile:', error);
    const status = error.name === 'ValidationError' ? 400 : 500;
    res.status(status).json({ message: status === 400 ? 'Validation error' : 'Server error', error: error.message });
  }
});

// ---------------- PUT /api/profiles/:id  (Infographic 12) ----------------
router.put('/:id', checkId, async (req, res) => {
  try {
    const { name, age, photo, bio, interests } = req.body;

    // Only update fields that were actually sent
    const updates = {};
    if (name !== undefined) updates.name = name;
    if (age !== undefined) updates.age = age;
    if (photo !== undefined) updates.photo = photo;
    if (bio !== undefined) updates.bio = bio;
    if (interests !== undefined) updates.interests = cleanInterests(interests);

    const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, updates, {
      new: true, // return the updated document
      runValidators: true, // apply schema rules to the update
    });

    if (!updatedProfile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.json({ message: 'Profile updated successfully', profile: updatedProfile });
  } catch (error) {
    console.error('Error updating profile:', error);
    const status = error.name === 'ValidationError' ? 400 : 500;
    res.status(status).json({ message: status === 400 ? 'Validation error' : 'Server error', error: error.message });
  }
});

// ---------------- DELETE /api/profiles/:id  (Infographic 12) ----------------
router.delete('/:id', checkId, async (req, res) => {
  try {
    const deletedProfile = await Profile.findByIdAndDelete(req.params.id);

    if (!deletedProfile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.json({ message: 'Profile deleted successfully', profile: deletedProfile });
  } catch (error) {
    console.error('Error deleting profile:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
