import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import {BrowserRouter} from 'react-router-dom'
import store from './store'
import './assets/css/index.css';
import App from './components/App';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
      <ReduxToastr
        timeOut={7000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="bounceIn"
        transitionOut="bounceOut"
        progressBar
      />
    </div>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
