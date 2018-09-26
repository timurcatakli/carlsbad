import styled from 'styled-components';
import { key } from 'styled-theme';

const HeaderLogoStyleWrapper = styled.div`
  background-color: ${key(['palette', 'background', 0])};
  color: ${key(['palette', 'text', 2])};
  height: 45px;
  line-height: 45px;
  padding: 0 20px;
`;

export default HeaderLogoStyleWrapper;
