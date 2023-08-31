const sizes = {
  xl: 1900,
  lg: 1440,
  md: 1024,
  sm: 768,
  xs: 576,
}

const modularScale = (
  scale,
  options = { start: 0.75, limit: 5 }
) => {
  const array = [options.start]

  for (let i = 0; i < options.limit; i += 1) {
    if (i > 0) {
      const result = array[i - 1] * scale
      const roundedResult = Math.round(result * 1000) / 1000
      array[i] = roundedResult
    }
  }
  return array
}

export default modularScale


const scale = modularScale(
  1.285, // 1.3333
  {
    start: 0.8, //
    limit: 20,
  }
)

const colors = {
  primary: '#000000',
  secondary: '#ffffff',
  volt: '#CEFF00',
  blue: '#e0e9ea',
  tan: '#edebe1',
  gray: '#b8b8b8',
}

const lineHeights = [1, 1.125, 1.25, 1.4, 1.75, 2]

const fontWeights = {
  bold: 700,
  normal: 400,
  semiBold: 500,
}

const fontSizes = scale.map(size => `${size}rem`)
const margins = scale.map(size => `${size}rem`)


const SET_SIZE = 2
const large = ({ lines, large: largeText }) => css`
  font-size: ${props =>
    props.theme.fontSizes[largeText ? 4 : SET_SIZE]};

  @media (min-width: ${sizes.md}px) {
    font-size: ${props =>
      props.theme.fontSizes[largeText ? 5 : SET_SIZE]};
  }

  @media (min-width: ${sizes.xl}px) {
    font-size: ${props =>
      props.theme.fontSizes[largeText ? 6 : SET_SIZE]};
  }

  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights[2]};
  color: ${props => props.theme.colors.primary};
  text-transform: ${props => !props.lowercase && 'uppercase'};
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
          ${props => props.theme.colors.primary} 1px,
          transparent -1px
        );
      }
    `}
`

export const H1 = styled.h1`
  ${props => large({ lines: props.lines, large: props.large })}
`
export const H2 = styled.h2`
  ${props => large({ lines: props.lines, large: props.large })}
`
export const H3 = styled.h3`
  ${props => large({ lines: props.lines, large: props.large })}
`
export const H4 = styled.h4`
  ${props => large({ lines: props.lines, large: props.large })}
`

export const P = styled.p`
  margin: ${props => props.theme.margins[0]} 0;
  line-height: ${props => props.theme.lineHeights[3]};