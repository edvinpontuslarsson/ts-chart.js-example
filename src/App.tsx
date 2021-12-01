import './App.css';
import { Chart, registerables } from 'chart.js';
import { getCities } from './api/api';
import AvgTemperaturesChart from './components/AvgTemperaturesChart';

export default function App() {
  Chart.register(...registerables);

  const cities = getCities();

  return (
    <div className="App">
      <AvgTemperaturesChart cities={cities} />
    </div>
  );
}
