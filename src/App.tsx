import './App.css';
import { Chart, registerables } from 'chart.js';
import { getCities } from './api/api';
import MeanTemperatures from './components/MeanTemperatures';

export default function App() {
  Chart.register(...registerables);

  const cities = getCities();

  return (
    <div className="App">
      <MeanTemperatures cities={cities} />
    </div>
  );
}
