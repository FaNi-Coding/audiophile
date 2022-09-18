import { createGlobalStyle } from 'styled-components'

export const theme = {
  breakpoints: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  },
  colors: {
    header: '#0E0E0E',
    body: '#FAFAFA',
    footer: '#101010',

    primary: '#D87D4A',
    secondary: '#ffffff',
    tertiary: '#F1F1F1',
    outlined: 'transparent',
    primaryHovered: '#FBAF85',
    outlinedHovered: '#000000',

    error: '#CD2C2C',

    black: '#000000',
    white: '#ffffff',

    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
  },

  fonts: {
    bold: '700',
    medium: '500',
    regular: '400',
  },
}

export const GlobalStyles = createGlobalStyle`

body {
  background-color: ${({ theme }: any) => theme.colors.body};
  position: relative;
  text-transform: uppercase;
}

header {
  height: 9rem;
  width: 100%;
  background-color: ${({ theme }: any) => theme.colors.header};
  color: ${({ theme }: any) => theme.colors.white};
}

footer {
  background-color: ${({ theme }: any) => theme.colors.footer};
  color: ${({ theme }: any) => theme.colors.white};
}

section {
  width: min(100%, 1220rem);
  padding: 0 165rem;
}

h1 {
  font-size: 5.6rem;
  line-height: 5.8rem;
  letter-spacing: .2rem;

  ${({ theme }: any) => theme.fonts.bold};
}

h2 {
  font-size: 4rem;
  line-height: 4.4rem;
  letter-spacing: .15rem;

  ${({ theme }: any) => theme.fonts.bold}
}

h3 {
  font-size: 3.2rem;
  line-height: 3.6rem;
  letter-spacing: .115rem;

  ${({ theme }: any) => theme.fonts.bold};
}

h4 {
  font-size: 2.8rem;
  line-height: 3.8rem;
  letter-spacing: 2rem;

  ${({ theme }: any) => theme.fonts.bold};
}

h5 {
  font-size: 2.4rem;
  line-height: 3.3rem;
  letter-spacing: 1.7rem;

  ${({ theme }: any) => theme.fonts.regular};
}

h6 {
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: 1.3rem;

  ${({ theme }: any) => theme.fonts.bold};
}

p{ 
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: ${({ theme }: any) => theme.fonts.medium};
  
  &::first-letter {
    text-transform: capitalize;
  }
}

.overline {
  font-size: 1.4rem;
  line-height: 1.9rem;
  letter-spacing: 1rem;

}

.subTitle {
  margin-top: 3.2rem;
  font-size: 1.3rem;
  line-height: 2.5rem;
  letter-spacing: .1rem;
}

.copyright {
  font-size: 1.5rem;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.flex {
  display: flex;
}

.container {
  width: min(120rem, 100%);
  margin: 0 auto;
  padding: 0rem 1.6rem;
}
`
