import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header className="header-container">
          <div className="left-header">
            <p>Unpublished Articles (66)</p>
          </div>
          <div className="right-header">
            <p>Author</p>
            <p>Words</p>
            <p>Submitted</p>
          </div>
        </header>
        <div className="row-container">
          <div className="row-col-1">
            <div className="icon"></div>
            <div className="row-article-title">
              Ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            </div>
            <div className="bootcamp">Bootcamp</div>
          </div>
          <a href="#" className="row-article-author">Medha Chandorkar</a>
          <p className="row-article-wordcount">433</p>
          <p className="row-article-submital">6 minutes ago</p>
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

module.exports = Main;
