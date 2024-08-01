import React from 'react';

const HeaderCountries: React.FC = () => {
    return (
        <header className="row text-bg-primary py-2 py-md-3">
            <div className="container">
                <h1 style={{textAlign: "center"}}>Список стран</h1>
            </div>
        </header>
    );
};

export default HeaderCountries;