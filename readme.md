##.Mic Test
This is the UI/UX developer competency test designed to gauge skill, attention to detail and affinity for standards based development.

###Needs
[ ] populate the page with data from articles.json
[ ] paginate the query by tens
[ ] provide a load more button to load another page
[ ] if the original query is deleted, ajax another call to more-articles.json
[ ] enable table sorting by **words** and **submitted** cols, cache settings
[ ] provide a UI worth using whose display is clear and functional

###Component Map
* Index.jsx to wrap the Main page
* Main.jsx to store the state and store references
* RowContainer.jsx to be passed state prop and format data for each row
* Row.js function displays html/css for each row
* Header.jsx
