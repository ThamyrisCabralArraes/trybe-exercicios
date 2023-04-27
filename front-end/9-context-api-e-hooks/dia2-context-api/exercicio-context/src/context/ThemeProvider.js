import { useState } from 'react';
import PropTypes from 'prop-types';

import ThemeContext from './ThemeContext';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('Dark');

  const toggleTheme = () => {
    setTheme(theme === 'Dark' ? 'Light' : 'Dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
