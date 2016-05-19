import Dispatcher from '../dispatcher/dispatcher';
import { Store } from 'flux/utils';
import { ArticleActions } from '../actions/article_actions';
import Util from '../utils/api_util';
import { sortArticles } from '../utils/sort_articles';

const ArticleStore = new Store(Dispatcher);

let lastSortedBy = 'none';
const articleList = [];
const shownArticles = [];
let pageNumber = 1;
let orderBy = 'up';

/*eslint-disable */
ArticleStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case ArticleActions.AUTHORSORTED:
      if (lastSortedBy !== 'author') {
        lastSortedBy = 'author';
        orderBy = 'up';
      } else {
        toggleOrder();
      }
      ArticleStore.__emitChange();
      break;
    case ArticleActions.DATESORTED:
      if (lastSortedBy !== 'date') {
        lastSortedBy = 'date';
        orderBy = 'up';
      } else {
        toggleOrder();
      }
      ArticleStore.__emitChange();
      break;
    case ArticleActions.COUNTSORTED:
      if (lastSortedBy !== 'count') {
        lastSortedBy = 'count';
        orderBy = 'up';
      } else {
        toggleOrder();
      }
      ArticleStore.__emitChange();
      break;
    case ArticleActions.DEFAULTSORTED:
      if (lastSortedBy !== 'none') {
        lastSortedBy = 'none';
        orderBy = 'up';
      } else {
        toggleOrder();
      }
      ArticleStore.__emitChange();
      break;
    case ArticleActions.PAGINATE:
      showTenMoreArticles();
      ArticleStore.__emitChange();
      break;
    case ArticleActions.LOADARTICLES:
      cacheArticles(payload.articles);
      ArticleStore.__emitChange();
      break;
  }
};
/*eslint-enable */

// this shows the last filter that was applied to the list
function sortedBy() {
  return lastSortedBy;
}

function toggleOrder() {
  orderBy = orderBy === 'up' ? 'down' : 'up';
}

// this loads the next ten ads into shownArticles
function showTenMoreArticles() {
  if (articleList >= (10 * pageNumber)) {
    const index = pageNumber * 10;
    for (let i = 0; i < 10; i++) {
      shownArticles.push(articleList[index + i]);
    }
    pageNumber++;
  } else {
    Util.getMoreAds();
  }
}

// this loads all of the json into a storage variable
function cacheArticles(articles) {
  articleList.push(articles);
}

function provideArticles() {
  return sortArticles(shownArticles);
}

ArticleStore.sortedBy = sortedBy;
ArticleStore.provideArticles = provideArticles;

export default ArticleStore;
