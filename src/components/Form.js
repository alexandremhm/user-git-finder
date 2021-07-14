import React, { Component } from 'react';

class Form extends Component {
  render() { 
    return ( 
      <div className="App">      
      <label htmlFor="user-input">
          Buscar Usuário
          <input
            type="number"
            name="user"
            id="user-input"
            onChange={ (estado) => this.handleState(estado) }
          />
        </label>
        <button type="button">Buscar</button>
    </div>
     );
  }
}
 
export default Form;