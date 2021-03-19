import React from 'react'
import '../styles/globals.css'
import { Button, ThemeProvider } from '@material-ui/core'
import theme from '../themeConfig'
import Navbar from '../components/Navbar'
import Listas from '../components/Listas'
import Oculto from '../components/Oculto'
import Contenedor from '../components/Contenedor'




function App() {

  return (
    <React.Fragment>  
      <ThemeProvider theme={theme}>  
        <Contenedor/>
      </ThemeProvider>  
    </React.Fragment>
  )
}

export default App
