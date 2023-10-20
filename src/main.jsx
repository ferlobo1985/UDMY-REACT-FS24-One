import React,{ useState } from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './components/header/index';
import NewsList from './components/news_list';
import {newsData} from './utils/data'
// import StatePlayground from './components/playground/state';
import './styles/styles.css';

const App = () => {
    let [news,setNews] = useState(newsData)
    return (
        <>
            <Header/>
            <div className='container'>
                {/* <StatePlayground/> */}
                <NewsList news={news}> 
                    <br/>
                    <h1>I am a children</h1>
                </NewsList>
            </div>
           
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);