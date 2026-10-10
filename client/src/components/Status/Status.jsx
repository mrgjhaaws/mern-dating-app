// Infographic 14/15 - Loading state and error state
import './Status.css';

export const Loader = ({ text = 'Loading Profiles...' }) => (
  <div className="status">
    <div className="spinner" />
    <p>{text}</p>
  </div>
);

export const ErrorBox = ({ message, onRetry }) => (
  <div className="status error-box">
    <div className="error-icon">⚠</div>
    <h3>Failed to load profiles</h3>
    <p>{message || 'Server error. Please try again later.'}</p>
    {onRetry && <button onClick={onRetry}>Retry</button>}
  </div>
);
