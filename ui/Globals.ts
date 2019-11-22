import { createGlobalStyle } from "styled-components";

interface ITheme {
  theme: {
    colors: any;
    palette: any;
    settings: any;
    toggleTheme: () => void;
  };
}

const GlobalStyle = createGlobalStyle<ITheme>`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.settings.font.primary};
    line-height: 1.5;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }

  ul:not([class]),
  ol:not([class]) {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration-skip-ink: auto;

    &:not([class]) {
      color: ${({ theme }) => theme.colors.link};
      text-decoration: none;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
