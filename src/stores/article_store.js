import Store from 'flux/utils';
import Dispatcher from '../dispatcher/dispatcher';
const ArticleStore = new Store(Dispatcher);
import { ArticleActions } from '../actions/article_actions';

/*eslint-disable */
ArticleStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case ArticleActions.AUTHORSORTED:
      ArticleStore.__emitChange();
      break;
    case ArticleActions.DATESORTED:
      ArticleStore.__emitChange();
      break;
    case ArticleActions.COUNTSORTED:
      ArticleStore.__emitChange();
      break;
  }
};
/*eslint-enable */

export default ArticleStore;
