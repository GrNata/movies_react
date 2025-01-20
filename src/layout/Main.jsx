import React from "react";
import { Movies } from '../component/Movies';
import { Preloader } from '../component/Preloader';
import { Search } from '../component/Search';

const API_KEY = process.env.REACT_APP_API_KEY;


class Main extends React.Component {

    state = {
        movies: [],
        loading: true,
        totalPage: 1,
    }

    // Метод для выполнения поиска фильмов
    searthMovies = (str, type = 'all', page) => {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${
            str === '' ?
            'movie' 
            :
            encodeURIComponent(str)
            }${
            type !== 'all' ? 
            `&type=${type}` 
            : 
            ''}&page=${page}`)
        .then(response => response.json())
        .then(data => {
            const totalResult = (data.totalResults && !isNaN(parseInt(data.totalResults, 10)))
                     ? ( Math.ceil(parseInt(data.totalResults, 10) / 10) )
                     : 1;
            this.setState({
                movies: data.Search || [],      // Убедимся, что movies всегда массив
                loading: false,
                totalPage: totalResult,

        });
    });
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=movie`)
        .then(response => response.json())
        .then(data => {
            const totalPage = Math.ceil(parseInt(data.totalResults, 10) / 10);
            this.setState({
                movies: data.Search || [], 
                loading: false,
                totalPage,
            });
     });

    };

    render() {
            const {movies, loading} = this.state;

            return <main className="conteiner content" >
                {/* Передаём функцию searchMovies() в компонент Search через props */}
                        <Search  
                            searthMovies={this.searthMovies } 
                            totalPage={this.state.totalPage} > 0 ? {this.state.totalPage} : 1;
                        </Search>
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

