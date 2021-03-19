import React, { useState, useContext } from 'react'
import Characters from '../components/Characters'
import ThemeContext from '../context/ThemeContext'

const Header = () => {
    const [ darkMode, setDarkMode ] = useState(false)
    const color = useContext(ThemeContext)
    console.log('dosaodsa')
    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    return (
        <React.Fragment>
            <div className="Header">
                <h1 style={{ color }}>ReactHooks</h1>
                <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
                <button type="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Dark Mode 2' : 'Light Mode 2'}</button>
            </div>
            <Characters/>
        </React.Fragment>
    )
}

export default Header