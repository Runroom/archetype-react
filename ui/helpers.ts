import { css } from 'styled-components';
import theme from '../config/theme';

const hover = (...args: any[]) => css`
  &:hover {
    html.non-touch & {
      ${css.call(null, ...args)};
    }
  }
`;

const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  if (hex[0] === '#') {
    hex = hex.substr(1);
  }
  if (hex.length === 3) {
    const hr = hex[0];
    const hg = hex[1];
    const hb = hex[2];

    return hexToRgb(`${hr}${hr}${hg}${hg}${hb}${hb}`);
  }

  const [r, g, b] = [0, 2, 4]
    .map(offset => hex.substring(offset, offset + 2))
    .map(hexCh => parseInt(hexCh, 16));

  return { r, g, b };
};

const rgbToHex = (r: number, g: number, b: number): string => {
  return [r, g, b]
    .map(decCh => Math.max(0, Math.min(255, decCh)).toString(16))
    .map(hexCh => (hexCh.length === 1 ? `0${hexCh}` : hexCh))
    .join('');
};

const bgGradient = (rotation: string, color1: string, color2: string) =>
  `linear-gradient(${rotation}, ${color1} 0%, ${color2} 100%)`;

const getRatio = (
  originalWidth: number,
  originalHeight: number,
  width: number = 0,
  height: number = 0
) => {
  let finalHeight;
  let finalWidth;

  if (width > 0) {
    finalHeight = Math.ceil((width / originalWidth) * originalHeight) + 'px';
    finalWidth = `${width}px`;
  } else {
    finalHeight = `${height}px`;
    finalWidth = Math.ceil((height / originalHeight) * originalWidth) + 'px';
  }
  return `
    height: ${finalHeight};
    width: ${finalWidth};
  `;
};

/**
 * Modular Scale
 * Returns the modular scale size in rems
 * https://www.modularscale.com/?1&em&1.067
 *
 * @param {integer} n — Exponencial value
 */
const ms = (n: number) => `${Math.pow(theme.font.ratio, n) || 1}rem`;

/**
 * Rems
 * Transforms pixels into rems based in the base-font-size set in the theme
 * file
 *
 * @param {integer|string} n — Number to transform
 */
const rems = (n: any) => `${parseInt(n, 10) / theme.font.min}rem`;
const maxrems = (n: any) => `${parseInt(n, 10) / theme.font.max}rem`;

const pixelate = (n: any) => `${n}px`;

/**
 * Space
 * Vertical and Horizontal Rhythm generator based on the base-line-height set in
 * the theme file
 *
 * @param {float} n — Multiplier, can accept decimal numbers
 */
const space = (n: number = 1) => `${theme.font.lineHeight * n}rem`;

const getSizeFromBreakpoint = (value: any, max: boolean = false) => {
  let mq;
  if (theme.breakpoint[value]) {
    mq = max ? theme.breakpoint[value] - 1 : theme.breakpoint[value];
    // tslint:disable-next-line:radix
  } else if (parseInt(value)) {
    mq = max ? value - 1 : value;
  } else {
    // tslint:disable-next-line:no-console
    console.error('No valid breakpoint or size specified for media.');
  }
  return mq ? pixelate(mq) : '0';
};

const generateMedia = () => {
  const max = (breakpoint: any) => (...args: any[]) => css`
    @media (max-width: ${getSizeFromBreakpoint(breakpoint, true)}) {
      ${css.call(null, ...args)};
    }
  `;

  const min = (breakpoint: any) => (...args: any[]) => css`
    @media (min-width: ${getSizeFromBreakpoint(breakpoint)}) {
      ${css.call(null, ...args)};
    }
  `;

  const between = (firstBreakpoint: any, secondBreakpoint: any) => (
    ...args: any[]
  ) => css`
    @media (min-width: ${getSizeFromBreakpoint(
        firstBreakpoint
      )}) and (max-width: ${getSizeFromBreakpoint(secondBreakpoint, true)}) {
      ${css.call(null, ...args)};
    }
  `;

  return {
    between,
    max,
    min
  };
};

const media = generateMedia();

export {
  bgGradient,
  getRatio,
  hexToRgb,
  hover,
  media,
  maxrems,
  ms,
  pixelate,
  rems,
  rgbToHex,
  space
};
