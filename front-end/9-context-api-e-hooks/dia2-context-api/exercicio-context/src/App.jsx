import './App.css';
import Input from './Inputs';
import Theme from './Theme';
import ThemeProvider from './context/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div>
        <Input />
        <Theme />
      </div>
    </ThemeProvider>
  );
}

export default App;
