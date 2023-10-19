import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './components/header';
// import NewsList from './components/news_list';
import './styles/styles.css';

const App = () => {
    return (
        <>
            <Header/>
            {/* <NewsList/> */}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);