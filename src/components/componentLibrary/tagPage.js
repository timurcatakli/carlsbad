import React from 'react';
import Tag from '@src/components/core/tag';
import { Row, Col } from 'antd';

function log(e) {
  console.log(e);
}

function preventDefault(e) {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
}

const TagPage = () => (
  <div>
    <h3>Tag</h3>
    <p>
      <a href="https://ant.design/components/tag/" target="_blank">
        https://ant.design/components/tag/
      </a>
    </p>
    <Row gutter={16}>
      <Col span={12}>
        <Tag>Tag 1</Tag>
        <Tag>
          <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
        </Tag>
        <Tag
          closable
          onClose={() => {
            console.log('Clicked');
          }}
        >
          Tag 2
        </Tag>
        <Tag closable onClose={preventDefault}>
          Prevent Default2
        </Tag>
      </Col>
    </Row>
  </div>
);

export default TagPage;
