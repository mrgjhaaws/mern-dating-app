// Small helpers shared by components

export const FALLBACK_PHOTO = 'https://i.pravatar.cc/400x500?img=5';

// "Travel, Music, Food" -> ["Travel", "Music", "Food"]
export const parseInterests = (text) =>
  text.split(',').map((item) => item.trim()).filter(Boolean);

// ["Travel", "Music"] -> "Travel | Music"
export const formatInterests = (list = []) => list.join(' | ');

// If an image URL is broken, show a fallback picture
export const onImageError = (e) => {
  e.currentTarget.onerror = null;
  e.currentTarget.src = FALLBACK_PHOTO;
};
