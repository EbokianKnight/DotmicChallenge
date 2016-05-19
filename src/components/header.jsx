import React from 'react';
import { sortByDate, sortByAuthor, sortByCount } from '../actions/article_actions';

function Header() {
  return (
    <div>
      <header className="header-container">
        <div className="main-row">
          <p>Unpublished Articles (66)</p>
        </div>
        <div className="sub-row-index">
          <button className="sub-row header" onClick={sortByAuthor}>Author</button>
          <button
            className="sub-row header u-color-alt"
            onClick={sortByCount}
          >
            Words
          </button>
          <button
            className="sub-row header u-color-alt"
            onClick={sortByDate}
          >
            Submitted
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
