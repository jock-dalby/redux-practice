import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './store/reducer';
import App from './App';
import './index.css';

const store = createStore(reducer)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
