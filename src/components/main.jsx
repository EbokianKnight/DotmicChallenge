import React from 'react';
import Header from './header';
import ArticleStore from '../stores/article_store';
import RowContainer from './row_container';
import Footer from './footer';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: ArticleStore.provideArticles() };
    this.renderArticles = this.renderArticles.bind(this);
    this.getStateFromStore = () => {
      this.setState({ articles: ArticleStore.provideArticles() });
    };
  }
  componentDidMount() {
    this.token = ArticleStore.addListener(this.getStateFromStore);
  }
  componentWillUnmount() {
    this.token.remove();
  }
  renderArticles() {
    /*eslint-disable */
    console.log(this.state)
    /*eslint-enable */
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
        <Footer />
      </div>
    );
  }
}

Main.PropTypes = { articles: React.PropTypes.array };
Main.defaultProps = { articles: [] };

export default Main;
