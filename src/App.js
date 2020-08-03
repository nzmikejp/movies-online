import React, { Component } from 'react'
import NewMovie from './NewMovie'
import NewMovieForm from './NewMovieForm'
import './assets/css/app.css'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      movies: [
        {
          id: 1,
          title: 'Unhinged',
          description: "Unhinged is a psychological thriller that takes something we've all experienced - road rage - to an unpredictable and terrifying conclusion.",
          release: '30/07/2020',
          time: '90 min',
          rating: 'R16'
        }
      ]
    }
  }

  addMovie = (data) => {
    var newMovie = {
      id: Date.now(),
      ...data
    }

    var newMovieList = [newMovie, ...this.state.movies]

    this.setState({
      movies: newMovieList
    })
  }

  removeMovie = (id) => {
    var movies = this.state.movies
    var filtered = movies.filter((item)=> {
      return item.id != id
    })

    this.setState({
      movies: filtered
    })
  }

  render(){
    return (
      <div className="wrap">
        <header>
          <div className="container-fluid">
            <img src="./images/logo.svg" alt=""/>
          </div>
        </header>
        <main className="container-fluid">
          <div className="row">
            <div className="main-content-wrap col-md-7 col-lg-9">
              <div className="content">
                <div className="movie-cat">
                  {
                    this.state.movies.map((movie)=>{

                      var props = {
                        key: movie.id,
                        removeMovie: this.removeMovie,
                        ...movie
                      }
                      return (
                        <NewMovie {...props}/>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className="sidebar col-md-5 col-lg-3">
              <h1>Enter <span>your latest movie...</span></h1>
              <NewMovieForm addMovie={this.addMovie} />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App
