import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}

*:focus{
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
`;

const ThemeProps = {
  colors: {
    header: 'rgba(217, 30, 24, 1)',
  },
};

export default function Global({ children }) {
  return (
    <ThemeProvider theme={ThemeProps}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
}

Global.propTypes = {
  children: PropTypes.element.isRequired,
};
