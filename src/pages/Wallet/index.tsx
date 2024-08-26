import { useState } from "react";
import { Button, TextInput, NumberInput, Select, SelectItem } from '@tremor/react';
import { RiSearch2Line } from "@remixicon/react";
import { X } from "lucide-react";

function Wallet() {
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(prev => !prev);
    };

    const handleCloseForm = () => {
        setShowForm(false);
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
                        <div className="border-slate-400/15 border-2 bg-white shadow-sm min-h-[10vh] min-w-[10vw] rounded-xl mt-5 justify-center flex items-center">
                            <h1 className="font-semibold">No data was found</h1>
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
                                    <FormData />
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

export function FormData() {
    return (
        <form className="p-5 flex flex-col min-h-[15vw] min-w-[20vw]">
            <label htmlFor="description" className="mb-2">Description:</label>
            <TextInput placeholder="Type a Desc" className="mx-auto max-w-xs m-0 mb-2" />
            <label htmlFor="amount" className="mb-2">Amount:</label>
            <NumberInput placeholder="Type the amount" className="mx-auto max-w-xs m-0 mb-2" />
            <label htmlFor="category" className="mb-2">Category:</label>
            <Select defaultValue="1" className="mb-2 max-w-xs">
                <SelectItem value="1">Leisure</SelectItem>
                <SelectItem value="2">Bill</SelectItem>
                <SelectItem value="3">Investments</SelectItem>
                <SelectItem value="4">Pets</SelectItem>
                <SelectItem value="5">Restaurants</SelectItem>
            </Select>

            <Button color="cyan" className="mt-2 max-w-xs">Submit</Button>
        </form>
    );
}
