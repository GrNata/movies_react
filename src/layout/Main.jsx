import React from "react";
import { Movies } from '../component/Movies';
import { Preloader } from '../component/Preloader';
import { Search } from '../component/Search';


class Main extends React.Component {

    // для ввода названия фильма, если больше одного слова
//     const title = "The Devil All the Time";
// const encodedTitle = encodeURIComponent(title);
// console.log(encodedTitle); // Результат: The%20Devil%20All%20the%20Time

    state = {
        movies: [],
        loading: false,
    }

    // Метод для выполнения поиска фильмов
    searthMovies = (str, type) => {
        fetch(`http://www.omdbapi.com/?apikey=7450963b&s=${encodeURIComponent(str)}&type=${type}`)
        .then(response => response.json())
        .then(data => this.setState({
            movies: data.Search || [],      // Убедимся, что movies всегда массив
            loading: false
        }));
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=7450963b&s=all')
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





