import Dispatcher from '../dispatcher/dispatcher';

export const ArticleActions = {
  AUTHORSORTED: 'AUTHORSORTED',
  COUNTSORTED: 'COUNTSORTED',
  DATESORTED: 'DATESORTED',
  PAGINATE: 'GET_NEXT_PAGE',
  LOADARTICLES: 'LOADARTICLES',
};

export function loadMoreArticles(articles) {
  Dispatcher.dispatch({
    actionType: ArticleActions.LOADARTICLES,
    articles,
  });
}

export function getNextPage() {
  Dispatcher.dispatch({
    actionType: ArticleActions.PAGINATE,
  });
}

export function sortByAuthor() {
  Dispatcher.dispatch({
    actionType: ArticleActions.AUTHORSORTED,
  });
}

export function sortByCount() {
  Dispatcher.dispatch({
    actionType: ArticleActions.COUNTSORTED,
  });
}

export function sortByDate() {
  Dispatcher.dispatch({
    actionType: ArticleActions.DATESORTED,
  });
}
