import React from 'react';
import { Tag } from 'antd';

const TagComponent = props => (
  <Tag
    {...props}
    style={{
      backgroundColor: '#67727e',
      color: 'white',
      border: '1px solid transparent',
      fontSize: 11,
      fontWeight: 300,
    }}
  >
    {props.children}
  </Tag>
);

export default TagComponent;
