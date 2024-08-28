import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home'; 
import Goals from '../pages/Goals';
import Graph from '../pages/Graph'
import Wallet from '../pages/Wallet'
import { Error } from '../pages/Error';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/charts" element={<Graph />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default AppRoutes;