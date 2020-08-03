import React, { Component } from 'react'

class NewMovie extends Component {
    constructor(props) {
        super(props)
    }

    handleRemoveClick = (e)=> {
        var id = this.props.id
        this.props.removeMovie(id)
    }

    render() {
        return (
            <div className="movie-item">
                <div className="item-btns">
                    <i className="fas fa-edit edit"></i>
                    <i className="fas fa-trash-alt trash" onClick={this.handleRemoveClick}></i>
                </div>
                <div className="movie-image">
                    <img src="" alt=""/>
                </div>
                <div className="movie-content-wrap">
                    <h1 className="movie-title">
                        {this.props.title}
                    </h1>
                    <p className="movie-bio">
                        {this.props.description}
                    </p>
                    <p className="movie-release-date"><span>Release Date:</span> {this.props.release}</p>
                    <p className="movie-running-time"><span>Run Time:</span> {this.props.time}</p>
                    <p className="movie-rating"><span>Rating:</span> {this.props.rating}</p>
                </div>
            </div>
        )
    }
}

export default NewMovie;