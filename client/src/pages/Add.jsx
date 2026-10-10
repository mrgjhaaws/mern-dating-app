import { useNavigate } from 'react-router-dom';
import AddProfile from '../components/AddProfile/AddProfile';

function Add() {
  const navigate = useNavigate();
  return <AddProfile onProfileAdded={() => setTimeout(() => navigate('/profiles'), 800)} />;
}

export default Add;
