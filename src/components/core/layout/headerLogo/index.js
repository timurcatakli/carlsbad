import React from 'react';
import logo from '@src/assets/img/splunk-phantom-logo.svg';
import { siteConfig } from '@src/settings/';
import StyleWrapper from './style';

const HeaderLogo = () => (
  <StyleWrapper>
    <img src={logo} alt={siteConfig.siteName} />
  </StyleWrapper>
);

export default HeaderLogo;
