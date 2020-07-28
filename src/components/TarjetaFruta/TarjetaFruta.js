import React from 'react'
//import './TarjetaFruta.css'
import styles from './TarjetaFruta.module.css'

class TarjetaFruta extends React.Component {

    state = {
      cantidad: 0
    }


    add = () => this.setState({
        cantidad: this.state.cantidad + 1
    })

    subs = () => this.setState({
        cantidad: this.state.cantidad - 1
    })


    clean = () => this.setState({
        cantidad: 0
    })


    render(){
      const hasItems = this.state.cantidad > 0
      const activeClass = hasItems ? styles['card-active'] : ''
      const clases = styles.card + ' ' + activeClass

      return(
        <div className = {clases}>
          <h3>{ this.props.name }</h3>
          <div>Cantidad: { this.state.cantidad }</div>
          <button onClick={ this.add }> Add To Car </button>
          <button onClick={ this.subs }> Remove To Car </button>
          <button onClick={ this.clean }> Clean </button>
          <p>${ this.props.price }</p>
          <p>
            Total: $ { this.props.price * this.state.cantidad }
          </p>
        </div>
      )
    }
  }

  export default TarjetaFruta
