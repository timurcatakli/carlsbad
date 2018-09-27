import styled from 'styled-components';
import { key } from 'styled-theme';

const ButtonStyleWrapper = styled.div`
  .ant-btn-primary {
    background-color: #67c768;
    border-color: #67c768;
    height: 28px;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: smaller;
    line-height: 28px;
  }

  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    opacity: 0.8;
    background-color: #67c768;
    border-color: #67c768;
  }
`;

export default ButtonStyleWrapper;
