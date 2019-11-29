import styled, { css, keyframes } from 'styled-components';
import { pixelate } from '../../ui/helpers';

const DOT_RATIO = 12; // 6n
const DOT_POSITION = DOT_RATIO / 2;
const OFFSET_XY_START_RATIO = 0.05556;
const OFFSET_XY_END_RATIO = 0.02778;
const BLUR_START_RATIO = 0.08333;
const BLUR_END_RATIO = 0.41667;
const SPREAD_START_RATIO = 0.05556;
const SPREAD_END_RATIO = 0;

const jump = position => keyframes`
  0%, ${position} {
    box-shadow:
      ${pixelate(DOT_RATIO * OFFSET_XY_START_RATIO)}
      ${pixelate(DOT_RATIO * OFFSET_XY_START_RATIO)}
      ${pixelate(DOT_RATIO * BLUR_START_RATIO)}
      ${pixelate(DOT_RATIO * SPREAD_START_RATIO)}
      rgba(0, 0, 0, 0.2);
    transform: scale(0);
  }
  100% {
    box-shadow:
      ${pixelate(DOT_RATIO * OFFSET_XY_END_RATIO)}
      ${pixelate(DOT_RATIO * OFFSET_XY_END_RATIO)}
      ${pixelate(DOT_RATIO * BLUR_END_RATIO)}
      ${pixelate(DOT_RATIO * SPREAD_END_RATIO)}
      rgba(0, 0, 0, 0.3);
    transform: scale(1);
  }
`;

const commonDotStyle = (
  size = 1,
  position = 1,
  zIndex,
  animationPosition
) => css`
  animation: ${jump(animationPosition)} 2s cubic-bezier(0.21, 0.98, 0.6, 0.99)
    infinite alternate;
  height: ${pixelate(DOT_RATIO * size)};
  left: ${pixelate(DOT_POSITION * position)};
  top: ${pixelate(DOT_POSITION * position)};
  width: ${pixelate(DOT_RATIO * size)};
  z-index: ${zIndex};
`;

const Dots = styled.div`
  position: relative;
`;

const Dot = styled.div<{ type: string }>`
  animation-fill-mode: both;
  background: ${({ theme }) => theme.colors.loading};
  border-radius: 50%;
  position: absolute;
  ${props => props.type === 'top' && commonDotStyle(1, 2, 3, '70%')}
  ${props => props.type === 'middle' && commonDotStyle(2, 1, 2, '40%')}
  ${props => props.type === 'bottom' && commonDotStyle(3, 0, 1, '10%')}
`;

export { Dots, Dot };
