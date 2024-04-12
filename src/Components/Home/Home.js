import React, { useEffect, useState } from 'react';
import './Home.css';
import Card from '../Card/Card';
import { fetchTrending } from '../services/api';

const Home = () => {
  const [selected, setSelected] = useState('today');
  const leftOffset = selected === 'week' ? '50%' : '0';
  const [data, setData] = useState([]);
  const [timeWindow, setTimeWindow] = useState("day");


  const handleClick = (value) => {
    setSelected(value);
  };

  useEffect(() => {
    fetchTrending(timeWindow)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [timeWindow]);

  console.log(data, "data");

  return (
    <div className='home'>
      <div className='change'>
        <h3>TRENDING</h3>
        <div className='btn1'>
          <div
            className={`today ${selected === 'today' ? 'selected' : ''}`}
            onClick={() => {
              handleClick('today');
              setTimeWindow('day');
            }}
          >
            <span>Today</span>
          </div>
          <div
            className={`week ${selected === 'week' ? 'selected' : ''}`}
            onClick={() => {
              handleClick('week');
              setTimeWindow('week');
            }}
          >
            <span>This Week</span>
          </div>
          <div className='switch' style={{ left: leftOffset }}>
            {selected === 'today' ? 'Today' : 'This Week'}
          </div>
        </div>
      </div>

      <div className="movie">
        {data && data.map((item, index) => (
           <Card key={index} item={item}  type={item?.media_type}/>
         ))}
      </div>
    </div>
  );
};

export default Home;
