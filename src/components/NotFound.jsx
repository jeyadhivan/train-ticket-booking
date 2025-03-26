// components/NotFound.js
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <Link to="/" className="btn btn-primary">
            Go to Homepage
          </Link>
        </div>
        <div className="not-found-image">
          <img src="https://illustrations.popsy.co/amber/railway-sign.svg" alt="404 illustration" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;