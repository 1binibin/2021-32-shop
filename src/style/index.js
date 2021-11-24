import styled from '@emotion/styled';
import { css } from '@emotion/react';

export default styled;

export { css };

export const font = {
  noto: `'Noto Sans KR', sans-serif`,
  notoSf: `'Noto Serif KR', serif`,
};

export const color = {
  info: '#88E0EF',
  dark: '#161E54',
  danger: '#FF5151',
  secondary: '#FF9B6A',
  light: '#f7f7f7',
  black: '#222',
  success: '#34BE82',
  primary: '#396EB0',
};

export const size = {
  xl: '1339px',
  lg: '1199px',
  md: '991px',
  sm: '767px',
  xs: '575px',
};

export const media = {
  xl: `(max-width: ${size.xl})`,
  lg: `(max-width: ${size.lg})`,
  md: `(max-width: ${size.md})`,
  sm: `(max-width: ${size.sm})`,
  xs: `(max-width: ${size.xs})`,
};

export const flex = ({ w, h, v }) => {
  return css`
    display: flex;
    flex-wrap: ${w};
    justify-content: ${h};
    align-items: ${v};
  `;
};
