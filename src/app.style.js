import styled from 'styled-components';
import { key } from 'styled-theme';

const AppStyleWrapper = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li {
    color: ${key(['palette', 'text', 2])};
    font-weight: : 100;
  }

  .ant-row:not(.ant-form-item) {
    ${'' /* margin-left: -8px;
    margin-right: -8px; */};
    &:before,
    &:after {
      display: none;
    }
  }

  .ant-row > div {
    padding: 0;
  }

  .ant-layout-header {
    padding: 0;
  }

  .appLayout {
    background-color: ${key(['palette', 'background', 0])};
    min-height: 100vh;
  }

  .appContent {
    color: ${key(['palette', 'text', 2])};
    min-height: 100vh;
    line-height: 24px;
    padding: 40px 20px;
  }

  .appHeader {
    padding: 100;
  }
`;

export default AppStyleWrapper;
