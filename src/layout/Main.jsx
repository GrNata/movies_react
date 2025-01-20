import React from "react";
import { Movies } from '../component/Movies';
import { Preloader } from '../component/Preloader';
import { Search } from '../component/Search';

const API_KEY = process.env.REACT_APP_API_KEY;


class Main extends React.Component {

    state = {
        movies: [],
        loading: true,
    }

    // Метод для выполнения поиска фильмов
    searthMovies = (str, type = 'all') => {
        this.setState({loading: true});
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${
            str === '' ?
            'movie' 
            :
            str
            }${
            type !== 'all' ? 
            `&type=${type}` 
            : 
            ''}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}));
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=movie`)
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

