import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import BarChart from './components/barras';
import ColumnChart from './components/colunas';
import LineChart from './components/linhas';
import PieChart from './components/pizza';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PieChart />
    </>
  );
}

export default App;
