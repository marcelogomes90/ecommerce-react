import { Input } from 'antd';
import styled from 'styled-components';

export const StyledInputNumber = styled(Input)`
  text-align: center;
  width: 80px;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  & {
      -moz-appearance: textfield;
  }
`;

export const spaceContainer = {
  marginTop: 50,
  marginBottom: 50,
  justifyContent: 'center',
  width: '100%',
};
