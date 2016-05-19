function customSort(property) {
  let sortOrder = 1;
  let theProperty = property;
  if (property[0] === '-') {
    sortOrder = -1;
    theProperty = property.slice(1);
  }
  return function compare(a, b) {
    let result = 0;
    if ([theProperty] < b[theProperty]) {
      result = -1;
    } else if ([theProperty] > b[theProperty]) {
      result = 1;
    }
    return result * sortOrder;
  };
}

export function sortArticles(articles, by, order) {
  switch (by) {
    case 'count':
      if (order === 'up') {
        articles.sort(customSort('words'));
      } else {
        articles.sort(customSort('-words'));
      }
      break;
    case 'author':
      if (order === 'up') {
        articles.sort(customSort('profile.last_name'));
      } else {
        articles.sort(customSort('-profile.last_name'));
      }
      break;
    case 'date':
      if (order === 'up') {
        articles.sort(customSort('publish_at'));
      } else {
        articles.sort(customSort('-publish_at'));
      }
      break;
    default:
      articles.sort(customSort('-id'));
  }
}
