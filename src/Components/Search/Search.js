import React, { useEffect, useState } from 'react'
import './Search.css'
import { searchData } from '../services/api';
import Card from '../Card/Card';
import PaginationComponent from '../PaginationComponent';

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [tempSearchValue, setTempSearchValue] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    searchData(searchValue, activePage)
      .then((res) => {
        console.log(res, "res");
        setData(res?.results);
        setActivePage(res?.page);
        setTotalPages(res?.total_pages);
      })
      .catch((err) => console.log(err, "err"))
      .finally(() => setIsLoading(false));
  }, [searchValue, activePage]);

  console.log(data)

  const handleSearch = (e) => {
    setSearchValue(tempSearchValue);
  };

  return (
    <div className='search'>
           <div className="search-box">
                <h3>SEARCH</h3>
                <input
                  type="text"
                  placeholder="Search movie and tv show here..."
                   value={tempSearchValue}
                  onChange={(e) => setTempSearchValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                        }
                      }}
                 />

           </div>
      {data?.length === 0 && !isLoading && (
        <h3 textAlign={"center"} as="h3" fontSize={"sm"} mt="10">
          No results found
        </h3>
      )}

<div className='result'>
  {data?.length > 0 &&
    !isLoading &&
    data?.map((item, i) =>
      isLoading ? (
        <div
          key={i}
          style={{
            height: "300px",
            backgroundColor: "#ddd",
            borderRadius: "8px",
          }}
        ></div>
      ) : (
        <div key={item?.id}>
          <Card item={item} type={item?.media_type} />
        </div>
      )
    )}
</div>
   {tempSearchValue && 
      <div className="pagi">
      <PaginationComponent
       activePage={activePage}
       totalPages={totalPages}
       setActivePage={setActivePage}
      />
    </div>
   }
    </div>
  )
}

export default Search
