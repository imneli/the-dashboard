import { SparkAreaExample } from "../../components/CardsInvests"
import { BarChartOnValueChangeExample } from "../../components/ChartGraph"

function Graph() {
    return(
        <>
            <div className='flex justify-center relative'>
                <section className="min-h-screen flex justify-center items-center relative-bg">
                    <div className="bg-white min-h-[40vw] min-w-[80vw] rounded-xl p-5 shadow-2xl">
                        <div className="flex justify-between">
                            <BarChartOnValueChangeExample/>
                            <div className="">
                                <SparkAreaExample/>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Graph