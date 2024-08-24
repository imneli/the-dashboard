import { BarChart } from '@tremor/react';

const chartdata = [
  {
    name: 'January',
    'Leisure': 890,
    'Bill': 338,
    'Investments': 538,
    'Pets': 396,
    'Restaurants': 138,
    'Group F': 436,
  },
  {
    name: 'February',
    'Leisure': 289,
    'Bill': 233,
    'Investments': 253,
    'Pets': 333,
    'Restaurants': 133,
    'Group F': 533,
  },
  {
    name: 'March',
    'Leisure': 380,
    'Bill': 535,
    'Investments': 352,
    'Pets': 718,
    'Restaurants': 539,
    'Group F': 234,
  },
  {
    name: 'April',
    'Leisure': 90,
    'Bill': 98,
    'Investments': 28,
    'Pets': 33,
    'Restaurants': 61,
    'Group F': 53,
  },
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat('us').format(number).toString();

export function BarChartExampleWithGroups() {
  return (
    <>
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Writing Contest: Entries
      </h3>
      <BarChart
        className="mt-6  max-w-[50vw]"
        data={chartdata}
        index="name"
        categories={[
          'Leisure',
          'Bill',
          'Investments',
          'Pets',
          'Restaurants',
          'Group F',
        ]}
        colors={['blue', 'teal', 'amber', 'rose', 'indigo', 'emerald']}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </>
  );
}