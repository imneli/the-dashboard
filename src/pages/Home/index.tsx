import { BarChartExampleWithGroups } from '../../components/Chart'
import {  } from '../../components/CardsInvests'
import '../../styles/Globalstyle.css'
import Cards from '../../components/Cards';
import { CardTest } from '../../components/Cards/CardBalance';

function Home() {
 return (
    <>
    <div className='flex justify-center relative'>
        <section className="min-h-screen flex justify-center items-center relative-bg">
            <div className="bg-white min-h-[40vw] min-w-[80vw] rounded-xl p-5 shadow-2xl">
            <div className="bg-gray-50 shadow-sm min-h-[20vh] min-w-[10vw] rounded-xl flex items-center justify-evenly p-5">
                <Cards/>
                </div>
                <div className='flex justify-between items-center'>
                    <BarChartExampleWithGroups />
                    <div className='flex flex-col items-end'>
                        <CardTest/>
                    </div>
                    
                </div>
            </div>
        </section>
        </div>
    </>
 )   
}



export default Home
