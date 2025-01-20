import { Movie } from './Movie';

function Movies(props) {
    const {movies = []} = props;        // Установим значение по умолчанию []

    return <div className="movies">
                {movies.map(movie => (
                    <Movie key={movie.imdbID} {...movie} />
                ))}
            </div>
}

export {Movies}


