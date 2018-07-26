import * as Babel from 'babel-standalone'
import * as R from 'ramda'
import * as F from '@roseys/futils/dist/futils'
import React from 'react'
import ReactDOM from 'react-dom'
import base64 from 'base-64'
import configureStore from './store/configureStore'
import history from './common/history'
import { Provider } from 'react-redux'
import { parse } from './query-string'
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import './reset.css'
import './index.css'

// Expose libraries for the REPL onto window
F.keys(F).forEach(method => {
  global[method] = F[method]
})

global.Babel = Babel
global.F = F
global.R = R
global.React = React
global.ReactDOM = ReactDOM

const initialState = parse(history.location.search)

const scripts = Array.isArray(initialState.script)
  ? initialState.script
  : initialState.script
    ? [initialState.script]
    : []

const store = configureStore({
  code: {
    value: initialState.q ? base64.decode(initialState.q) : '',
    gist: initialState.gist,
    stringify: initialState.stringify,
  },
  script: {
    scripts: scripts.map(url => ({
      url: decodeURIComponent(url),
      isReady: false,
    })),
  },
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.register();
