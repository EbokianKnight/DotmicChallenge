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
let sorted = true;

/*eslint-disable */
ArticleStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case ArticleActions.AUTHORSORTED:
      sorted = false;
      if (lastSortedBy !== 'author') {
        lastSortedBy = 'author';
        orderBy = 'up';
      } else {
        toggleOrder();
      }
      ArticleStore.__emitChange();
      break;
    case ArticleActions.DATESORTED:
      sorted = false;
      if (lastSortedBy !== 'date') {
        lastSortedBy = 'date';
        orderBy = 'up';
      } else {
        toggleOrder();
      }
      ArticleStore.__emitChange();
      break;
    case ArticleActions.COUNTSORTED:
      sorted = false;
      if (lastSortedBy !== 'count') {
        lastSortedBy = 'count';
        orderBy = 'up';
      } else {
        toggleOrder();
      }
      ArticleStore.__emitChange();
      break;
    case ArticleActions.DEFAULTSORTED:
      sorted = false;
      if (lastSortedBy !== 'none') {
        lastSortedBy = 'none';
        orderBy = 'up';
      } else {
        toggleOrder();
      }
      ArticleStore.__emitChange();
      break;
    case ArticleActions.PAGINATE:
      sorted = false;
      showTenMoreArticles();
      ArticleStore.__emitChange();
      break;
    case ArticleActions.LOADARTICLES:
      sorted = false;
      cacheArticles(payload.articles);
      ArticleStore.__emitChange();
      break;
  }
};
/*eslint-enable */

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

// return the total number of shown articles
ArticleStore.getTotal = function getTotal() {
  return shownArticles.length;
};

// this shows the last filter that was applied to the list
ArticleStore.sortedBy = function sortedBy() {
  return lastSortedBy;
};

ArticleStore.getOrder = function getOrder() {
  return orderBy;
};


// if there are articles loaded, return a sorted version
ArticleStore.provideArticles = function provideArticles() {
  if (sorted) return shownArticles;
  sorted = true;
  return sortArticles(shownArticles, orderBy, lastSortedBy);
};

export default ArticleStore;
