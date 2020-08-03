import React, { Component } from 'react';
import './assets/css/app.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render(){
    return (
      <div className="wrap">
        <header>
          <div className="container-fluid"></div>
        </header>
        <main className="container-fluid">
          <div className="row">
            <div className="main-content-wrap col-md-7 col-lg-9">
              <div className="content">
                <div className="movie-cat">
                  <div className="movie-item">
                      <div className="item-btns">
                        <i className="fas fa-edit edit"></i>
                        <i className="fas fa-trash-alt trash"></i>
                      </div>
                    <img className="movie-image" src="images/largeposter.jpg" alt=""/>
                    <div className="movie-content-wrap">
                      <h1 className="movie-title">
                        Unhinged
                      </h1>
                      <p className="movie-bio">
                        Unhinged is a psychological thriller that takes something we've all experienced - road rage - to an unpredictable and terrifying conclusion.
                      </p>
                      <p className="movie-release-date"><span>Release Date:</span> 30/07/2020</p>
                      <p className="movie-running-time"><span>Run Time:</span> 90 min</p>
                      <p className="movie-rating"><span>Rating:</span> R16</p>
                    </div>
                  </div>
                  <div className="movie-item">
                      <div className="item-btns">
                        <i className="fas fa-edit edit"></i>
                        <i className="fas fa-trash-alt trash"></i>
                      </div>
                    <img className="movie-image" src="images/largeposter.jpg" alt=""/>
                    <div className="movie-content-wrap">
                      <h1 className="movie-title">
                        Unhinged
                      </h1>
                      <p className="movie-bio">
                        Unhinged is a psychological thriller that takes something we've all experienced - road rage - to an unpredictable and terrifying conclusion.
                      </p>
                      <p className="movie-release-date"><span>Release Date:</span> 30/07/2020</p>
                      <p className="movie-running-time"><span>Run Time:</span> 90 min</p>
                      <p className="movie-rating"><span>Rating:</span> R16</p>
                    </div>
                  </div>
                  <div className="movie-item">
                      <div className="item-btns">
                        <i className="fas fa-edit edit"></i>
                        <i className="fas fa-trash-alt trash"></i>
                      </div>
                    <img className="movie-image" src="images/largeposter.jpg" alt=""/>
                    <div className="movie-content-wrap">
                      <h1 className="movie-title">
                        Unhinged
                      </h1>
                      <p className="movie-bio">
                        Unhinged is a psychological thriller that takes something we've all experienced - road rage - to an unpredictable and terrifying conclusion.
                      </p>
                      <p className="movie-release-date"><span>Release Date:</span> 30/07/2020</p>
                      <p className="movie-running-time"><span>Run Time:</span> 90 min</p>
                      <p className="movie-rating"><span>Rating:</span> R16</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar col-md-5 col-lg-3">
              <h1>Enter <span>your latest movie...</span></h1>
              <form action="x">
                <div className="form-group">
                  <input type="text" id="name" name="name" placeholder="Name of movie"/>
                </div>
                <div className="form-group">
                  <input type="text" id="release" name="release" placeholder="Release date"/>
                </div>
                <div className="form-group">
                  <input type="text" id="runtime" name="runtime" placeholder="Runtime of movie"/>
                </div>
                <div className="form-group">
                  <input type="text" id="rating" name="rating" placeholder="Rating of movie"/>
                </div>
                <div className="form-group">
                  <textarea name="about" id="about" cols="30" rows="10" placeholder="Bio about movie"></textarea>
                </div>
                <button type="submit" className="cta">Add</button>
              </form>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
