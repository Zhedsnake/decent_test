import React from "react";
import Countries from "../pages/Countries.tsx";



export interface RoutesTypes {
    path: string,
    component: React.ReactNode
}

const publicRoutes: RoutesTypes[] = [
    {path: '/', component: <Countries />},
    // {path: '/stuff/:stuffId', component: <UserDetail />},
]

export {publicRoutes};

