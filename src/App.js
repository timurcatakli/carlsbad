import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Menu, Switch } from 'antd';
import { ThemeProvider } from 'styled-components';
import { switchTheme } from './actions';
import AppStyleWrapper from './app.style';
import { themeConfig } from './settings';
import themes from './settings/themes';

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  onChange = () => {
    this.props.switchTheme();
  };

  render() {
    console.log(this.props.sidebarCollapsed);
    const currTheme = this.props.sidebarCollapsed ? 'themedefault' : 'theme2';
    return (
      <ThemeProvider theme={themes[currTheme]}>
        <AppStyleWrapper>
          <Layout style={{ minHeight: '100vh' }} className="appLayout">
            <Header
              style={{
                padding: '1',
                position: 'fixed',
                zIndex: 1,
                width: '100%',
                backgroundColor: 'transparent',
              }}
            >
              <Switch defaultChecked onChange={this.onChange} />
              <div className="logo" style={{ backgroundColor: 'gold', height: 40 }} />
              <div className="logo" style={{ backgroundColor: 'darkgreen', height: 40 }} />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
          </Layout>
        </AppStyleWrapper>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  sidebarCollapsed: PropTypes.bool.isRequired,
  switchTheme: PropTypes.func.isRequired,
};

App.defaultProps = {};

export default connect(
  state => ({
    sidebarCollapsed: state.app.sidebarCollapsed,
    customizedTheme: state.app.layoutTheme.themeName,
  }),
  { switchTheme },
)(App);
