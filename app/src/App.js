import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';

function App() {
  return (
    <Button sx={{
      color: 'var(--global-brks-core-color-grey-50)',
      backgroundColor: 'var(--global-brks-core-color-grey-900)'
    }}>Text</Button>
  );
}

export default App;
