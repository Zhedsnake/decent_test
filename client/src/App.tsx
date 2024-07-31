import React from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import AppRouter from "./components/AppRouter";


// Redux
import { Provider } from 'react-redux';
import store from "./store";



const App: React.FC = () => {

    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    );
};

export default App;
