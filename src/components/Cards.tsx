import React, { useState, useRef } from 'react';
import { DollarSign } from 'lucide-react';
import { BadgeDelta } from '@tremor/react';

// Type definitions
interface Transaction {
  id: number;
  title: string;
  amount: number;
  isPositive: boolean;
  category: string;
}

interface BadgeProps {
  isPositive: boolean;
  category: string;
}

// Badge component with categories
function Badge({ isPositive, category }: BadgeProps) {
  return (
    <div className="flex flex-wrap items-center">
      <BadgeDelta
        deltaType={isPositive ? "increase" : "decrease"}
        size="xs"
      >
        {category}
      </BadgeDelta>
    </div>
  );
}

const mockTransactions: Transaction[] = [
  {
    id: 1,
    title: "New Transaction",
    amount: 187,
    isPositive: true,
    category: "Leisure"
  },
  {
    id: 2,
    title: "New Transaction",
    amount: 7,
    isPositive: true,
    category: "Bill"
  },
  {
    id: 3,
    title: "New Transaction",
    amount: 92,
    isPositive: false,
    category: "Investments"
  },
  {
    id: 4,
    title: "New Transaction",
    amount: 27,
    isPositive: true,
    category: "Pets"
  },
  {
    id: 5,
    title: "New Transaction",
    amount: 17,
    isPositive: false,
    category: "Restaurants"
  },
  {
    id: 6,
    title: "New Transaction",
    amount: 50,
    isPositive: true,
    category: "Leisure"
  },
];

function Cards() {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
        setScrollLeft(sliderRef.current?.scrollLeft || 0);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2; 
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    return(
        <div className="relative w-full overflow-hidden">
            <div 
                ref={sliderRef}
                className="flex space-x-4 overflow-x-hidden scrollbar-hide"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                style={{ 
                    scrollBehavior: isDragging ? 'auto' : 'smooth',
                    userSelect: 'none',  
                    width: `${100 * (mockTransactions.length / 5)}%` 
                }}
            >
                {mockTransactions.map((transaction) => (
                    <div 
                        key={transaction.id} 
                        className="bg-white min-h-[15vh] w-[calc(15%-16px)] flex-shrink-0 rounded-xl shadow-sm flex p-5 flex-col"
                    >
                        <h3 className='font-semibold'>{transaction.title}</h3>
                        <div className='flex items-center'>
                            <DollarSign size={20} className='mt-3 mb-3' color={transaction.isPositive ? '#8aff96' : '#ff918a'}/>
                            {transaction.amount}
                        </div>
                        <Badge isPositive={transaction.isPositive} category={transaction.category} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;