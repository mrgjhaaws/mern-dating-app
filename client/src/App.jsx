// Infographics 04, 05, 06, 07, 13, 14 - everything comes together here
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Discover from './pages/Discover';
import Matches from './pages/Matches';
import Manage from './pages/Manage';
import Add from './pages/Add';

function App() {
  // Liked profiles are kept in state and saved in the browser (localStorage)
  const [matches, setMatches] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('matches')) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('matches', JSON.stringify(matches));
  }, [matches]);

  const handleMatch = (profile, type) => {
    setMatches((list) =>
      list.some((m) => m._id === profile._id)
        ? list
        : [...list, { ...profile, superliked: type === 'superlike' }]
    );
  };

  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Discover onMatch={handleMatch} />} />
          <Route path="/matches" element={<Matches matches={matches} onClear={() => setMatches([])} />} />
          <Route path="/profiles" element={<Manage />} />
          <Route path="/add" element={<Add />} />
          <Route path="*" element={<p className="center-text">Page not found</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
