import React from 'react';
import { SparkAreaExample } from "../../components/CardsInvests";
import { BarChartOnValueChangeExample } from "../../components/ChartGraph";
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-react';

interface TransactionRowProps {
  date: string;
  name: string;
  amount: string;
  status: 'Completed' | 'Pending';
}

const TransactionRow: React.FC<TransactionRowProps> = ({ date, name, amount, status }) => (
  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
    <td className="py-3 px-4">{date}</td>
    <td className="py-3 px-4">{name}</td>
    <td className="py-3 px-4">{amount}</td>
    <td className="py-3 px-4">
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
        {status}
      </span>
    </td>
  </tr>
);

interface PerformanceMetricProps {
  label: string;
  value: string;
  change: number;
  icon: React.ElementType;
}

const PerformanceMetric: React.FC<PerformanceMetricProps> = ({ label, value, change, icon: Icon }) => (
  <div className="bg-white rounded-xl p-4 shadow-md">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-medium text-gray-500">{label}</span>
      <Icon className="h-5 w-5 text-indigo-500" />
    </div>
    <div className="flex items-end justify-between">
      <span className="text-2xl font-bold text-gray-700">{value}</span>
      <span className={`text-sm flex items-center ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change >= 0 ? <ArrowUpRight className="mr-1 h-4 w-4" /> : <ArrowDownRight className="mr-1 h-4 w-4" />}
        {Math.abs(change)}%
      </span>
    </div>
  </div>
);

function Graph() {
  return (
    <div className='flex justify-center relative w-full bg-gray-50'>
      <section className="min-h-screen w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Financial Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">An overview of your financial performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <PerformanceMetric label="Total Revenue" value="$54,230" change={8.4} icon={DollarSign} />
          <PerformanceMetric label="Active Users" value="2,345" change={-3.2} icon={Users} />
          <PerformanceMetric label="Sales" value="1,456" change={5.9} icon={ShoppingCart} />
          <PerformanceMetric label="Conversion Rate" value="3.6%" change={0.8} icon={TrendingUp} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Revenue Overview</h3>
            <div className="h-80">
              <BarChartOnValueChangeExample />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Sales Trend</h3>
            <div className="h-80">
              <SparkAreaExample />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg overflow-hidden">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Recent Transactions</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">Amount</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <TransactionRow date="2024-09-01" name="John Doe" amount="$1,234.56" status="Completed" />
                  <TransactionRow date="2024-09-02" name="Jane Smith" amount="$987.65" status="Pending" />
                  <TransactionRow date="2024-09-03" name="Bob Johnson" amount="$543.21" status="Completed" />
                  <TransactionRow date="2024-09-04" name="Alice Brown" amount="$789.01" status="Completed" />
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Performance Overview</h3>
            <div className="space-y-4">
              <PerformanceMetric label="Average Order Value" value="$125.40" change={-2.3} icon={DollarSign} />
              <PerformanceMetric label="Customer Retention" value="78%" change={5.1} icon={Users} />
              <PerformanceMetric label="Net Promoter Score" value="72" change={3.0} icon={TrendingUp} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Graph;