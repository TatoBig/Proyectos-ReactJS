// const element = document.createElement('h1')
// element.innerText = 'Hello, Platzi Badges!'
//
// const container = document.getElementById('app')
//
// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import './global.css'

import App from './components/App'
// const jsx = <h1>Hello, platzi badges from react!</h1>
// const element = React.createElement(
//   'a',
//   { href: 'https://platzi.com' },
//   'Ir a platzi'
// )
// const name = 'Tato'
// const element = React.createElement('h1', {}, `Hola soy ${name}`)
// const jsx = <h1>Hola soy, {name}</h1>
// const element = (
//   <div>
//     <h1>Hola soy Richard</h1>
//     <p>Soy ingeniero frontend.</p>
//   </div>
// )
// const element = React.createElement(
//   'div',
//   {},
//   React.createElement('h1', {}, 'Hola soy Richard'),
//   React.createElement('p', {}, 'Soy ingeniero de la web.')
// )
const container = document.getElementById('app')
// ReactDOM.render(__qué__,__donde__)
ReactDOM.render(<App />, container)
  // firstName="Lilly"
  // lastName="Kaufman"
  // jobTitle="Frontend Engineer"
  // twitter="sparragus"
  // avatarUrl="https://www.gravatar.com/avatar?d=identicon"
