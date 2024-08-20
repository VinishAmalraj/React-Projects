import "./App.css";
import React, { useState, useEffect } from "react";
import Offline from "./Components/Offline/Offline";
import Nav from "./Components/Nav/Nav";
import Login from "./Components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Movie from "./Components/Movies/Movie";

function App() {
  const api_key = "737f42de283d5dbfc26b1164d552e787";
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setOnline(true);
    }

    function handleOffline() {
      setOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return online ? (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route
            path="/movies/:id"
            element={
              <>
                <Nav />
                <MovieDetails api_key={api_key} />
                <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Header />
                <Movie
                  url={`https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`}
                  title="Trending"
                />
                <Movie
                  url={`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`}
                  title="Popular"
                />
                <Movie
                  url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`}
                  title="Top Rated"
                />

                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  ) : (
    <Offline />
  );
}

export default App;
