import './App.css';
import { Heading } from '@chakra-ui/react';
import Home from './pages/Home';
import Filter from './component/Filter';

function App() {
  return (
    <div className='App'>
      <div style={{ display: 'flex' }}>
        <Filter />
        <Home />
      </div>
    </div>
  );
}

export default App;
