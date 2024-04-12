import React from 'react';
import './Card.css';
import { FaStar } from 'react-icons/fa';
import { imagePath } from '../services/api';
import { Link } from 'react-router-dom';

const Card = ({ item, type }) => {
  const posterPath = item?.poster_path ? `${imagePath}/${item.poster_path}` : 'https://via.placeholder.com/150';

  return (
    <Link to={`/${type}/${item?.id}`}>
      <div className='card'>
        <img
          src={posterPath}
          alt={item?.title || item?.name}
        />

        <div className="bottom">
          <h4>{item?.title || item?.name}</h4>
          <span>
            {new Date(
              item?.release_date || item?.first_air_date
            ).getFullYear() || "N/A"}
          </span>
          <p><span><FaStar /></span> {item?.vote_average?.toFixed(1)}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
