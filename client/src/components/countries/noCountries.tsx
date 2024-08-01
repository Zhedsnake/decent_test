import React from 'react';

const NoCountries: React.FC = () => {
    return (
        <div className="alert alert-info" role="alert">
            <h3 style={{textAlign: "center"}}>Нет такой страны</h3>
        </div>
    );
};

export default NoCountries;