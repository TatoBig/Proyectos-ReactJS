import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridListTileBar from '@material-ui/core/GridListTileBar';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
}));

function CharacterCard(props) {
    const classes = useStyles();

    return (
            <React.Fragment>
                 <GridListTile key={props.character.image} cols={props.character.cols || 1}>
                    <img src={props.character.image} alt={props.character.name} />
                    <GridListTileBar
                        
                        title={props.character.name}
                        subtitle={<span>Status: {props.character.status}</span>}
                        actionIcon={
                            <IconButton 
                              aria-label={`info about ${props.character.name}`} 
                              className={classes.icon} 
                              onClick={() => props.onHandleClick(props.character)}>
                            <InfoIcon />
                            </IconButton>}
                        />
                    </GridListTile>
            </React.Fragment>
    )
}

export default CharacterCard
