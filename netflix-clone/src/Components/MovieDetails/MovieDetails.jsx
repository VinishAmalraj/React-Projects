import React, { useState, useEffect, useRef } from "react";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";
import Movie from "../Movies/Movie";

function MovieDetails({ api_key }) {
  const [trailers, setTrailers] = useState([]);
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  const Image = useRef(null); // Set initial value to null

  useEffect(() => {
    const getMovieTrailer = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`;
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          const youtubeTrailers = data.results.filter(
            (result) => result.site === "YouTube" && result.type === "Trailer"
          );
          setTrailers(youtubeTrailers);
        } else {
          throw new Error("Failed to fetch trailers");
        }
      } catch (error) {
        console.error("Error fetching trailers:", error);
      }
    };

    const getMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
        );
        if (response.ok) {
          const data = await response.json();
          setDetails(data);
        } else {
          throw new Error("Failed to fetch movie details");
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    getMovieTrailer();
    getMovieDetails();
  }, [id, api_key]);

  useEffect(() => {
    if (details && Image.current) {
      Image.current.style.background = `linear-gradient(to left, transparent, #181818 70%),
        linear-gradient(to bottom, transparent, #181818),
        url("https://image.tmdb.org/t/p/original${details.backdrop_path}") center/cover`;
    }
  }, [details]);

  const convertToHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;
    return `${hours} hrs ${remainingMinutes} mins`;
  };

  return (
    <div className="main-container">
      <div className="Banner" ref={Image}>
        <div className="title-1">
          <h1>{details ? details.title : ""}</h1>
          <p id="Timing">
            {details ? convertToHoursAndMinutes(details.runtime) : ""} |{" "}
            {details && details.genres?.length > 0
              ? details.genres[0].name
              : ""}
          </p>
          <p>{details && details.overview}</p>
        </div>
        <div className="join">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
            alt=""
          />
          <a href="/Login">
            <button id="Join">Join</button>
          </a>
        </div>
      </div>

      <div className="container1">
        <hr />
        <p>Watch in English, Tamil, Telugu, Kannada, Malayalam and Hindi</p>
        <hr />
      </div>

      <div className="Trailercontainer">
        <h1>Trailer | {details ? details.title : ""}</h1>
        {trailers.length > 0 && (
          <iframe
            title="movieTrailer"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailers[0].key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <Movie
        url={`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${api_key}&language=en-US&page=1`}
        title="Recommendations"
      />
    </div>
  );
}

export default MovieDetails;
