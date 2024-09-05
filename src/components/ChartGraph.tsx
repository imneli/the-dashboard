"use client"

import React from "react"

import { BarChart } from "@tremor/react"

const chartdata = [
  {
    name: "Apple",
    "Invests": 2488,
  },
  {
    name: "Google",
    "Invests": 1445,
  },
  {
    name: "Itau",
    "Invests": 743,
  },
  {
    name: "Microsoft",
    "Invests": 281,
  },
  {
    name: "IBM",
    "Invests": 251,
  },
  {
    name: "Heinz",
    "Invests": 232,
  },
  {
    name: "Mercedes",
    "Invests": 98,
  },
]

export const BarChartOnValueChangeExample = () => {
  const [value, setValue] = React.useState(null)
  return (
    <>
      <BarChart
        className="max-h-[35vh] max-w-[55vw]"
        data={chartdata}
        index="name"
        categories={["Invests"]}
        yAxisWidth={45}
        onValueChange={() => setValue(value)}
      />
    </>
  )
}