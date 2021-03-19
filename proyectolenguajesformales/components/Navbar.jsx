import React from 'react'
import { AppBar, IconButton, Typography, Button, Toolbar, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
        width: `calc(100% - 240px)`,
        marginLeft: 240,
      },    
  }));

function Navbar() {
    const classes = useStyles()
    return(
        <React.Fragment>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Proyecto Lenguajes Formales y Automatas
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Navbar
