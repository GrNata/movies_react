import React from "react";

class Search extends React.Component {

    state = {
        search: '',
    }

    // Метод для обработки нажатия Enter или отправки формы
    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searthMovies(this.state.search);
        }
    };

    
    // Метод для отправки формы
    handleSubmit = () => {
        this.props.searthMovies(this.state.search);
    };

    render() {
        return <div className="row">
                    <div className="input-field">
                        <input 
                            placeholder="search"
                            type="search" 
                            className="validate" 
                            value={this.state.search}
                            onChange={(e) => this.setState({search: e.target.value})}
                            onKeyDown={this.handleKey}  // Обработка нажатия Enter
                        />
                        <button 
                            className="btn"
                            onClick={this.handleSubmit}     //  Обработка клика по кнопке
                        >
                            Searth
                        </button>
                    </div>
                </div>
    }
}

export {Search}