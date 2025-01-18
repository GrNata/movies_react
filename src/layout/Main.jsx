import React, {useState, useEffect} from "react";
import { Preloader} from '../component/Preloader';
import { Movies } from '../component/Movies'

const API_URL = 'http://www.omdbapi.com/?apikey=7450963b&s=matrix';

export const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            setMovies(data.Search || []);
            setLoading(false)
        });
    }, []);

    return (
        <main className="container content">
            {loading ? <Preloader /> : <Movies movies={movies} />}
        </main>
    );
};


// // function Main() {
// //     return <main className='conteiner content' >
// //                 Hello from Movies App
// //             </main>
// // }

// export {Main}