import { BarChartExampleWithGroups } from '../../components/Chart'
import {  } from '../../components/Donut'
import '../../styles/Globalstyle.css'
import Cards from '../../components/Cards';

function Home() {
 return (
    <>
    <div className='flex justify-center relative'>
        <section className="min-h-screen flex justify-center items-center relative-bg">
            <div className="bg-white min-h-[40vw] min-w-[80vw] rounded-xl p-5 shadow-2xl">
                <Cards/>
                <div className='flex justify-start items-center'>
                    <BarChartExampleWithGroups />
                </div>
            </div>
        </section>
        </div>
    </>
 )   
}



export default Home
