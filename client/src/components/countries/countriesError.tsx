import React from 'react';

interface countriesErrorProp {
    children: string
}
const CountriesError: React.FC<countriesErrorProp> = ({children}) => {
    return (
        <div className="alert alert-danger" role="alert">
            <h3 style={{textAlign: "center",}}>{children}</h3>
        </div>
    );
};

export default CountriesError;