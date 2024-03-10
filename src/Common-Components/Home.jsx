import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from '../Routes/ProtectedRoutes/ProtectedRoutes';
import PublicRoutes from '../Routes/PublicRoutes/PublicRoutes';

function Home() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <ProtectedRoutes/>
                    <PublicRoutes/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Home