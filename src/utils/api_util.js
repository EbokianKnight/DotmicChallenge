import { loadMoreArticles } from '../actions/article_actions';

// callback
function response(json) {
  loadMoreArticles(JSON.parse(json));
}

// make an xml request to a JSON file
// load async and fireoff response on success callback
export function loadJSON(path) {
  const xhr = new XMLHttpRequest();
  xhr.overrideMimeType('application/json');
  xhr.open('GET', path, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      response(xhr.responseText);
    }
  };
  xhr.send(null);
}
