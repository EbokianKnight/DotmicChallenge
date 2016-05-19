import Dispatcher from '../dispatcher/dispatcher';
import { Store } from 'flux/utils';
import { ArticleActions } from '../actions/article_actions';
import { loadJSON } from '../utils/api_util';
import sortArticles from '../utils/sort_articles';

const ArticleStore = new Store(Dispatcher);

let lastSortedBy = window.sessionStorage.getItem('lastSortedBy') || 'none';
let articleList = [];
let shownArticles = [];
let pageNumber = 0;
let orderBy = window.sessionStorage.getItem('orderBy') || 'up';
let sorted = false;
let moreResults = true;

/*eslint-disable */
console.log(window.sessionStorage.getItem('lastSortedBy'));
console.log(window.sessionStorage.getItem('orderBy'));

ArticleStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
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
  window.sessionStorage.setItem('lastSortedBy', lastSortedBy);
  window.sessionStorage.setItem('orderBy', orderBy);
};
/*eslint-enable */

function toggleOrder() {
  orderBy = orderBy === 'up' ? 'down' : 'up';
}

// this loads the next ten ads into shownArticles
// the hard cap of 60 here should be generated dynamically based on backend info
function showTenMoreArticles() {
  const total = articleList.length;
  const next = (10 * pageNumber);
  const last = (10 * (pageNumber + 1));
  if (total >= last) {
    shownArticles = shownArticles.concat(articleList.slice(next, last));
    pageNumber++;
  } else if (total === 0) {
    loadJSON('../src/dbfaker/articles.json');
  } else if (total > 0 && total < 60) {
    loadJSON('../src/dbfaker/more-articles.json');
  }
  if (shownArticles.length >= 60) {
    moreResults = false;
  }
}

// this loads all of the json into a storage variable
function cacheArticles(articles) {
  articleList = articleList.concat(articles);
  showTenMoreArticles();
}

// used to determine if the LoadMore button should be active
ArticleStore.noMoreResults = function noMoreResults() {
  return !moreResults;
};

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
  let sortBy;
  if (lastSortedBy === 'count') {
    sortBy = 'words';
  } else if (lastSortedBy === 'date') {
    sortBy = 'publish_at';
  } else {
    sortBy = 'id';
  }
  sortBy = orderBy === 'up' ? '-'.concat(sortBy) : sortBy;
  return sortArticles(shownArticles, sortBy);
};

export default ArticleStore;
