import React from 'react';
import { getNextPage } from '../actions/article_actions';

function btn() {
  return (
    <button className="footer-btn" onClick={getNextPage}>
      Load More
    </button>
  );
}

export default function Footer(props) {
  let klass = props.complete ? 'footer-container u-drk-bg' : 'footer-container';
  return (
    <footer className={klass}>
      {props.complete ? null : btn()}
    </footer>
  );
}
Footer.propTypes = { complete: React.PropTypes.bool };
Footer.defaultProps = { complete: false };
