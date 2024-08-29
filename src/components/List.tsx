import { useState } from 'react';
import { RiCheckDoubleFill, RiDeleteBin6Line, RiEdit2Line, RiSave3Line } from '@remixicon/react';
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

interface Goal {
  id: number;
  name: string;
  progress: number;
  status: string;
  date: Date;
}

interface TableUseProps {
  goals: Goal[];
  updateGoal: (updatedGoal: Goal) => void;
  deleteGoal: (id: number) => void;
}

export function TableUse({ goals, updateGoal, deleteGoal }: TableUseProps) {
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleEdit = (goal: Goal) => {
    setEditingId(goal.id);
  };

  const handleSave = (goal: Goal) => {
    updateGoal(goal);
    setEditingId(null);
  };

  const handleChange = (id: number, field: keyof Goal, value: string | number | Date) => {
    const updatedGoal = goals.find(goal => goal.id === id);
    if (updatedGoal) {
      const newGoal = { ...updatedGoal, [field]: value };
      updateGoal(newGoal);
    }
  };

  return (
    <Card className="overflow-hidden">
      <h3 className="text-2xl font-bold mb-4 text-gray-800 ">Your Goals</h3>
      <Table className="mt-5">
        <TableHead>
          <TableRow className="bg-gray-100 ">
            <TableHeaderCell className="text-gray-700">Goals</TableHeaderCell>
            <TableHeaderCell className="text-gray-700">Date</TableHeaderCell>
            <TableHeaderCell className="text-gray-700">Progress</TableHeaderCell>
            <TableHeaderCell className="text-gray-700">Status</TableHeaderCell>
            <TableHeaderCell className="text-gray-700">Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {goals.map((goal) => (
            <TableRow key={goal.id} className="hover:bg-gray-50  transition-colors duration-200">
              <TableCell>
                {editingId === goal.id ? (
                  <input 
                    value={goal.name}
                    
                    onChange={(e) => handleChange(goal.id, 'name', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                ) : (
                  <span className="font-medium text-gray-800">{goal.name}</span>
                )}
              </TableCell>
              <TableCell>
                <DatePicker 
                  value={goal.date} 
                  onValueChange={(date) => date && handleChange(goal.id, 'date', date)}
                  disabled={editingId !== goal.id}
                  className="w-full"
                />
              </TableCell>
              <TableCell>
                <ProgressBar 
                  value={goal.progress} 
                  color="cyan" 
                  className="mt-2"
                />
                {editingId === goal.id && (
                  <input 
                    type="number" 
                    value={goal.progress} 
                    onChange={(e) => handleChange(goal.id, 'progress', parseInt(e.target.value, 10))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    min="0"
                    max="100"
                  />
                )}
              </TableCell>
              <TableCell>
                <Badge color="cyan" icon={RiCheckDoubleFill} className="text-sm">
                  {goal.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  {editingId === goal.id ? (
                    <button 
                      onClick={() => handleSave(goal)} 
                      className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200"
                    >
                      <RiSave3Line size={18} />
                    </button>
                  ) : (
                    <button 
                      onClick={() => handleEdit(goal)} 
                      className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200"
                    >
                      <RiEdit2Line size={18} />
                    </button>
                  )}
                  <button 
                    onClick={() => deleteGoal(goal.id)} 
                    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
                  >
                    <RiDeleteBin6Line size={18} />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}