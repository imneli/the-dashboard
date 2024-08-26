import { RiCheckDoubleFill } from '@remixicon/react';
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  DatePicker,
  ProgressBar

} from '@tremor/react';


const data = [
  {
    name: 'Travel',
    progress: 20,
    status: 'active',
  },
  {
    name: 'Home',
    progress: 30,
    status: 'active',
  },
  {
    name: 'Car',
    progress: 70,
    status: 'active',
  },
  {
    name: 'Other Stuff',
    progress: 90,
    status: 'active',
  },
];

export function TableUse() {
  return (
    <Card>
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">List of Goals</h3>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Goals</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Progress</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <DateRangePickerHero/>
              </TableCell>
              <TableCell>
                <ProgressBar value={item.progress} color="cyan" className="mt-3" />
              </TableCell>
              <TableCell>
                <Badge color="cyan" icon={RiCheckDoubleFill}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export function DateRangePickerHero() {
  return (
      <DatePicker className='' />
  );
}