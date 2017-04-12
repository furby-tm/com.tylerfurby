import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Springy from './components/Spring';
import Typekit from 'react-typekit';

// Render the main component into the dom
ReactDOM.render(<Springy />, document.getElementById('springy'));

const HtmlLayout = () => (
      <Typekit kitId="ulw0ouw" />
);

export default HtmlLayout;
