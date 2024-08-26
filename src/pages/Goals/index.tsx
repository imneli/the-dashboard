import CardsGoals from "../../components/Cards/CardsGoals"
import { TableUse } from "../../components/List"

function Goals() {
    return(
        <>
            <div className='flex justify-center relative'>
                <section className="min-h-screen flex justify-center items-center relative-bg">
                    <div className="bg-white min-h-[40vw] min-w-[80vw] rounded-xl p-5 shadow-2xl">
                        <CardsGoals />
                        <div className="flex justify-center mt-4">
                            <TableUse/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Goals