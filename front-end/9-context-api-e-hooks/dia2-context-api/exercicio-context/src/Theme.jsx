import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';

const Theme = () => {
  const Theme = useContext(ThemeContext);
  return (
    <div>
      <h1>Utilizando context</h1>
      <h2>Current theme: {Theme.color}</h2>
      <button onClick={Theme.toggleTheme}>Change Theme</button>
    </div>
  );
};

export default Theme;
