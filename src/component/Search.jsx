import React, {useState}  from "react";

// const Search = ({searthMovies}) => { //      если бы была одна ф-ция
const Search = (props) => {

    const {
        searthMovies = Function.prototype,   //  значение по умолчанию (это ф-ция - ничего не делает)
        totalPage = 1,      // значение по умолчанию
    } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');
    const [page, setPage] = useState(1);

    // Ф-ция для обработки нажатия Enter или отправки формы
    const handleKey = (event) => {
        if (event.key === "Enter") {
            setPage(1);
            searthMovies(search, type, 1);
        }
    };

    //  Ф-ция для обработки изменения радио-кнопки
    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        setPage(1);
        searthMovies(search, event.target.dataset.type, 1);
    };

    //  Ф-ция для обработки переключения страниц
    const handlePageChange = (newPage) => {
        if (search === '') {
            setSearch('all');
        }
        setPage(newPage);
        searthMovies('all', type, newPage);
    };

        return (
            <div classNameName="row">
                <div classNameName="input-field">
                    <input
                        placeholder="search"
                        type="search"
                        classNameName="validate"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        onKeyDown={handleKey} // Обработка нажатия Enter
                    />
                    <button
                        classNameName="btn blue-grey search-btn"
                        onClick={() =>
                            searthMovies(search, type, 1)
                        } //  Обработка клика по кнопке
                    >
                        Searth
                    </button>
                </div>
                <div className="controls-container">  
                                {/* Блок с радио-кнопками */}
                    <div>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                checked={type === 'all'}
                                data-type="all"
                                onChange={handleFilter}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                checked={type === 'movie'}
                                data-type="movie"
                                onChange={handleFilter}
                            />
                            <span>Movies only</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                checked={type === 'series'}
                                data-type="series"
                                onChange={handleFilter}
                            />
                            <span>Series only</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                checked={type === 'game'}
                                data-type="game"
                                onChange={handleFilter}
                            />
                            <span>Games only</span>
                        </label>
                    </div>

                    {/* Блок переключения страниц */}
                    <div className="pagination">
                        <button
                            className="btn  blue-grey darken-1"
                            disabled={page <= 1}
                            onClick={() => handlePageChange(page - 1)}
                        >
                            Previpos
                        </button>
                        <span>    {page} of {totalPage}</span>
                        <button
                            className="btn  blue-grey darken-1"
                            disabled={page >= totalPage}
                            onClick={() => handlePageChange(page + 1)}
                        >
                            Next
                        </button>
                    </div> 
                </div>
            </div>
        );
    }

export { Search };
