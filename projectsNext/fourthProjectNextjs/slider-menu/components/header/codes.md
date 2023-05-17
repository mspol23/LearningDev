```jsx

function Hamburger () {

        return(
            <div className={style.burgerContainer}>
                <div className={style.burgerLine}></div>
                <div className={style.burgerLine}></div>
                <div className={style.burgerLine}></div>
            </div>
        )
    }

    function MenuOpen() {

        return (
            <div className={style.{menuOpen}}>
                {                   
                    menuList.map(item =>  <div className={style.openStyle} key={item}>{item}</div>)
                }
            </div>
        )
    }

    function MenuClosed() {

        return (
            <div className={style.MenuClosed}>
                {                   
                    menuList.map(item =>  <div className={style.closedStyle} key={item}>{item}</div>)
                }
            </div>
        )
    }

    function ToggleLine () {

        return (
            <div onClick={() => {setOpen(!open)}}>
                { open ? <MenuOpen /> : <MenuClosed /> }
            </div>
        
        )
```
```CSS
.burgerLine {
    background-color: black;
    width: 1rem;
    height: .3rem;
}

.menuOpen {
    padding: 0 0 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 2rem;
    width: 10rem;
    height: 50vh;
    background-color: rgba(0, 0, 255, 0.477);
    animation: 2s linear 900ms;
}



.openStyle {
    font-family: sans-serif;
    line-height: 1.5;
    letter-spacing: .3rem;
    cursor: pointer;
}

.menuClosed {
    display: flex;
    flex-direction: column; 
    width: 10rem;
    height: 50vh;
    background-color: rgba(0, 255, 30, 0.567);
    transition: linear 1s;
}

.closedStyle {
    opacity: 0;
}




```