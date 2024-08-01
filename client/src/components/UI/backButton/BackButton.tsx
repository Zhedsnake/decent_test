import React from 'react';
import { Link } from 'react-router-dom';


const BackButton: React.FC = () => (
  <div>
    <Link to={`/`}>
        <button type="button" className="btn btn-warning">Назад</button>
    </Link>
  </div>
);

export default BackButton;