import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/app';
import './app.global.css';
import { BrowserRouter } from 'react-router-dom'

render(
  <AppContainer>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/app.js', () => {
    const NextRoot = require('./components/app'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <BrowserRouter>
          <NextRoot />
        </BrowserRouter>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
