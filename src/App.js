import React from 'react'
import TarjetaFruta from './components/TarjetaFruta/TarjetaFruta'

const App = () => (
  <div>
    <TarjetaFruta name='Sandia' price = {2000}/>
    <TarjetaFruta name='Naranja' price = {3000}/>
    <TarjetaFruta name='Kiwy' price = {4000}/>
    <TarjetaFruta name='Melon' price = {5000}/>
    <TarjetaFruta name='Limon' price = {300}/>
  </div>
)

export default App