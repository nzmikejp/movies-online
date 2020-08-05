import React, { Component } from 'react'

class NewMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            titleUpdating: false,
            descriptionUpdating: false,
            releaseUpdating: false,
            timeUpdating: false,
            ratingUpdating: false,
            
            titleInput: this.props.title,
            descriptionInput: this.props.description,
            releaseInput: this.props.release,
            timeInput: this.props.time,
            ratingInput: this.props.rating,
        }
    }

    handleRemoveClick = (e)=> {
        var id = this.props.id
        this.props.removeMovie(id)
    }

    handleTitleDoubleClick = (e) => {
        this.setState({
            titleUpdating: true
        })
    }
    
    handleDescriptionDoubleClick = (e) => {
        this.setState({
            descriptionUpdating: true
        })
    }
    
    handleReleaseDoubleClick = (e) => {
        this.setState({
            releaseUpdating: true
        })
    }
    
    handleTimeDoubleClick = (e) => {
        this.setState({
            timeUpdating: true
        })
    }
    
    handleRatingDoubleClick = (e) => {
        this.setState({
            ratingUpdating: true
        })
    }
    
    handleTitleInputChange = (e) => {
        this.setState({
            titleInput: e.target.value
        })
    }
    
    handleDescriptionInputChange = (e) => {
        this.setState({
            descriptionInput: e.target.value
        })
    }
    
    handleReleaseInputChange = (e) => {
        this.setState({
            releaseInput: e.target.value
        })
    }
    
    handleTimeInputChange = (e) => {
        this.setState({
            timeInput: e.target.value
        })
    }
    
    handleRatingInputChange = (e) => {
        this.setState({
            ratingInput: e.target.value
        })
    }

    handleTitleInputBlur = (e) => {
        var id = this.props.id
        var data = {
            title: this.state.titleInput
        }
        this.props.updateMovie(id, data)

        this.setState({
            titleUpdating: false
        })
    }

    handleDescriptionInputBlur = (e) => {
        var id = this.props.id
        var data = {
            description: this.state.descriptionInput
        }
        this.props.updateMovie(id, data)

        this.setState({
            descriptionUpdating: false
        })
    }

    handleReleaseInputBlur = (e) => {
        var id = this.props.id
        var data = {
            release: this.state.releaseInput
        }
        this.props.updateMovie(id, data)

        this.setState({
            releaseUpdating: false
        })
    }

    handleTimeInputBlur = (e) => {
        var id = this.props.id
        var data = {
            time: this.state.timeInput
        }
        this.props.updateMovie(id, data)

        this.setState({
            timeUpdating: false
        })
    }

    handleRatingInputBlur = (e) => {
        var id = this.props.id
        var data = {
            rating: this.state.ratingInput
        }
        this.props.updateMovie(id, data)

        this.setState({
            ratingUpdating: false
        })
    }

    render() {
        return (
            <div className="movie-item">
                <div className="item-btns">
                    <i className="fas fa-trash-alt trash" onClick={this.handleRemoveClick}></i>
                </div>
                <div className="movie-image">
                    <img src={this.props.image} alt=""/>
                </div>
                <div className="movie-content-wrap">
                    <h1 className="movie-title" onDoubleClick={this.handleTitleDoubleClick}>
                        {this.state.titleUpdating === true ? (
                            <div className="form-group">
                                <input type="text" autoFocus value={this.state.titleInput} onChange={this.handleTitleInputChange} onBlur={this.handleTitleInputBlur}/>
                            </div>
                        ) : this.props.title}
                    </h1>
                    <p className="movie-bio" onDoubleClick={this.handleDescriptionDoubleClick}>
                        {this.state.descriptionUpdating === true ? (
                            <div className="form-group">
                                <textarea cols="30" rows="10" autoFocus value={this.state.descriptionInput} onChange={this.handleDescriptionInputChange} onBlur={this.handleDescriptionInputBlur}></textarea>
                            </div>
                        ) : this.props.description}
                    </p>
                    <p className="movie-release-date" onDoubleClick={this.handleReleaseDoubleClick}>
                        <span>Release Date: </span>
                        {this.state.releaseUpdating === true ? (
                            <div className="form-group">
                                <input type="date" autoFocus value={this.state.releaseInput} onChange={this.handleReleaseInputChange} onBlur={this.handleReleaseInputBlur}/>
                            </div>
                        ) : this.props.release}   
                    </p>
                    <p className="movie-running-time" onDoubleClick={this.handleTimeDoubleClick}>
                        <span>Run Time: </span>
                        {this.state.timeUpdating === true ? (
                            <div className="form-group">
                                <input type="text" autoFocus value={this.state.timeInput} onChange={this.handleTimeInputChange} onBlur={this.handleTimeInputBlur}/>
                            </div>
                        ) : this.props.time}
                    </p>
                    <p className="movie-rating" onDoubleClick={this.handleRatingDoubleClick}>
                        <span>Rating: </span>
                        {this.state.ratingUpdating === true ? (
                            <div className="form-group">
                                <input type="text" autoFocus value={this.state.ratingInput} onChange={this.handleRatingInputChange} onBlur={this.handleRatingInputBlur}/>
                            </div>
                        ) : this.props.rating}
                    </p>
                </div>
            </div>
        )
    }
}

export default NewMovie;