/**
 * needs to be const
 */
export interface IFixedLengthArray<L extends number, T> extends ArrayLike<T> {
  length: L;
}

export interface ICity {
  name: string;
  avgMonthlyCelciusTemperatures: IFixedLengthArray<12, number>;
}

export const getCities = (): ICity[] => [
  {
    name: 'Inland City',
    avgMonthlyCelciusTemperatures: [
      -12, -9, -3, 9, 18, 24, 29, 27, 17, 7, -1, -8,
    ] as const,
  },
  {
    name: 'Coastal City',
    avgMonthlyCelciusTemperatures: [
      7, 9, 12, 14, 17, 19, 21, 20, 18, 15, 10, 8,
    ] as const,
  },
];
