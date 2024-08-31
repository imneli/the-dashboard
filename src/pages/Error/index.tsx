import { Button } from "@tremor/react"
import { NavLink } from 'react-router-dom';

export function Error() {
    return( 
        <>
            <div className="flex justify-center items-center min-h-screen flex-col">
                <h1 className="text-[#1e1e1e] font-bold text-9xl">404</h1>
                <h1 className="text-2xl m-5">Page not found</h1>
                <Button variant="secondary" color="cyan"><NavLink to="/">Return to Home</NavLink></Button>
            </div>
        </>
    )
}