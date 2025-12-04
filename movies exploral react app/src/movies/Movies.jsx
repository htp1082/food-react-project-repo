import React, { use } from 'react';
import Movie from '../movie/movie';


const movies = ({moviesFech}) => {
     const movies = use(moviesFech);
     console.log(movies)
    return (
        <div>
            <h2>Total movies = {movies.length}</h2>
            {
              movies.map(movie => <Movie movie={movie}></Movie>)
            }
        </div>
    );
};

export default movies;