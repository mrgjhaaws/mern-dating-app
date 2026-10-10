// Infographic 05/15 (+ responsive menu from 14/15)
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <span className="heart">❤</span>
        <h2>MERN Dating</h2>
      </div>

      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? '✕' : '☰'}
      </button>

      <nav className={`nav-links ${open ? 'open' : ''}`}>
        <NavLink to="/" end onClick={close}>Discover</NavLink>
        <NavLink to="/matches" onClick={close}>Matches</NavLink>
        <NavLink to="/profiles" onClick={close}>Profiles</NavLink>
        <NavLink to="/add" onClick={close}>Add Profile</NavLink>
      </nav>

      <div className="user">
        <img src="https://i.pravatar.cc/80?img=68" alt="User" />
      </div>
    </header>
  );
};

export default Header;
