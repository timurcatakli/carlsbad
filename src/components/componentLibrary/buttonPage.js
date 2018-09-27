import React from 'react';
import Button from '@src/components/core/button';
import { Row, Col, Icon } from 'antd';

const ButtonPage = () => (
  <div>
    <h1>Button</h1>
    <p>
      <a href="https://ant.design/components/button/" target="_blank">
        https://ant.design/components/button/
      </a>
    </p>
    <Row gutter={16} align="middle" justify="space-around" style={{ textAlign: 'center' }}>
      <Col span={4}>
        <Button type="primary">Primary</Button>
      </Col>
      <Col span={4}>
        <Button type="primary" shape="circle" icon="search" />
      </Col>
      <Col span={4}>
        <Button type="primary" icon="search">
          Search
        </Button>
      </Col>
      <Col span={4}>
        <Button type="primary" loading={true}>
          Click me!
        </Button>
      </Col>
    </Row>
  </div>
);

export default ButtonPage;
