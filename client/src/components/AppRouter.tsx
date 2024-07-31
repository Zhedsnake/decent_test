import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import {publicRoutes} from "../router";


const AppRouter: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;