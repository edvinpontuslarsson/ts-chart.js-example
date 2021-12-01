import { getCities } from './api/api';
import AvgTemperaturesChart from './components/AvgTemperaturesChart';

export default function App() {
  const cities = getCities();

  return (
    <div className="App">
      <AvgTemperaturesChart cities={cities} />
    </div>
  );
}
