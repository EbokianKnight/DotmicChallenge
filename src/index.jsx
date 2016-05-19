import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Main from './components/main.jsx';

// When the DOM renders, fire off the app logic
document.addEventListener('DOMContentLoaded', () => {
  render(<Main />, document.getElementById('root'));
});
