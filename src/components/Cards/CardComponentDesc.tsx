import { Card, Divider } from '@tremor/react';

const data = [
    {
        item: 'Notebook',
        description: "Lorem ipsum dolor sit amet.",
        price: "$700"
    },
    {
        item: 'Cellphone',
        description: "Lorem ipsum dolor sit amet.",
        price: "$500"
    },
    {
        item: 'Monitor',
        description: "Lorem ipsum dolor sit amet.",
        price: "$300"
    },
    {
        item: 'Mouse',
        description: "Lorem ipsum dolor sit amet.",
        price: "$40"
    },
]

export function CardDesc() {
  return (
    <div className="flex gap-4">
      {data.map((item, index) => (
        <Card decoration="left" decorationColor="cyan" key={index} className="min-h-[12vh] max-w-[20vw]">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            {item.item}
          </p>
          <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            {item.price}
          </p>
          <Divider>Description</Divider>
          <p className="mt-2 leading- text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            {item.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
