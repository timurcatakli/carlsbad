import React from 'react';
import { Button } from 'antd';
import StyleWrapper from './style';

const ButtonComponent = props => (
  <StyleWrapper>
    <Button {...props}>{props.children}</Button>
  </StyleWrapper>
);

export default ButtonComponent;
