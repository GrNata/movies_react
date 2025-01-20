import React from "react";

class Search extends React.Component {
    state = {
        search: "",
        type: "all",
        page: 1,
    };

    // Метод для обработки нажатия Enter или отправки формы
    handleKey = (event) => {
        if (event.key === "Enter") {
            this.setState({page: 1});
            this.props.searthMovies(this.state.search, this.state.type, 1);
        }
    };

    //  Метод для обработки изменения радио-кнопки
    handleFilter = (event) => {
        this.setState(() => ({ 
            type: event.target.dataset.type,
            page: 1 }), 
            () => {
            this.props.searthMovies(this.state.search, this.state.type, 1);
            });
    };

    //  Метод для обработки переключения страниц
    handlePageChange (newPage) {
        if (this.state.search === '') {
            this.setState({search: 'all'});
        }
        this.setState({page: newPage});
        this.props.searthMovies(this.state.search, this.state.type, newPage);
    }

    render() {
        return (
            <div classNameName="row">
                <div classNameName="input-field">
                    <input
                        placeholder="search"
                        type="search"
                        classNameName="validate"
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKey} // Обработка нажатия Enter
                    />
                    <button
                        classNameName="btn blue-grey search-btn"
                        onClick={() =>
                            this.props.searthMovies(this.state.search, this.state.type, 1)
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
                                checked={this.state.type === 'all'}
                                data-type="all"
                                onChange={this.handleFilter}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                checked={this.state.type === 'movie'}
                                data-type="movie"
                                onChange={this.handleFilter}
                            />
                            <span>Movies only</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                checked={this.state.type === 'series'}
                                data-type="series"
                                onChange={this.handleFilter}
                            />
                            <span>Series only</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                checked={this.state.type === 'game'}
                                data-type="game"
                                onChange={this.handleFilter}
                            />
                            <span>Games only</span>
                        </label>
                    </div>

                    {/* Блок переключения страниц */}
                    <div className="pagination">
                        <button
                            className="btn  blue-grey darken-1"
                            disabled={this.state.page <= 1}
                            onClick={() => this.handlePageChange(this.state.page - 1)}
                        >
                            Previpos
                        </button>
                        <span>    {this.state.page} of {this.props.totalPage}</span>
                        <button
                            className="btn  blue-grey darken-1"
                            disabled={this.state.page >= this.props.totalPage}
                            onClick={() => this.handlePageChange(this.state.page + 1)}
                        >
                            Next
                        </button>
                    </div> 
                </div>
            </div>
        );
    }
}

export { Search };
