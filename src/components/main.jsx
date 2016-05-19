import React from 'react';
import header from './header';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {header()}
        <div className="row-index-wrapper">
          <div className="row-container">
            <div className="main-row">
              <div className="icon"></div>
              <div className="row-article-title">
                Ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                 sed do eiusmod tempor
              </div>
              <div className="bootcamp">Bootcamp</div>
            </div>
            <div className="sub-row-index">
              <a href="#" className="sub-row">
                Medha Chandorkar
              </a>
              <p className="sub-row">
                433
              </p>
              <p className="sub-row">
                6 minutes ago
              </p>
            </div>
          </div>
        </div>
        <footer className="footer-container">
          <button className="row-load-btn">Load More</button>
        </footer>
      </div>
    );
  }
}

Main.propTypes = { articles: React.PropTypes.array };
Main.defaultProps = { articles: [] };

export default Main;
