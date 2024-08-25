import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'; 
import Goals from '../pages/Goals';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/goals" element={<Goals />} />
        </Routes>
    );
}

export default AppRoutes;