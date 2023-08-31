// styles/theme.js
const modularScale = (
  scale,
  options = { start: 0.75, limit: 5 }
) => {
  const array = [options.start];

  for (let i = 0; i < options.limit; i += 1) {
    if (i > 0) {
      const result = array[i - 1] * scale;
      const roundedResult = Math.round(result * 1000) / 1000;
      array[i] = roundedResult;
    }
  }
  return array;
};

const scale = modularScale(
  1.285,
  {
    start: 0.8,
    limit: 20,
  }
);

const fontSizes = scale.map(size => `${size}rem`);
const margins = scale.map(size => `${size}rem`);

const sizes = {
  xl: 1900,
  lg: 1440,
  md: 1024,
  sm: 768,
  xs: 576,
};

const colors = {
  primary: '#000000',
  secondary: '#ffffff',
  volt: '#CEFF00',
  blue: '#e0e9ea',
  tan: '#edebe1',
  gray: '#b8b8b8',
};

const lineHeights = [1, 1.125, 1.25, 1.4, 1.75, 2];

const fontWeights = {
  bold: 700,
  normal: 300,
  semiBold: 500,
};

// styles/theme.js
export const theme = {
  fontSizes: scale.map(size => `${size}rem`),
  margins: scale.map(size => `${size}rem`),
  sizes: sizes,
  colors: colors,
  lineHeights: lineHeights,
  fontWeights: fontWeights,
};
