import React from 'react';
import { getNextPage } from '../actions/article_actions';

export default function Footer() {
  return (
    <footer className="footer-container">
      <button className="footer-btn" onClick={getNextPage}>
        Load More
      </button>
    </footer>
  );
}
