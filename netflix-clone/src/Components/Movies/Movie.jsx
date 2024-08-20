import React, { useState, useEffect } from "react";
import "./Movie.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Movie({ url, title }) {
  const [orgMovies, setOrgMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const numVisibleMovies = 8;

  const getOriginals = (orgmovie) => {
    return orgmovie.map((movie, index) => {
      if (index >= startIndex && index < startIndex + numVisibleMovies) {
        return (
          <div className="con" key={movie.id}>
            <a href={`/movies/${movie.id}`}>
              <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=""
              />
            </a>
            <p>{movie.title}</p>
          </div>
        );
      }
      return null;
    });
  };

  useEffect(() => {
    const fetchMovies = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const orgmovie = data.results;
        // console.log(orgmovie);
        setOrgMovies(orgmovie);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("Error fetching movies");
        setLoading(false);
      }
    };
    fetchMovies(url);
  }, [url]);

  const scrollForward = () => {
    if (startIndex + numVisibleMovies < orgMovies.length) {
      setStartIndex(startIndex + 3);
    }
  };

  const scrollBackward = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 3);
    }
  };

  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="netflixOriginals">
        <div className="original__header">
          <h2>{title}</h2>
        </div>
        <div className="showcontainer">
          <div className="forward">
            <button onClick={scrollBackward}>
              <IoIosArrowBack />
            </button>
          </div>
          <div className="original__movies">{getOriginals(orgMovies)}</div>
          <div className="forward">
            <button onClick={scrollForward}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
