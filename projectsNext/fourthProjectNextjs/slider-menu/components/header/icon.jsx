import { useState } from 'react'
import style from './icon.module.css'


export default function Header() {
    const [slide, setSlide] = useState(true)
    const [toggleStyle, setToggleStyle] = useState()

    function Title() {
        return (
            <h1 className={style.headerTitle}>TITLE</h1>
        )
    }

    function Burger() {
        return (
            <div className={style.burger}>
                <div className={style.burgerParts}></div>
                <div className={style.burgerParts}></div>
                <div className={style.burgerParts}></div>
            </div>
        )
    }

    function MenuInvisible() {
        return <div style='display=none'></div>
    }

    function handleClick() {
       setSlide(!slide)
       console.log(slide)
    }

    function MenuVisible({toggle}) {
        if(slide) {
            toggle = style.showMenu
        } else {
            toggle = style.hideMenu
        }
        return (
            <div className={toggle}>
                <ul className={style.listContainer}>
                    <li></li>
                </ul>
            </div>
        )
    }

    function Menu() {

        return (
            <>
                <div>
                    <div className={style.burgerContainer} onClick={handleClick}>
                        <Burger />
                    </div>
                    
                </div>
            </>
        )
    }
   
    function HeaderFrame() {
        return (
            <header className={style.headerContainer}>
               <Title />
               <Menu />
            </header>
        )
    }

    return (
        
        <>
            <HeaderFrame />
            <MenuVisible />
        </>       
    )
}