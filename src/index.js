import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
 
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <AppContainer /> 
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
