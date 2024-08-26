import { Card } from '@tremor/react';

export function CardTest() {
  return (
    <Card
      className="mx-auto mt-5 min-w-[15vw]"
      decoration="top"
      decorationColor="cyan"
    >
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Save</p>
      <p className="text-2xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$10,743</p>
    </Card>
  );
}