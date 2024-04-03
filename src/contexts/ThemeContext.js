import React, { Component, createContext } from "react";
import { LanguageContext } from "./LanguageContext";

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { isDarkMode: true };
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleTheme() {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export const withLanguageContext = Component => props => (
    <LanguageContext class="Consumer">
        {value => <Component languageContext={value} {...props} />}
    </LanguageContext>
)
