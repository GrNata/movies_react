import React from "react";
// import { TTFBThresholds } from "web-vitals";

class Search extends React.Component {

    state = {
        search: '',
        type: '',
        page: 1,
    }

    // Метод для обработки нажатия Enter или отправки формы
    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.setState({page: 1});
            this.props.searthMovies(this.state.search, this.state.type, 1);
        }
    };


    //  Метод для обработки изменения радио-кнопки
    handleFilterChange = (event) => {
        this.setState({
            search: this.state.search === '' ? 'all' : this.state.search,
            type: ( event.target.value === 'all' ? '' : event.target.value),
        }, () => {
            // Автоматический запуск поиска при изменении фильтра
            this.props.searthMovies(this.state.search, this.state.type, 1);
        }
        )};

    handlePageChange (newPage) {
        if (this.state.search === '') {
            this.setState({search: 'all'});
        }
        // alert('Searth: this.state.page = ' + this.state.page + ", this.props.totalPage = " + this.props.totalPage);
        this.setState({page: newPage});
        this.props.searthMovies(this.state.search, this.state.type, newPage);
    }
    

    render() {
        return <div className="row">
                
                    <div className="input-field">
                        <input 
                            placeholder="search"
                            type="search" 
                            className="validate" 
                            value={this.state.search === '' ? 'all' : this.state.search}
                            onChange={(e) => this.setState({search: e.target.value})}
                            onKeyDown={this.handleKey}  // Обработка нажатия Enter
                        />  
                            <button 
                                className="btn blue-grey search-btn"
                                onClick={() => this.props.searthMovies(this.state.search, this.state.type, 1)}     //  Обработка клика по кнопке
                            >
                                Searth
                            </button>

                            <div className="controls-container">  
                                {/* Блок с радио-кнопками */}
                                <div>
                                    <label>
                                        <input 
                                            type="radio" 
                                            className="type"
                                            value="all"
                                            checked={this.state.type === 'all'}
                                            onChange={this.handleFilterChange}
                                        />
                                        <span> All </span>
                                    </label>
                                    <label>
                                        <input 
                                            type="radio" 
                                            className="type"
                                            value="game"
                                            checked={this.state.type === 'game'}
                                            onChange={this.handleFilterChange}
                                        />
                                        <span> Game </span>
                                    </label>
                                    <label>
                                        <input 
                                            type="radio" 
                                            className="type"
                                            value="movie"
                                            checked={this.state.type === 'movie'}
                                            onChange={this.handleFilterChange}
                                        />
                                        <span> Movie </span>
                                    </label>
                                    <label>
                                        <input 
                                            type="radio" 
                                            className="type"
                                            value="series"
                                            checked={this.state.type === 'series'}
                                            onChange={this.handleFilterChange}
                                        />
                                        <span> Series </span>
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
                </div>
    }
}

export {Search}