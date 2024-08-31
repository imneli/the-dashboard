import { useState } from 'react'
import CardsGoals from "../../components/Cards/CardsGoals"
import { TableUse } from "../../components/List"
import AddGoalForm from "../../components/AddGoalForm"

interface Goal {
  id: number;
  name: string;
  progress: number;
  status: string;
  date: Date;
}

interface NewGoal {
  name: string;
  progress: number;
  status: string;
  date: Date;
}

function Goals() {
    const [goals, setGoals] = useState<Goal[]>([
        { id: 1, name: 'Travel', progress: 20, status: 'active', date: new Date() },
        { id: 2, name: 'Home', progress: 30, status: 'active', date: new Date() },
        { id: 3, name: 'Car', progress: 70, status: 'active', date: new Date() },
    ]);
    const [isAddingGoal, setIsAddingGoal] = useState<boolean>(false);

    const addGoal = (newGoal: NewGoal) => {
        setGoals([...goals, { ...newGoal, id: goals.length + 1 }]);
        setIsAddingGoal(false);
    };

    const updateGoal = (updatedGoal: Goal) => {
        setGoals(goals.map(goal => goal.id === updatedGoal.id ? updatedGoal : goal));
    };

    const deleteGoal = (id: number) => {
        setGoals(goals.filter(goal => goal.id !== id));
    };

    return(
        <div className='flex justify-center relative'>
            <section className="min-h-screen flex justify-center items-center relative-bg">
                <div className="bg-white min-h-[40vw] min-w-[80vw] rounded-xl p-5 shadow-2xl">
                    <CardsGoals />
                    <div className="flex justify-between mt-4 mb-4">
                        <h2 className="text-2xl font-bold">Your Goals</h2>
                        <button 
                            onClick={() => setIsAddingGoal(true)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Add New Goal
                        </button>
                    </div>
                    {isAddingGoal && <AddGoalForm addGoal={addGoal} cancelAdd={() => setIsAddingGoal(false)} />}
                    <TableUse goals={goals} updateGoal={updateGoal} deleteGoal={deleteGoal} />
                </div>
            </section>
        </div>
    )
}

export default Goals