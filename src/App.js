import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Menu, Switch } from 'antd';
import { ThemeProvider } from 'styled-components';
import CoreComponents from '@src/components/core';
import { TagPage, ButtonPage } from '@src/components/componentLibrary';
import { switchTheme } from './actions';
import AppStyleWrapper from './app.style';
import { themeConfig } from './settings';
import HeaderLogo from './components/core/layout/headerLogo';
import HeaderMainNav from './components/core/layout/headerMainNav';
import themes from './settings/themes';
import { ROUTES } from './constants';
import '@src/settings/themes/ant.less';

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  onChange = () => {
    const { currTheme } = this.props;
    let newTheme = '';
    if (currTheme === 'themelight') {
      newTheme = 'themedark';
    } else {
      newTheme = 'themelight';
    }
    this.props.switchTheme(newTheme);
  };

  render() {
    const { currTheme } = this.props;
    return (
      <Router>
        <ThemeProvider theme={themes[currTheme]}>
          <AppStyleWrapper>
            <Layout className="appLayout">
              <Header>
                <HeaderLogo />
                <HeaderMainNav />
                <Content className="appContent">
                  <Switch defaultChecked onChange={this.onChange} />
                  <Route exact path={ROUTES.COMPONENTS} component={CoreComponents} />
                  <Route exact path={ROUTES.TAG} component={TagPage} />
                  <Route exact path={ROUTES.BUTTON} component={ButtonPage} />
                </Content>
              </Header>
            </Layout>
          </AppStyleWrapper>
        </ThemeProvider>
      </Router>
    );
  }
}

App.propTypes = {
  currTheme: PropTypes.string.isRequired,
  sidebarCollapsed: PropTypes.bool.isRequired,
  switchTheme: PropTypes.func.isRequired,
};

App.defaultProps = {};

export default connect(
  state => ({
    sidebarCollapsed: state.app.sidebarCollapsed,
    currTheme: state.app.theme,
  }),
  { switchTheme },
)(hot(module)(App));

// TODO: Add hashing to webpack
// TODO: Investigate multiple css
