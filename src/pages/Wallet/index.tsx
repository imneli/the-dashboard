import React, { useState, useEffect } from "react";
import { Button, TextInput, NumberInput, Select, SelectItem } from '@tremor/react';
import { RiSearch2Line } from "@remixicon/react";
import { BadgeMinus } from "../../components/Badges/BadgeFalse";
import { BadgePlus } from "../../components/Badges/BadgeTrue";
import { X, Trash2 } from "lucide-react";

interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: string;
}

function Wallet() {
    const [showForm, setShowForm] = useState<boolean>(false);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        const storedTransactions = sessionStorage.getItem('transactions');
        if (storedTransactions) {
            setTransactions(JSON.parse(storedTransactions));
        }
    }, []);

    const handleButtonClick = () => {
        setShowForm(prev => !prev);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const addTransaction = (newTransaction: Omit<Transaction, 'id'>) => {
        const transactionWithId = { ...newTransaction, id: Date.now().toString() };
        const updatedTransactions = [...transactions, transactionWithId];
        setTransactions(updatedTransactions);
        sessionStorage.setItem('transactions', JSON.stringify(updatedTransactions));
        setShowForm(false);
    };

    const deleteTransaction = (id: string) => {
        const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
        setTransactions(updatedTransactions);
        sessionStorage.setItem('transactions', JSON.stringify(updatedTransactions));
    };

    return (
        <>
            <div className='flex justify-center relative'>
                <section className="min-h-screen flex justify-center items-center relative-bg">
                    <div className="bg-white min-h-[40vw] min-w-[80vw] rounded-xl p-5 shadow-2xl relative">
                        <div className="flex items-center">
                            <h1 className="text-xl font-semibold">My transactions</h1>
                            <Button onClick={handleButtonClick} className="ml-5" color="cyan" variant="secondary" icon={RiSearch2Line}>
                                New Transaction
                            </Button>
                        </div>
                        <div className="border-slate-400/15 border-2 bg-white shadow-sm min-h-[10vh] min-w-[10vw] rounded-xl mt-5 p-4">
                            {transactions.length === 0 ? (
                                <h1 className="font-semibold text-center">No data was found</h1>
                            ) : (
                                
                                    <ul>
                                        {transactions.map((transaction) => (
                                            <div className="border-2 p-2 mb-2 rounded-md">
                                                <li key={transaction.id} className="mb-2 flex items-center justify-between">
                                                    <div className="flex items-center">
                                                            {transaction.amount < 0 ? (
                                                                <BadgeMinus />
                                                            ) : (
                                                                <BadgePlus />
                                                            )}
                                                            <strong>{transaction.description}</strong>
                                                            <span className="mx-2">|</span>
                                                            <span>$ {transaction.amount}</span>
                                                            <span className="mx-2">|</span>
                                                            <span>{transaction.category}</span>
                                                        </div>
                                                    <Button
                                                        onClick={() => deleteTransaction(transaction.id)}
                                                        color="red"
                                                        variant="secondary"
                                                        icon={Trash2}
                                                        size="xs"
                                                    >
                                                        Delete
                                                    </Button>
                                                </li>
                                            </div>
                                        ))}
                                    </ul>
                            )}
                        </div>

                        {showForm && (
                            <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-10">
                                <div className="bg-white p-6 rounded-xl shadow-lg relative">
                                    <button
                                        onClick={handleCloseForm}
                                        className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700"
                                    >
                                        <X size={24} />
                                    </button>
                                    <FormData addTransaction={addTransaction} />
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}

export default Wallet;

interface FormDataProps {
    addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
}

export function FormData({ addTransaction }: FormDataProps) {
    const [description, setDescription] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);  
    const [category, setCategory] = useState<string>('1');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTransaction: Omit<Transaction, 'id'> = {
            description,
            amount,
            category: getCategoryName(category)
        };
        addTransaction(newTransaction);
    };

    const getCategoryName = (value: string): string => {
        const categories: { [key: string]: string } = {
            '1': 'Leisure',
            '2': 'Bill',
            '3': 'Investments',
            '4': 'Pets',
            '5': 'Restaurants'
        };
        return categories[value] || '';
    };

    return (
        <form onSubmit={handleSubmit} className="p-5 flex flex-col min-h-[15vw] min-w-[20vw]">
            <label htmlFor="description" className="mb-2">Description:</label>
            <TextInput 
                placeholder="Type a Desc" 
                className="mx-auto max-w-xs m-0 mb-2" 
                value={description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                required
            />
            <label htmlFor="amount" className="mb-2">Amount:</label>
            <NumberInput 
                placeholder="Type the amount" 
                className="mx-auto max-w-xs m-0 mb-2" 
                value={amount}
                onValueChange={(value) => setAmount(value)}  
                enableStepper={false}  
            />
            <label htmlFor="category" className="mb-2">Category:</label>
            <Select 
                value={category} 
                onValueChange={setCategory}
                className="mb-2 max-w-xs"
            >
                <SelectItem value="1">Leisure</SelectItem>
                <SelectItem value="2">Bill</SelectItem>
                <SelectItem value="3">Investments</SelectItem>
                <SelectItem value="4">Pets</SelectItem>
                <SelectItem value="5">Restaurants</SelectItem>
            </Select>

            <Button type="submit" color="cyan" className="mt-2 max-w-xs">Submit</Button>
        </form>
    );
}