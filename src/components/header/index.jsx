import { useState } from 'react'
import Navigation from './nav';

const Header = () => {
    let [active, setActive] = useState('active')
    let [keywords,setKeywords] = useState('');

    const onChangeHandler = (event) => {
        const value = event.target.value === '' ? 'active' : 'not-active';
        setKeywords(event.target.value);
        setActive(value)
    }

    return(
        <header className={active}>
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
