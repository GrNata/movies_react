import React from "react";

class Search extends React.Component {
    state = {
        search: "",
        type: "all",
    };

    // Метод для обработки нажатия Enter или отправки формы
    handleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searthMovies(this.state.search, this.state.type);
        }
    };

    handleFilter = (event) => {
        this.setState(() => ({ type: event.target.dataset.type }), () => {
            this.props.searthMovies(this.state.search, this.state.type);
            });
    };

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
                            this.props.searthMovies(this.state.search, this.state.type)
                        } //  Обработка клика по кнопке
                    >
                        Searth
                    </button>
                </div>

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
            </div>
        );
    }
}

export { Search };
