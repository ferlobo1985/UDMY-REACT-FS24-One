const Header = () => {

    const onChangeHandler = (event) => {
        console.log(event)
    }

    return(
        <header>
            <div 
                className="logo"
                onClick={()=>console.log('I was clicked')}
                onPointerEnter={e => console.log('onPointerEnter')}
            >LOGO</div>
            <input
                onChange={onChangeHandler}
                onFocus={e => console.log('on focus')}
                onBlur={e => console.log('on blur')}
            />
        </header>
    )
}
    
export default Header;
