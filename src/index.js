import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchContacts } from './reducers';

const store = createStore(searchContacts);

ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>
                , document.getElementById('root'));

serviceWorker.unregister();
