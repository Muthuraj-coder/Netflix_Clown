import React from 'react';
import MovieRow from '../components/MovieRow';
import requests from '../services/tmdb';

function Home() {
  return (
    <div className="home">
      <header className="home__header">
        <h1>NETFLIX</h1>
      </header>
      <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default Home;
