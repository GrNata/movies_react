import React from "react";

class Search extends React.Component {

    state = {
        search: '',
        type: '',
    }

    // Метод для обработки нажатия Enter или отправки формы
    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searthMovies(this.state.search, this.state.search);
        }
    };


    //  Метод для обработки изменения радио-кнопки
    handleFilterChange = (event) => {
        this.setState({
            search: this.state.search === '' ? 'all' : this.state.search,
            type: event.target.value,
        }, () => {
            // Автоматический запуск поиска при изменении фильтра
            this.props.searthMovies(this.state.search, this.state.type);
        }
        )};
    

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
                            onClick={() => this.props.searthMovies(this.state.search)}     //  Обработка клика по кнопке
                        >
                            Searth
                        </button>
                        {/* Блок с радио-кнопками */}
                        <div>
                            <label>
                                <input 
                                    type="radio" 
                                    className="type"
                                    value=""
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
                        
                    </div>
                </div>
    }
}

export {Search}