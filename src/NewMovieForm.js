import React, { Component } from 'react'

class NewMovieForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            titleInput: '',
            descriptionInput: "",
            releaseInput: '',
            timeInput: '',
            ratingInput: ''
        }
    }

    handleTitleInputChange = (e)=> {
        this.setState({
            titleInput: e.target.value
        })
    }
    
    handleDescriptionInputChange = (e)=> {
        this.setState({
            descriptionInput: e.target.value
        })
    }
    
    handleReleaseInputChange = (e)=> {
        this.setState({
            releaseInput: e.target.value
        })
    }
    
    handleTimeInputChange = (e)=> {
        this.setState({
            timeInput: e.target.value
        })
    }
    
    handleRatingInputChange = (e)=> {
        this.setState({
            ratingInput: e.target.value
        })
    }

    handleAdd = (e)=> {
        e.preventDefault()
        var data = {
            title: this.state.titleInput,
            description: this.state.descriptionInput,
            release: this.state.releaseInput,
            time: this.state.timeInput,
            rating: this.state.ratingInput
        }

        this.props.addMovie(data)
        this.setState({
            titleInput: '',
            descriptionInput: "",
            releaseInput: '',
            timeInput: '',
            ratingInput: ''
        })
    }

    render() {
        return (
            <form action="#">
                <div className="form-group">
                  <input type="text" id="title" name="title" placeholder="Name of movie" value={this.state.titleInput} onChange={this.handleTitleInputChange}/>
                </div>
                <div className="form-group">
                  <input type="date" id="release" name="release" value={this.state.releaseInput} onChange={this.handleReleaseInputChange}/>
                </div>
                <div className="form-group">
                  <input type="text" id="runtime" name="runtime" placeholder="Runtime of movie" value={this.state.timeInput} onChange={this.handleTimeInputChange}/>
                </div>
                <div className="form-group">
                  <input type="text" id="rating" name="rating" placeholder="Rating of movie" value={this.state.ratingInput} onChange={this.handleRatingInputChange}/>
                </div>
                <div className="form-group">
                  <textarea name="description" id="description" cols="30" rows="10" placeholder="Bio about movie" value={this.state.descriptionInput} onChange={this.handleDescriptionInputChange}></textarea>
                </div>
                <button type="submit" className="cta" onClick={this.handleAdd}>Add</button>
            </form>
        )
    }
}


export default NewMovieForm
