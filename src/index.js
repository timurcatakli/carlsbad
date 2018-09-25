/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(<App test1="11" test2="22" test3="33" />, document.getElementById('app'));

module.hot.accept();
