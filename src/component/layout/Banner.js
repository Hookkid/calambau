import React from 'react'
import {map} from 'lodash'

export class Banner extends React.Component {




  render() {
    return (
      <div className="container">
          <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="9000">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img className="first-slide" src="src/img/banner.jpg" alt="First slide" />
                <div className="container">
                  <div className="carousel-caption">
                    
                  </div>
                </div>
              </div>
              <div className="item">
                <img className="second-slide" src="src/img/banner.jpg" alt="Second slide"/>
                <div className="container">
                  <div className="carousel-caption">
                    
                  </div>
                </div>
              </div>
              <div className="item">
                <img className="third-slide" src="src/img/banner.jpg" alt="Third slide"/>
                <div className="container">
                  <div className="carousel-caption">
                    
                  </div>
                </div>
              </div>
            </div>
            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>  
    )
  }
}
