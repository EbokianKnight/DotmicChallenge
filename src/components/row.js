import React from 'react';

export default function Row(props) {
  return (
    <div className="expand row-container">
      <div className="main-row">
        <img src={props.img} alt={props.img} className="icon" />
        <a href={props.url} className="row-article-title">
          {props.title}
        </a>
        <div className="bootcamp">{props.stamp}</div>
      </div>
      <div className="sub-row-index">
        <p className="sub-row">
          {props.fullName}
        </p>
        <p className="sub-row">
          {props.wordCount}
        </p>
        <p className="sub-row">
          {props.timeAgo}
        </p>
      </div>
    </div>
  );
}

Row.propTypes = {
  img: React.PropTypes.string,
  title: React.PropTypes.string,
  stamp: React.PropTypes.string,
  url: React.PropTypes.string,
  fullName: React.PropTypes.string,
  wordCount: React.PropTypes.number,
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
