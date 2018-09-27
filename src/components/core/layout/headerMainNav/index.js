/* eslint-disable */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Select, Row, Col } from 'antd';
import StyleWrapper from './style';

const { Option } = Select;

const categoryData = ['General', 'Navigation', 'DataEntry', 'DataDisplay', 'Feedback', 'Other'];
const componentData = {
  General: ['Button', 'Icon'],
  Navigation: ['Affix', 'Breadcrumb', 'Dropdown', 'Menu', 'Pagination', 'Steps'],
  DataEntry: [
    'AutoComplete',
    'Cascader',
    'Checkbox',
    'DatePicker',
    'Form',
    'Input',
    'InputNumber',
    'Mention',
    'Radio',
    'Rate',
    'Select',
    'Skeleton',
    'Switch',
    'Slider',
    'TreeSelect',
    'TimePicker',
    'Transfer',
    'Upload',
  ],
  DataDisplay: [
    'Avatar',
    'Badge',
    'Calendar',
    'Card',
    'Carousel',
    'Collapse',
    'List',
    'Popover',
    'Tooltip',
    'Table',
    'Tabs',
    'Tag',
    'Timeline',
    'Tree',
  ],
  Feedback: [
    'Alert',
    'Drawer',
    'Modal',
    'Message',
    'Notification',
    'Progress',
    'Popconfirm',
    'Spin',
  ],
  Other: ['Anchor', 'BackTop', 'Divider', 'LocaleProvider'],
};

class HeaderMainNav extends React.Component {
  state = {
    categories: componentData[categoryData[0]],
    selectedComponent: componentData[categoryData[0]][0],
    selectedCategory: categoryData[0],
  };

  handleCategoryChange = value => {
    this.setState({
      categories: componentData[value],
      selectedComponent: componentData[value][0],
      selectedCategory: value,
    });
  };

  handleRoutePush = () => {
    const selectedCategory = this.state.selectedCategory.toLowerCase();
    const selectedComponent = this.state.selectedComponent.toLowerCase();
    this.props.history.push(`/${selectedCategory}/${selectedComponent}`);
  };

  onComponentChange = value => {
    this.setState(
      {
        selectedComponent: value,
      },
      this.handleRoutePush,
    );
  };

  render() {
    const categoryOptions = categoryData.map(province => (
      <Option key={province}>{province}</Option>
    ));
    const componentOptions = this.state.categories.map(comp => <Option key={comp}>{comp}</Option>);
    return (
      <StyleWrapper>
        <Row type="flex">
          <Col span={5} style={{ height: '45px', lineHeight: '45px' }}>
            Category:{' '}
            <Select
              defaultValue={this.state.selectedCategory}
              onChange={this.handleCategoryChange}
              style={{ width: 140 }}
            >
              {categoryOptions}
            </Select>
          </Col>
          <Col span={5} style={{ height: '45px', lineHeight: '45px' }}>
            Component:{' '}
            <Select
              value={this.state.selectedComponent}
              onChange={this.onComponentChange}
              style={{ width: 140 }}
            >
              {componentOptions}
            </Select>
          </Col>
        </Row>
      </StyleWrapper>
    );
  }
}

export default withRouter(HeaderMainNav);
