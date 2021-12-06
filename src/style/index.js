import styled from '@emotion/styled';
import { css } from '@emotion/react';
export * from '@emotion/react';

export default styled;

export * from './common';

export const font = {
  kr: `'Noto Sans KR'`,
  krSf: `'Noto Serif KR'`,
  en: `'Jost'`,
};

export const color = {
  info: '#88E0EF',
  dark: '#161E54',
  danger: '#FF5151',
  secondary: '#FF9B6A',
  light: '#f7f7f7',
  black: '#222',
  lightBlack: '#353535',
  grey: '#555',
  success: '#34BE82',
  primary: '#396EB0',
};

export const size = {
  xxl: '1599px',
  xl: '1399px',
  lg: '1199px',
  md: '991px',
  sm: '767px',
  xs: '575px',
};

export const media = {
  xxl: ` screen and (max-width: ${size.xxl})`,
  xl: ` screen and (max-width: ${size.xl})`,
  lg: ` screen and (max-width: ${size.lg})`,
  md: ` screen and (max-width: ${size.md})`,
  sm: ` screen and (max-width: ${size.sm})`,
  xs: ` screen and (max-width: ${size.xs})`,
};

export const flex = ({ w = 'nowrap', h = 'flex-start', v = 'stretch' }) => {
  return css`
    display: flex;
    flex-wrap: ${w};
    justify-content: ${h};
    align-items: ${v};
  `;
};
