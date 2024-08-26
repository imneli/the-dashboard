
import { Box, ChartNoAxesColumnIncreasing, House, User, Wallet } from 'lucide-react'
import { NavLink } from 'react-router-dom';

function SideBar() {
    return(
        <>
            <div className='h-screen bg-cyan-50/80 border-r-2 border-cyan-400/100 w-12 absolute left-0 flex justify-center align-top pt-5 z-10'>
                <div className=' flex justify-between flex-col'>
                        <ul className='flex flex-col gap-5'>
                            <li><NavLink to="/"><House color='#1e1e1e'/></NavLink></li>
                            <li><NavLink to="/goals"><Box color='#1e1e1e'/></NavLink></li>
                            <li><NavLink to="/wallet"><Wallet color='#1e1e1e'/></NavLink></li>
                            <li><NavLink to="/charts"><ChartNoAxesColumnIncreasing color='#1e1e1e'/></NavLink></li>
                        </ul>
                        <div className='pb-5'>
                            <User />
                        </div>
                    </div>
                </div>
        </>
    )

}

export default SideBar