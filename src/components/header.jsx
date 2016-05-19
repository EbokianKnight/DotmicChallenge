import React from 'react';
import { ArticleStore } from '../stores/article_store';
import { sortByDate, sortByAuthor, sortByCount, sortByDefault }
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
    let count = 'sub-row header u-color-alt';
    let author = 'sub-row header';
    let date = 'sub-row header u-color-alt';
    if (this.state.sortBy === 'count') {
      count.append(' selected');
    } else if (this.state.sortBy === 'author') {
      author.append(' selected');
    } else if (this.state.sortBy === 'date') {
      date.append(' selected');
    }
    return (
      <div>
        <header className="header-container">
          <div className="main-row" onClick={sortByDefault}>
            <p>Unpublished Articles (66)</p>
          </div>
          <div className="sub-row-index">
            <button className={author} onClick={sortByAuthor}>
              Author
            </button>
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
Header.defaultProps = { sortBy: ArticleStore.sortedBy() };

export default Header;
