import React, { useState } from 'react';
import { DatePicker } from '@tremor/react';

interface NewGoal {
  name: string;
  progress: number;
  status: string;
  date: Date;
}

interface AddGoalFormProps {
  addGoal: (goal: NewGoal) => void;
  cancelAdd: () => void;
}

function AddGoalForm({ addGoal, cancelAdd }: AddGoalFormProps) {
  const [newGoal, setNewGoal] = useState<NewGoal>({
    name: '',
    progress: 0,
    status: 'active',
    date: new Date(),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addGoal(newGoal);
  };

  const handleChange = (field: keyof NewGoal, value: string | number | Date) => {
    setNewGoal(prevGoal => ({ ...prevGoal, [field]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <form onSubmit={handleSubmit} className="min-w-[80vh] min-h-[60vh] mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-gradient-to-r from-teal-300 to-blue-500">
          <h2 className="text-2xl font-bold text-white">Add New Goal</h2>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label htmlFor="goalName" className="block text-sm font-medium text-gray-700 mb-1">Goal Name</label>
            <input
              id="goalName"
              type="text"
              value={newGoal.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('name', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="progress" className="block text-sm font-medium text-gray-700 mb-1">Progress</label>
            <input
              id="progress"
              type="number"
              value={newGoal.progress}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('progress', parseInt(e.target.value, 10))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              min="0"
              max="100"
              required
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <DatePicker
              id="date"
              value={newGoal.date}
              onValueChange={(date: Date | undefined) => date && handleChange('date', date)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-3">
          <button
            type="button"
            onClick={cancelAdd}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Add Goal
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddGoalForm;
