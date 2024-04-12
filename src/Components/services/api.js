import axios from "axios";

export const imagePath = "https://image.tmdb.org/t/p/w500";
export const imagePathOriginal = "https://image.tmdb.org/t/p/original";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = 'd1acd18a215153255124f84609f9825e';

// TRENDING
export const fetchTrending = async (timeWindow) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/trending/all/${timeWindow || "day"}?api_key=${apiKey}`
    );
    
    return data?.results;
  } catch (error) {
    console.error("Error fetching trending data:", error);
    throw error;
  }
};

// MOVIES & SERIES - Details

export const fetchDetails = async (type, id) => {
  try {
    const res = await axios.get(`${baseUrl}/${type}/${id}?api_key=${apiKey}`);
    return res?.data;
  } catch (error) {
    console.error('Error fetching details:', error);
    return null; 
  }
};


// MOVIES & SERIES - Credits

export const fetchCredits = async (type, id) => {
  const res = await axios.get(
    `${baseUrl}/${type}/${id}/credits?api_key=${apiKey}`
  );
  return res?.data;
};

// MOVIES & SERIES - Videos

export const fetchVideos = async (type, id) => {
  const res = await axios.get(
    `${baseUrl}/${type}/${id}/videos?api_key=${apiKey}`
  );
  return res?.data;
};

// DISCOVER

export const fetchMovies = async (page, sortBy) => {
  const res = await axios.get(
    `${baseUrl}/discover/movie?api_key=${apiKey}&page=${page}&sort_by=${sortBy}`
  );
  return res?.data;
};

export const fetchTvSeries = async (page, sortBy) => {
  const res = await axios.get(
    `${baseUrl}/discover/tv?api_key=${apiKey}&page=${page}&sort_by=${sortBy}`
  );
  return res?.data;
};

// SEARCH

export const searchData = async (query, page) => {
  const res = await axios.get(
    `${baseUrl}/search/multi?api_key=${apiKey}&query=${query}&page=${page}`
  );
  return res?.data
};