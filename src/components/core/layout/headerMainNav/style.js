import styled from 'styled-components';
import { key } from 'styled-theme';

const HeaderMainNavStyleWrapper = styled.div`
  background-color: ${key(['palette', 'background', 1])};
  color: ${key(['palette', 'text', 2])};
  height: 45px;
  padding: 0 20px;
`;

export default HeaderMainNavStyleWrapper;
