import React from 'react';

export default function Row() {
  return (
    <div className="row-container">
      <div className="main-row">
        <img alt={this.props.img} className="icon" />
        <a href={this.props.url} className="row-article-title">
          {this.props.title}
        </a>
        <div className="bootcamp">{this.props.stamp}</div>
      </div>
      <div className="sub-row-index">
        <p className="sub-row">
          {this.props.fullName}
        </p>
        <p className="sub-row">
          {this.props.wordCount}
        </p>
        <p className="sub-row">
          {this.props.timeAgo}
        </p>
      </div>
    </div>
  );
}

Row.PropTypes = {
  img: React.PropTypes.string,
  title: React.PropTypes.string,
  stamp: React.PropTypes.string,
  url: React.PropTypes.string,
  fullName: React.PropTypes.string,
  wordCount: React.PropTypes.string,
  timeAgo: React.PropTypes.string,
};
Row.defaultProps = {
  img: '',
  title: 'Loading...',
  stamp: '',
  url: '',
  fullName: '',
  wordCount: '',
  timeAgo: '',
};
