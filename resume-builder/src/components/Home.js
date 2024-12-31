import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Resume Builder</h1>
      <Link to="/builder">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default Home;
