import React from 'react';

const movie = ( {movie}) => {
    console.log(movie)
    return (
        <div>

            <img src={movie.posterURL} alt="" />
            <h2>Movie: {movie.title}</h2>
            
        </div>
    );
};

export default movie;