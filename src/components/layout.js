/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import "../common/layout.css";
import Footer from "./footer";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from "../common/themes";

// const defaultContextData = {
//   dark: false,
//   toggle: () => {}
// }
// const ThemeContext = React.createContext(defaultContextData);
// export const useTheme = () => React.useContext(ThemeContext);

// const useEffectDarkMode = () => {
//   const [themeState, setThemeState ] = React.useState({
//     dark: false,
//     hasThemeLoaded: false
//   });
//   React.useEffect(() => {
//     const lsDark = localStorage.getItem("dark") === "true";
//     setThemeState({ ...themeState, dark: lsDark, hasThemeLoaded: true })
//   }, []);
//   return [ themeState, setThemeState ];
// }

const Layout = ({ children }) => {
  // const [themeState, setThemeState ] = useEffectDarkMode();
  // if(!themeState.hasThemeLoaded) {
  //   return <div/>;
  // }
  // const toggle = () => {
  //   const dark = !themeState.dark;
  //   localStorage.setItem("dark", JSON.stringify(dark));
  //   setThemeState({...themeState, dark});
  // }

  // const computedTheme = themeState.dark ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={lightTheme}>
      {/* <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggle
        }}
      > */}
        <Header/>
          <main>{children}</main>
        <Footer/>
      {/* </ThemeContext.Provider> */}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
