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
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null);

  const handleEdit = (goal: Goal) => {
    setEditingId(goal.id);
    setEditingGoal({ ...goal });
  };

  const handleSave = () => {
    if (editingGoal) {
      updateGoal(editingGoal);
      setEditingId(null);
      setEditingGoal(null);
    }
  };

  const handleChange = (field: keyof Goal, value: string | number | Date) => {
    if (editingGoal) {
      if (field === 'progress') {
        const progressValue = Math.min(Math.max(0, Number(value)), 100);
        setEditingGoal({ ...editingGoal, [field]: progressValue });
      } else {
        setEditingGoal({ ...editingGoal, [field]: value });
      }
    }
  };

  const handleComplete = (goal: Goal) => {
    const completedGoal = { ...goal, progress: 100, status: 'Completed' };
    updateGoal(completedGoal);
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
                    value={editingGoal?.name || ''}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                ) : (
                  <span className="font-medium text-gray-800">{goal.name}</span>
                )}
              </TableCell>
              <TableCell>
                <DatePicker 
                  value={editingId === goal.id ? editingGoal?.date : goal.date} 
                  onValueChange={(date) => date && handleChange('date', date)}
                  disabled={editingId !== goal.id}
                  className="w-full"
                />
              </TableCell>
              <TableCell>
                <ProgressBar 
                  value={editingId === goal.id ? editingGoal?.progress || 0 : goal.progress} 
                  color="cyan" 
                  className="mt-2"
                />
                {editingId === goal.id && (
                  <input 
                    type="number" 
                    value={editingGoal?.progress || 0} 
                    onChange={(e) => handleChange('progress', parseInt(e.target.value, 10))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    min="0"
                    max="100"
                  />
                )}
              </TableCell>
              <TableCell>
                <Badge color={goal.progress === 100 ? "green" : "cyan"} icon={RiCheckDoubleFill} className="text-sm">
                  {goal.progress === 100 ? 'Completed' : goal.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  {editingId === goal.id ? (
                    <button 
                      onClick={handleSave} 
                      className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200"
                    >
                      <RiSave3Line size={18} />
                    </button>
                  ) : goal.progress === 100 ? (
                    <button 
                      onClick={() => handleComplete(goal)}
                      className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200"
                    >
                      <RiCheckDoubleFill size={18} />
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