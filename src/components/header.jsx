import React from 'react';
import ArticleStore from '../stores/article_store';

import { sortByDate, sortByCount, sortByDefault }
  from '../actions/article_actions';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortBy: 'none' };
    this.setStateFromStore = () => {
      this.setState({ sortBy: ArticleStore.sortedBy() });
    };
  }
  componentDidMount() {
    this.storeToken = ArticleStore.addListener(this.setStateFromStore);
  }
  componentWillUnmount() {
    this.storeToken.remove();
  }
  render() {
    let count = 'sub-row header btn';
    let author = 'sub-row header';
    let date = 'sub-row header btn';
    const order = ArticleStore.getOrder();
    if (this.state.sortBy === 'count') {
      count = `sub-row header btn ${order}`;
    } else if (this.state.sortBy === 'date') {
      date = `sub-row header btn ${order}`;
    }
    return (
      <div>
        <header className="header-container">
          <div className="main-row btn" onClick={sortByDefault}>
            <p>Unpublished Articles ({ArticleStore.getTotal()})</p>
          </div>
          <div className="sub-row-index">
            <p className={author}>
              Author
            </p>
            <button className={count} onClick={sortByCount}>
              Words
            </button>
            <button className={date} onClick={sortByDate}>
              Submitted
            </button>
          </div>
        </header>
      </div>
    );
  }
}

Header.propTypes = { sortBy: React.PropTypes.string };
Header.defaultProps = { sortBy: 'none' };

export default Header;
