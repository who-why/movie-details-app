import React from 'react'
import { useEffect, useState } from "react";
import './Movie.css'
import { fetchMovies } from '../services/api';
import Card from '../Card/Card';
import PaginationComponent from '../PaginationComponent';

const Movie = () => {

  const [movies, setMovies] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    fetchMovies(activePage, sortBy)
      .then((res) => {
        setMovies(res?.results);
        setActivePage(res?.page);
        setTotalPages(res?.total_pages);
      })
      .catch((err) => console.log(err, "err"))
      .finally(() => setIsLoading(false));
  }, [activePage,sortBy]);



  return (
    <div className='movies'>
           {/* select */}
           <div className="choose">
                 <h2>DISCOVER MOVIES</h2>
                 <select onChange={(e) => {
                     setActivePage(1);
                      setSortBy(e.target.value);
                   }}>
                    <option value="popularity.desc">Popular</option>
                    <option value="vote_average.desc&vote_count.gte=1000">Top Rated</option>
                 </select>
           </div>

           {/* movies list */}

          <div className="movie">
            {movies &&
              movies?.map((item, i) =>
              isLoading ? (
                <div className="skel flex items-center space-x-4 py-2 animate-pulse">
                  <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-20 bg-gray-300 rounded"></div>
                </div>
               ) : (
              <Card key={item?.id} item={item} type={"movie"} />
             )
           )}
        </div>
        {/* pagination */}
        <div className="pagi">
          <PaginationComponent
           activePage={activePage}
           totalPages={totalPages}
           setActivePage={setActivePage}
          />
        </div>
    </div>
  )
}

export default Movie
