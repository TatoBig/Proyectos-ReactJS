import '../styles/globals.css'
import React, { useState, useMemo, useRef, useCallback } from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import Compilador from '../components/Compilador';

const tokens = [
  { valor: 'entero', tipo: 'palabra_reservada'},
  { valor: 'decimal', tipo: 'palabra_reservada'},
  { valor: 'booleano', tipo: 'palabra_reservada'},
  { valor: 'cadena', tipo: 'palabra_reservada'},
  { valor: 'si', tipo: 'palabra_reservada'},
  { valor: 'sino', tipo: 'palabra_reservada'},
  { valor: 'mientras', tipo: 'palabra_reservada'},
  { valor: 'hacer', tipo: 'palabra_reservada'},
  { valor: 'verdadero', tipo: 'palabra_reservada'},
  { valor: 'falso', tipo: 'palabra_reservada'},
  { valor: '+', tipo: 'operador'},
  { valor: '-', tipo: 'operador'},
  { valor: '*', tipo: 'operador'},
  { valor: '/', tipo: 'operador'},
  { valor: '%', tipo: 'operador'},
  { valor: '=', tipo: 'operador'},
  { valor: '==', tipo: 'operador'},
  { valor: '<', tipo: 'operador'},
  { valor: '>', tipo: 'operador'},
  { valor: '>=', tipo: 'operador'},
  { valor: '<=', tipo: 'operador'}
];

function App() {
  const [ palabras, setPalabras ] = useState([])
  let oracion = ''

  const crearArrayOracion = () => {
    setPalabras(oracion.split(" "))
    console.log(palabras)
  }


  const handleChange = e => {
    oracion = e.target.value
    console.log({      
      value: e.target.value
    })
  } 

  const handleOnClick = e => {
    console.log(`${oracion}`)
    crearArrayOracion()
  }

  return (
    <React.Fragment>
      <Navbar/>
      <SideBar/>
      <Compilador onChange={handleChange} onClick={handleOnClick} tokens={palabras}/>
    </React.Fragment>
  )
}

export default App
