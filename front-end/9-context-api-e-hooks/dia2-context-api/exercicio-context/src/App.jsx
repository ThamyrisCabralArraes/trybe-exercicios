import './App.css';
import InputComUse from './InputComUse';
import Input from './Inputs';
import Theme from './Theme';
import ThemeProvider from './context/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <div>
        <Input />
        <Theme />
        <InputComUse />
      </div>
    </ThemeProvider>
  );
}

export default App;
