import React from 'react'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import BadgeNew from '../pages/BadgeNew'
// import Badges from '../pages/Badges'
import Navbar from './Navbar'

function Layout(props) {
    // const children = props.children
    return (
        <React.Fragment>
            <Navbar/>
            {props.children}
        </React.Fragment>
    )
}
export default Layout