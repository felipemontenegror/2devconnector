import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import 'antd/dist/antd.css' // ant design styledsheet
//import './assets/scss/style.scss' //sass que não foi usado, apenas demonstracao
import GlobalStyle from './assets/globalStyle'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router />
  </Provider>,
  document.getElementById('root')
);

