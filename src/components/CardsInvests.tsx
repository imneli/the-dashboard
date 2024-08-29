"use client"

import { Card } from "@tremor/react"
import { SparkAreaChart } from "@tremor/react"

const chartdata = [
  { name: "Apple Inc", symbol: "AAPL", month: "Jan 21", Performance: 4000, price: 179.26, change: "+1.72%" },
  { name: "Google", symbol: "GOOGL", month: "Feb 21", Performance: 3000, price: 138.21, change: "+0.54%" },
  { name: "Itau", symbol: "ITUB", month: "Mar 21", Performance: 2000, price: 5.80, change: "-0.17%" },
  { name: "Microsoft", symbol: "MSFT", month: "Apr 21", Performance: 2780, price: 417.42, change: "+2.35%" },
]

export function SparkAreaExample() {
  return (
    <div className="flex flex-col gap-4">
      {chartdata.map((item, index) => (
        <Card key={index} className="flex flex-col min-w-[30vh] ">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-700 dark:text-gray-300">{item.symbol}</p>
              <span className="text-sm text-gray-500 dark:text-gray-500">{item.name}</span>
            </div>
            <div className="text-right">
              <span className="font-medium text-gray-700 dark:text-gray-300">{item.price}</span>
              <span className={`ml-2 rounded px-2 py-1 text-sm font-medium text-white ${item.change.startsWith('+') ? 'bg-emerald-500' : 'bg-red-500'}`}>
                {item.change}
              </span>
            </div>
          </div>
          <SparkAreaChart
            data={chartdata}
            index="month"
            categories={["Performance"]}
            colors={["emerald"]}
            className="h-16 w-full"
          />
        </Card>
      ))}
    </div>
  )
}