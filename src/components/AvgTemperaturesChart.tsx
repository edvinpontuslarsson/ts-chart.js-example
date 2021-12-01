import { ICity } from '../api/api';
import { Line } from 'react-chartjs-2';

interface IProps {
  cities: ICity[];
}

export default function AvgTemperaturesChart(props: IProps) {
  const { cities } = props;

  const colors = [
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(255, 99, 132, 0.6)',
  ];

  const getColor = (i: number) => {
    if (i > colors.length - 1) return 'rgb(0, 0, 0)';
    return colors[i];
  };

  const chartData = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
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
        }}
      />
    </div>
  );
}
