import { useState } from 'react'
import Navigation from './nav';

const Header = () => {
    let [keywords,setKeywords] = useState('');

    const onChangeHandler = (event) => {
        setKeywords(event.target.value);
    }

    return(
        <header>
            <div 
                className="logo"
            >Awesome News</div>
            <input
                onChange={onChangeHandler}
            />
            {/* The keywords are: {keywords} */}
            <Navigation/>
        </header>
    )
}
    
export default Header;
