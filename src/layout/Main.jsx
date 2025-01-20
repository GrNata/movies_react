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
        totalPage: 1,
    }

    // Метод для выполнения поиска фильмов
    searthMovies = (str, type, page) => {
        fetch(`http://www.omdbapi.com/?apikey=7450963b&s=${encodeURIComponent(str)}&type=${type}&page=${page}`)
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
        // alert('total (State) = ' + this.state.totalPage + ', total = ' + this.totalPage + ', page = ' + page);
        alert(`http://www.omdbapi.com/?apikey=7450963b&s=${encodeURIComponent(str)}&type=${type}&page=${page}`);
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=7450963b&s=all')
        .then(response => response.json())
        .then(data => {
            const totalPage = Math.ceil(parseInt(data.totalResults, 10) / 10);
            this.setState({
                movies: data.Search || [], 
                loading: false,
                totalPage,
            });
        // alert('totalPage = ' + totalPage); 
    });   
        
    }


    render() {
            const {movies, loading} = this.state;

            return <main className="conteiner content" >
                {/* Передаём функцию searchMovies() и totalPage в компонент Search через props */}
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





