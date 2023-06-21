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

export const containerStyle = {
  justifyContent: 'center',
  width: '100%',
  marginTop: 100,
  marginBottom: 60,
  height: 600,
};

export const infosContainer = {
  width: 500,
};

export const titleStyle = {
  marginBottom: 12,
  marginTop: 0,
};

export const ratingContainer = {
  marginBottom: 10,
};

export const ratingStyle = {
  fontSize: 14,
};

export const priceStyle = {
  fontSize: 24,
};

export const inputContainer = {
  marginTop: 6,
};

export const buttonsContainer = {
  marginTop: 12,
};
