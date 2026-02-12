import React, { useState, useEffect } from 'react';
import axios from 'axios';

const base_url = "https://image.tmdb.org/t/p/original";

function MovieRow({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
                return request;
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    movie.poster_path && (
                        <img
                            key={movie.id}
                            className="row__poster"
                            src={`${base_url}${movie.poster_path}`}
                            alt={movie.title || movie.name}
                        />
                    )
                ))}
            </div>
        </div>
    );
}

export default MovieRow;
