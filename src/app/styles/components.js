"use client"
import styled, { css } from 'styled-components';
import {theme} from "../styles/theme"
import { sizes } from '../styles/theme'


const SET_SIZE = 2;

export const large = ({ lines, large: largeText, lowercase }) => css`
  font-size: ${theme.fontSizes[largeText ? 5 : SET_SIZE]};

  @media (min-width: ${theme.sizes.md}px) {
    font-size: ${theme.fontSizes[largeText ? 6 : SET_SIZE]};
  }

  @media (min-width: ${theme.sizes.xl}px) {
    font-size: ${theme.fontSizes[largeText ? 7 : SET_SIZE]};
  }

  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights[2]};
  color: ${theme.colors.primary};
//   text-transform: ${!lowercase && 'uppercase'};
  text-transform: uppercase;
  position: relative;

  ${lines &&
    css`
      padding: 0 0.33rem;

      &:after {
        content: '';
        position: absolute;
        top: -1px;
        left: 0;
        width: 100%;
        height: calc(100% - 2px);
        background-size: 1px 1.25em;
        background-image: linear-gradient(
          to bottom,
          ${theme.colors.primary} 1px,
          transparent -1px
        );
      }
    `}
`;

export const H1 = styled.h1`
  ${large({ lines: props => props.lines, large: props => props.large, lowercase: props => props.lowercase })}
`;

export const H2 = styled.h2`
  ${large({ lines: props => props.lines, large: props => props.large, lowercase: props => props.lowercase })}
`;

export const H3 = styled.h3`
  ${large({ lines: props => props.lines, large: props => props.large, lowercase: props => props.lowercase })}
`;

export const H4 = styled.h4`
  ${large({ lines: props => props.lines, large: props => props.large, lowercase: props => props.lowercase })}
`;

export const P = styled.p`
  margin: ${theme.margins[0]} 0;
  line-height: ${theme.lineHeights[3]};
`;