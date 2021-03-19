import React from 'react'
import { makeStyles, TextareaAutosize, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Tabla from './Tabla'

const useStyles = makeStyles((theme) => ({    
    root: {
        display: 'flex',
        width: `calc(100% - 240px)`,
        marginLeft: 260,
        marginTop: 80,    
    },
    button: {
      display: 'flex',
      width: "120px",
      marginLeft: 260,
  },
    textarea: {
        width: "50%",
        height: "150px",
        padding: "12px 20px",
        boxSizing: "border-box",
        border: "2px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#f8f8f8",
        resize: "none",
        marginLeft: 260,
        marginTop: 20,    
    }
  }));

function Compilador (props) {
    const classes = useStyles()
    return (
        <React.Fragment>
            <Autocomplete
              className={classes.root}
              id="combo-box-demo"
              options={props.tokens}
              getOptionLabel={(option) => option.valor}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
            />            
            <TextareaAutosize
              className={classes.textarea}
              rowsMax={4}
              aria-label="maximum height"
              placeholder="Escribir el código"
              defaultValue=""
              onChange={props.onChange}
            />
            <Button className={classes.button} onClick={props.onClick} variant="contained" color="primary">
              Comprobar
            </Button>
            <Tabla tokens={props.tokens}/>
        </React.Fragment>
    )
}

export default Compilador
