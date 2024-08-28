import { Card } from '@tremor/react';


const data = [
  {
      item: 'Save',
      price: "$10,523",
      colors: "cyan"
  },
  {
      item: 'Need',
      price: "$2,700",
      colors: "cyan"
  },
  {
      item: 'Investments',
      price: "$23,000",
      colors: "amber"
  },
  
]

export function CardTest() {
  return (
    <>
      {data.map((item, index) => (
        <Card decoration="top" decorationColor={item.colors} key={index} className="mx-auto mt-5 min-w-[15vw]">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            {item.item}
          </p>
          <p className="text-2xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            {item.price}
          </p>
        </Card>
      ))}
    </>
  );
}