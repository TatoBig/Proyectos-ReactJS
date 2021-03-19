import React, { useState } from 'react'
import { 
    Drawer,
    Hidden,
    makeStyles
} from'@material-ui/core'
import Navbar from './Navbar'
import Cajon from './Cajon'


const useStyles = makeStyles(theme =>({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}))

const Contenedor = () => {
    const classes = useStyles()
    const [ abrir, setAbrir ] = useState(false)
    const handleOnClose = () => {
        setAbrir(!abrir)
    }

    return (
        <div className={classes.root}>
            <Navbar handleOnClick={handleOnClose}/>
            <Hidden xsDown>
                <Cajon
                    variant="permanent"
                    open={true}
                />
            </Hidden>

            <Hidden smUp>
                <Cajon
                    variant="temporary"
                    open={abrir}
                    onClose={handleOnClose}                 
                />
            </Hidden>

            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                Contenido
            </div>
            
        </div>
    )
}

export default Contenedor
