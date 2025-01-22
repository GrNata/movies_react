import React, {useState, useEffect} from "react";
import { Movies } from '../component/Movies';
import { Preloader } from '../component/Preloader';
import { Search } from '../component/Search';

const API_KEY = process.env.REACT_APP_API_KEY;


function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPage, setTotalPage] = useState(1);

    const searthMovies = (str, type = 'all', page) => {
        setLoading(true);
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

            setMovies(data.Search || []);      // Убедимся, что movies всегда массив
            setLoading(false);
            setTotalPage(totalResult);
        
        });
    };

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=movie`)
        .then(response => response.json())
        .then(data => {
            const totalPage = Math.ceil(parseInt(data.totalResults, 10) / 10);

            setMovies(data.Search || []);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, []);


            return <main className="conteiner content" >
                {/* Передаём функцию searchMovies() в компонент Search через props */}
                        <Search  
                            searthMovies={searthMovies } 
                            totalPage={totalPage} > 0 ? {totalPage} : 1;
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


export {Main}

