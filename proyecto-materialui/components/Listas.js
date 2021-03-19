import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'
import CloudQueueIcon from '@material-ui/icons/CloudQueue'
import DeckIcon from '@material-ui/icons/Deck'

const Listas = () => {
    return (
        <React.Fragment>
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueueIcon/>
                    </ListItemIcon>
                    <ListItemText primary="mi primer elemento"/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <DeckIcon/>
                    </ListItemIcon>
                    <ListItemText primary="mi segundo elemento"/>
                </ListItem>

                <Divider/>
            </List>
        </React.Fragment>
    )
}

export default Listas
