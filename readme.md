##.Mic Test
This is the UI/UX developer competency test designed to gauge skill,
attention to detail and affinity for standards based development.

###**Adam C Keller**
<a href="mailto:adamcharleskeller@gmail.com">Email</a><br />
<a href="https://github.com/EbokianKnight">GitHub</a><br />
<a href="https://www.linkedin.com/in/adam-keller-6359a3b9">LinkedIn</a><br />
<a href="http://ebokianknight.github.io/">Portfolio Site</a><br />

###Launch Instructions
* StepOne. Download and Navigate into the dotmic_challenge directory.
* StepTwo. "npm install"
* StepThree. "npm install -g http-server" (if you don't have it already)
* StepFour. "npm run start"
* StepFive. <a href="http://localhost:8080/src/index.html">Click Here</a>

###Needs
- [x] populate the page with data from articles.json
- [x] paginate the query by tens
- [x] provide a load more button to load another page
- [x] if the original query is deleted, ajax another call to more-articles.json
- [x] enable table sorting by **words** and **submitted** cols, cache settings
- [x] provide a similar to provided UI that is clear and functional
- [x] enable local storage to store sorting variables during refresh.

###Component Map
* Index.jsx to wrap the Main page
* Main.jsx to store the state and store references
* RowContainer.jsx to be passed state prop and format data for each row
* Row.js function displays html/css for each row
* Header.jsx serves as the header
* Footer.jsx serves as the button for loading
