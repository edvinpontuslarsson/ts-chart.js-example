const borderColors = [
  'rgba(255, 99, 132, 0.6)',
  'rgba(54, 162, 235, 0.6)',
  'rgba(255, 206, 86, 0.6)',
  'rgba(75, 192, 192, 0.6)',
  'rgba(153, 102, 255, 0.6)',
  'rgba(255, 159, 64, 0.6)',
  'rgba(255, 99, 132, 0.6)',
];

const bgColors = [
  '#ff6384',
  '#36a2eb',
  '#ffce56',
  '#4bc0c0',
  '#9966ff',
  '#ff9f40',
  '#ff6384',
];

export const getBorderColor = (i: number) => {
  if (i > borderColors.length - 1) return 'rgb(0, 0, 0)';
  return borderColors[i];
};

export const getBackgroundColor = (i: number) => {
  if (i > bgColors.length - 1) return 'rgb(0, 0, 0)';
  return bgColors[i];
};

export const getAllMonths = () => [
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
];
