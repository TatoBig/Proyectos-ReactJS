import React from 'react'
import { withWidth, Typography, Hidden, Button } from '@material-ui/core'

const Oculto = (props) => {
    return (
        <React.Fragment>
            <Typography variant="h6" color="initial">
                Ancho: {props.width}
            </Typography>

            <Hidden xsDown>
                <Button variant="contained" color="primary">
                  xs
                </Button>
            </Hidden>

        </React.Fragment>
    )
}

export default withWidth()(Oculto)
