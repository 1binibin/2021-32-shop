import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

export const Container = styled.div`
  max-width: 1632px;
  padding: 0 1em;
  margin: auto;
`;

export const SmallContainer = styled(Container)`
  max-width: 1232px;
`;

export const Underline = styled.div`
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.color};
    transition: all 0.5s;
    transform: scaleX(0);
    transform-origin: left center;
  }
  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`;

export const AnimationWrapper = styled.div`
  animation-name: ${keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  },
  to {
    opacity: 1;
    transform: translateY(0);
  }
`};
  animation-duration: 0.35s;
  animation-fill-mode: forwards;
`;
