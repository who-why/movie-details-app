import React, { useEffect, useState } from 'react'
import './Details.css'
import { FaCalendarAlt } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  fetchCredits,
  fetchDetails,
  fetchVideos,
  imagePath,
  imagePathOriginal,
} from "../services/api";
import { useParams } from "react-router-dom";
import {
  minutesTohours,
  ratingToPercentage,
  resolveRatingColor,
} from "../../utils/helpers";
import VideoComponent from '../VideoComponent';


const Details = () => {
  const { type, id } = useParams();

  const [details, setDetails] = useState({});
  const [cast, setCast] = useState([]);
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [detailsData, creditsData, videosData] = await Promise.all([
          fetchDetails(type, id),
           fetchCredits(type, id),
          fetchVideos(type, id),
        ]);

        // Set details
        setDetails(detailsData);

        // Set cast
        setCast(creditsData?.cast?.slice(0, 10));

        // Set video/s
        const video = videosData?.results?.find(
          (video) => video?.type === "Trailer"
        );
        setVideo(video);
        const videos = videosData?.results
          ?.filter((video) => video?.type !== "Trailer")
          ?.slice(0, 10);
        setVideos(videos);
      } catch (error) {
        console.log(error, "error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, id]);

  console.log(video, videos, "videos");

  const data = {
    id: details?.id,
    title: details?.title || details?.name,
    type: type,
    poster_path: details?.poster_path,
    release_date: details?.release_date || details?.first_air_date,
    vote_average: details?.vote_average,
    overview: details?.overview,
  };

  const title = details?.title || details?.name;
  const releaseDate =
    type === "tv" ? details?.first_air_date : details?.release_date;

    const year = releaseDate ? releaseDate.split("-")[0] : null;
    const handlePlayTrailer = () => {
      const videoSection = document.getElementById("video-section");
      videoSection.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <div className='details'>
           {/* banner */}
           <div className="banner" style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imagePathOriginal}/${details?.backdrop_path})` 
               }}>

                     <img height=
                      {"450px"}
                       borderRadius={"sm"}
                       src={`${imagePath}/${details?.poster_path}`}
                       alt="pster" 
                     />

                      {/*  */}
                      <div className='text'>
                          <div className='upper'>
                                 <div className='date'>
                                    <h2>{title}</h2>
                                    
                                    <h2 className='h3'> {year}</h2>
                                </div>
                                <div className='calender'>
                                    <span><FaCalendarAlt/></span>
                                    <p>{new Date(releaseDate).toLocaleDateString("en-US")} (US)</p>
                                </div>
                            </div>
                            {/* score */}


                              <div className="score">
                              
                                 <div style={{ width: 50, height: 50,
                                 }}>
                                    <CircularProgressbar
                                      value={ratingToPercentage(details?.vote_average)} 
                                      text={`${ratingToPercentage(details?.vote_average)}%`} 
                                      className='progress'
                                    />
                                 </div>
                                 <p>User Score</p>
                                <div className="btns">
                                      <span>+</span>
                                      <p>Add to watchlist</p>
                                </div>
                                 <button onClick={handlePlayTrailer}>
                                      ▶ Play trailer
                                 </button>
                            </div>
                            

                            {/* tagline */}
                            <div className="tagline">
                                 <h2>Overview</h2>
                                 <p>{details?.overview}</p>
                            </div>
                            

                            {/* genere */}
                            <div className="genre">
                                {details?.genres?.map((genre) => (
                                    <span key={genre?.id} p="1">
                                        {genre?.name}
                                   </span>
                                  ))}
                            </div>
                      </div>
           </div>

           {/* cast */}

        <div className="cast">
          <h2>{type} CAST</h2>
             <div className="cast1">
             {cast?.length === 0 && <p>No cast found</p>}
             {cast &&
               cast?.map((item) => (
                   <img
                             key={item?.id}
                              src={`${imagePath}/${item?.profile_path}`}
                             alt={item?.name}
                   />
                ))}
             </div>
          </div>

         {/* videos */}
       
        <div id="video-section" className="video">
            <h2>VIDEOS</h2>
            <div className="main-video">
              <VideoComponent id={video?.key} />
            </div>
          <div className='all-video' style={{ marginTop: "5px", marginBottom: "10px", overflowX: "scroll", gap: "5px", display: "flex" }}>
             {videos &&
              videos?.map((item) => (
             <div key={item?.id} style={{ minWidth: "290px" }}>
               <VideoComponent id={item?.key} small />
              <div style={{ fontSize: "small", fontWeight: "bold", marginTop: "2px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {item?.name}{" "}
               </div>
            </div>
           ))}
         </div>
         
       </div>

    </div>
  )
}

export default Details