import React from "react";
import { Movies } from '../component/Movies';
import { Preloader } from '../component/Preloader';
import { Search } from '../component/Search';


class Main extends React.Component {

    state = {
        movies: [],
        loading: false,
    }

    // Метод для выполнения поиска фильмов
    searthMovies = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=7450963b&s=${str}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}));
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=7450963b&s=movie')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}));   
    };

    render() {
            const {movies, loading} = this.state;

            return <main className="conteiner content" >
                {/* Передаём функцию searchMovies() в компонент Search через props */}
                        <Search searthMovies={this.searthMovies } />   
                        {
                            loading ? (
                                <Preloader />
                            ) : (
                                <Movies movies={movies} />
                            )
                        }               
                    </main>
    }
}

export {Main}



// import React, {useState, useEffect} from "react";
// import { Preloader} from '../component/Preloader';
// import { Movies } from '../component/Movies'

// const API_URL = 'http://www.omdbapi.com/?apikey=7450963b&s=matrix';

// export const Main = () => {
//     const [movies, setMovies] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch(API_URL)
//         .then(response => response.json())
//         .then(data => {
//             setMovies(data.Search || []);
//             setLoading(false)
//         });
//     }, []);

//     return (
//         <main className="container content">
//             {loading ? <Preloader /> : <Movies movies={movies} />}
//         </main>
//     );
// };


