import { ICity } from '../api/api';
import { Line } from 'react-chartjs-2';
import { getAllMonths, getColor } from '../utils/utils';

interface IProps {
  cities: ICity[];
}

export default function AvgTemperaturesChart(props: IProps) {
  const { cities } = props;

  const chartData = {
    labels: getAllMonths(),
    datasets: cities.map((city, i) => ({
      id: i + 1,
      label: city.name,
      data: city.avgMonthlyCelciusTemperatures as number[],
      borderColor: getColor(i),
      backgroundColor: getColor(i),
    })),
  };

  return (
    <div className="chart">
      <Line
        datasetIdKey="avg_temp"
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Average monthly temperatures (°C)',
            },
          },
          scales: {
            y: {
              ticks: {
                callback: (temperature) => `${temperature} °C`,
              },
            },
          },
        }}
      />
    </div>
  );
}
