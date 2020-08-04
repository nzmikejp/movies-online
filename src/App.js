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
          rating: 'R16',
          image: './images/largeposter.jpg'
        },
        {
          id: 2,
          title: 'The Secret: Dare to Dream',
          description: "A widow struggling to get by meets a stranger who subscribes to a philosophy of positive thinking. A feature film adaptation of the self-help book, 'The Secret', which focuses on the power of positive thinking.",
          release: '30/07/2020',
          time: '107 mins',
          rating: 'pg',
          image: './images/largeposter-1.jpg'
        },
        {
          id: 3,
          title: 'Whered You Go Bernadette',
          description: "Where’d You Go, Bernadette is based on the runaway bestseller about Bernadette Fox, a Seattle woman who had it all - a loving husband and a brilliant daughter. When she unexpectedly disappears, her family sets off on an exciting adventure to solve the mystery of where she might have gone.",
          release: '30/07/2020',
          time: '109 mins',
          rating: 'm',
          image: './images/largeposter-2.jpg'
        },
        {
          id: 4,
          title: 'The Personal History Of David Copperfield',
          description: "From birth to infancy, from adolescence to adulthood, the good-hearted David Copperfield is surrounded by kindness, wickedness, poverty and wealth, as he meets an array of remarkable characters in Victorian England...",
          release: '16/07/2020',
          time: '119 mins',
          rating: 'pg',
          image: './images/largeposter-3.jpg'
        },
        {
          id: 5,
          title: 'The King Of Staten Island',
          description: "A semi-autobiographical comedy-drama about Pete Davidson growing up in Staten Island, including losing his father during 9/11 and entering the world of stand up comedy.",
          release: '16/07/2020',
          time: '137 mins',
          rating: 'r16',
          image: './images/largeposter-4.jpg'
        },
        {
          id: 6,
          title: 'Radioactive',
          description: "From the 1870s to the modern era, RADIOACTIVE is a journey through Marie Curie’s (Academy Award® nominee Rosamund Pike) enduring legacies – her passionate relationships, scientific breakthroughs and the consequences that followed for her and for the world...",
          release: '16/07/2020',
          time: '110 mins',
          rating: 'm',
          image: './images/largeposter-5.jpg'
        },
        {
          id: 6,
          title: 'Follow Me',
          description: "A social media personality travels with his friends to Moscow to capture new content for his successful VLOG. Always pushing the limits and catering to a growing audience, they enter a cold world of mystery, excess, and danger. When the lines between real life and social media are blurred, the group must fight to escape, and survive.",
          release: '23/07/2020',
          time: '92 mins',
          rating: 'r16',
          image: './images/largeposter-6.jpg'
        },
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
      return item.id !== id
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
            <h3>Your juicy moive connection</h3>
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
