import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Router 어떤 component를 rendering할지 결정 (what show on the screen)
// browserHistory react-router에게 어떻게 url이 바뀌었는지를 전달함 (url update)
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';

import { Router, browserHistory } from 'react-router';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
