/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import './style.css';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>
    {title} - <Button type="primary">Primary Button Ver</Button>
  </div>,
  document.getElementById('app'),
);

module.hot.accept();
