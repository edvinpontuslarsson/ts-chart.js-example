/**
 * needs to be const
 */
export interface IFixedLengthArray<L extends number, T> extends ArrayLike<T> {
  length: L;
}

export interface ICity {
  name: string;
  meanTemperatures: IFixedLengthArray<12, number>;
}

export const getCities = (): ICity[] => [
  {
    name: 'Toronto',
    meanTemperatures: [
      -3.7, -2.6, 1.4, 7.9, 14.1, 19.4, 22.3, 21.5, 17.2, 10.7, 4.9, -0.5,
    ] as const,
  },
  {
    name: 'Edinburgh',
    meanTemperatures: [
      4.2, 4.5, 6.2, 8.1, 10.8, 13.5, 15.3, 15.2, 13.0, 9.8, 6.7, 4.2,
    ] as const,
  },
];
