import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/app.jsx';

// When the DOM renders, fire off the app logic
document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('root'));
});
