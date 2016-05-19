function customSort(property) {
  let sortOrder = 1;
  let theProperty = property;
  if (property[0] === '-') {
    sortOrder = -1;
    theProperty = property.slice(1);
  }
  return function compare(a, b) {
    let result = 0;
    if (a[theProperty] < b[theProperty]) {
      result = -1;
    } else if (a[theProperty] > b[theProperty]) {
      result = 1;
    }
    return result * sortOrder;
  };
}

export default function sortArticles(articles, sortBy) {
  articles.sort(customSort(sortBy));
  return articles;
}
