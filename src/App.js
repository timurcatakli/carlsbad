import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';

const App = ({ test1, test2, test3 }) => (
  <p>
    App functional {test1} - {test2} - {test3} component is working
    <Button type="primary">Test</Button>
  </p>
);

App.propTypes = {
  test1: PropTypes.string,
  test2: PropTypes.string,
  test3: PropTypes.string,
};

App.defaultProps = {
  images: [],
  error: '',
};

export default App;
