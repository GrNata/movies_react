import { Movie } from './Movie';

function Movies(props) {
    const {movies} = props;

    return <div className="movies">
                {movies.map(movie => (
                    <Movie key={movie.imdbID} {...movie} />
                ))}
            </div>
}

export {Movies}


// import React from "react";
// import { Movie } from './Movie';

// export const Movies = ({ movies = [] }) => {
//     return (
//         <div className="movies">
//             {movies.length ? (
//                 movies.map(movie => <Movie key={movie.imdbID} {...movie}/>)
//             ) : (
//                 <p Фильмы не найдены></p>
//             )}

//         </div>
//     );
// };