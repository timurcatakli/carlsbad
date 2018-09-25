import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Button } from 'antd';

const App = () => (
  <p>
    App functional component is working
    <Button type="primary">Test</Button>
  </p>
);

App.propTypes = {};

App.defaultProps = {};

export default App;
