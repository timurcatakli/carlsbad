import styled from 'styled-components';
import { key } from 'styled-theme';

const AppStyleWrapper = styled.div`
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
