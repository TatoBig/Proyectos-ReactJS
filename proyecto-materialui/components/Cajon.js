import React from 'react'
import {
    makeStyles,
    Drawer,
    Divider
} from '@material-ui/core'
import Listas from './Listas'

const useStyles = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: 240,
    },
}))

const Cajon = (props) => {
    const classes = useStyles()
    
    return (
        <React.Fragment>
            <Drawer
                className={classes.drawer}                
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
                variant={props.variant}
                open={props.open}
                onClose={props.onClose ? props.onClose : null}
            >
                <div className={classes.toolbar}></div>
                <Divider/>
                <Listas/>
            </Drawer>
        </React.Fragment>
    )
}

export default Cajon
