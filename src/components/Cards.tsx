import { DollarSign } from 'lucide-react'

function Cards() {
    return(
        <>
            <div className="bg-gray-50 shadow-sm min-h-[20vh] min-w-[10vw] rounded-xl flex items-center justify-evenly p-5">
                    <div className="bg-white min-h-[15vh] min-w-[14vw] rounded-xl shadow-sm flex p-5 flex-col"><h3>New Transaction</h3> <div className='flex items-center'><DollarSign className='mt-3 mb-3' color='#8aff96'/> 187 </div> <div>badge</div></div>
                    <div className="bg-white min-h-[15vh] min-w-[14vw] rounded-xl shadow-sm flex p-5 flex-col"><h3>New Transaction</h3> <div className='flex items-center'><DollarSign className='mt-3 mb-3' color='#8aff96'/> 7</div> <div>badge</div></div>
                    <div className="bg-white min-h-[15vh] min-w-[14vw] rounded-xl shadow-sm flex p-5 flex-col"><h3>New Transaction</h3> <div className='flex items-center'><DollarSign className='mt-3 mb-3' color='#ff918a'/> 92</div> <div>badge</div></div>
                    <div className="bg-white min-h-[15vh] min-w-[14vw] rounded-xl shadow-sm flex p-5 flex-col"><h3>New Transaction</h3> <div className='flex items-center'><DollarSign className='mt-3 mb-3' color='#8aff96'/> 27</div> <div>badge</div></div>
                    <div className="bg-white min-h-[15vh] min-w-[14vw] rounded-xl shadow-sm flex p-5 flex-col"><h3>New Transaction</h3> <div className='flex items-center'><DollarSign className='mt-3 mb-3' color='#ff918a'/> 17</div> <div>badge</div></div>
                </div>
        </>
    )
}

export default Cards