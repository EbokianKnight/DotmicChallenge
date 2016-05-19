import React from 'react';
import Header from './header';
import ArticleStore from '../stores/article_store';
import { getNextPage } from '../actions/article_actions';
import RowContainer from './row_container';
import Footer from './footer';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: ArticleStore.provideArticles(),
      complete: ArticleStore.noMoreResults(),
    };
    this.renderArticles = this.renderArticles.bind(this);
    this.getStateFromStore = this.getStateFromStore.bind(this);
  }
  componentDidMount() {
    this.token = ArticleStore.addListener(this.getStateFromStore);
    getNextPage();
  }
  componentWillUnmount() {
    this.token.remove();
  }
  getStateFromStore() {
    this.setState({
      articles: ArticleStore.provideArticles(),
      complete: ArticleStore.noMoreResults(),
    });
  }
  renderArticles() {
    return this.state.articles.map(row =>
      <RowContainer key={row.id} article={row} />
    );
  }
  render() {
    return (
      <div>
        <Header />
        <div className="row-index-wrapper">
          {this.renderArticles()}
        </div>
        <Footer complete={this.state.complete} />
      </div>
    );
  }
}

Main.PropTypes = {
  articles: React.PropTypes.array,
  complete: React.PropTypes.boolean,
};
Main.defaultProps = {
  articles: [],
  complete: false,
};

export default Main;
