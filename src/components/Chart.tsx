import { BarChart } from '@tremor/react';


const chartdata = [
  {
    name: 'January',
    'Leisure': 890,
    'Bill': 338,
    'Investments': 538,
    'Pets': 396,
    'Restaurants': 138,
  },
  {
    name: 'February',
    'Leisure': 289,
    'Bill': 233,
    'Investments': 253,
    'Pets': 333,
    'Restaurants': 133,
  },
  {
    name: 'March',
    'Leisure': 380,
    'Bill': 535,
    'Investments': 352,
    'Pets': 718,
    'Restaurants': 539,
  },
  {
    name: 'April',
    'Leisure': 90,
    'Bill': 98,
    'Investments': 28,
    'Pets': 33,
    'Restaurants': 61,
  },
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat('us').format(number).toString();

export function BarChartExampleWithGroups() {
  return (
    <>
      <BarChart
        className="mt-6 max-w-[60vw] rounded-sm"
        data={chartdata}
        index="name"
        categories={[
          'Leisure',
          'Bill',
          'Investments',
          'Pets',
          'Restaurants',
                  ]}
        colors={['blue', 'teal', 'amber', 'cyan', 'sky', 'emerald']}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </>
  );
}