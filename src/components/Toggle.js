import React, { useEffect, useState } from 'react'
import '../styles/toggle.css'
import { setTheme } from '../utils/themes'

export const Toggle = () => {

    const [togClass, setTogClass] = useState('dark');
    let theme = localStorage.getItem('theme');

    // make the toggle show the correct button when loaded
    useEffect(() => {
        if(localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark');
            console.log('dark');
        } else if(localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light');
            console.log('light');
        }
    }, [theme])


    const handleOnClick = () => {
        if(localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light');
        } else if(localStorage.getItem('theme') === 'theme-light'){
            setTheme('theme-dark');
            setTogClass('dark');
        }
    }



    return (
        <div className="container--toggle">
            {
                togClass === "light" ?
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} checked />
                :
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} />
            }

            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
        </div>
    )
}
