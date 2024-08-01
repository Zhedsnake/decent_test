import React from "react";
import Countries from "../pages/Countries.tsx";
import CountryId from "../pages/CountryId.tsx";



export interface RoutesTypes {
    path: string,
    component: React.ReactNode
}

const publicRoutes: RoutesTypes[] = [
    {path: '/', component: <Countries />},
    {path: '/country/:countryId', component: <CountryId />},
]

export {publicRoutes};

