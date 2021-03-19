import React from 'react'
import ThemeContext from '../context/ThemeContext'
import App from './_app'

const index = () => {
    return (
        <React.Fragment>
            <ThemeContext.Provider value="blue">
                <App/>
            </ThemeContext.Provider>
        </React.Fragment>
    )
}

export default index


