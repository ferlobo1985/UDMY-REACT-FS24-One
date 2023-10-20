import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './components/header/index';
// import NewsList from './components/news_list';
import StatePlayground from './components/playground/state';
import './styles/styles.css';

const App = () => {
    return (
        <>
            <Header/>
            <div className='container'>
                <StatePlayground/>
            </div>
            {/* <NewsList/> */}
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);