import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import cat from '../Photos/cat.png'
import '../styles/Home.css'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      usuario: '',
    }
    
    this.handleUserList = this.handleUserList.bind(this);
    this.handleState = this.handleState.bind(this);

  }

  handleState({ target }) {
    const { value } = target;
    this.setState({
      usuario: value,
    })
  }

  handleUserList() {
    const { usuario } = this.state;
    const { setFetch } = this.props;
    setFetch(usuario);
    
  }

  render() { 
    const { users } = this.props;
    return (  
      <div className="big-container">
        <header id="header-content">
          <h1 id="title-h1"><span id="cat-span">CAT</span>chDev</h1>      
          <img src={ cat } alt="gato em cima de computador" width="200px" />
        </header>                    
      <label htmlFor="user-input">
          <input
            type="text"
            name="user"
            id="user-input"
            onChange={ this.handleState }
            placeholder="CATch new user"        
          />
        </label>
        <button id="btn-search" type="button" onClick={this.handleUserList}>Search</button>
        <div className="user-container">{
            users.length !== 0 && users.items.map((user) =>            
            <div className="user-cart">
              <Link className="links" to={`/details/${user.id}`}>
                <img className="user-pic" src={user.avatar_url} alt={user.login} width="100px" />
                <p className="user-name">{user.login}</p>
              </Link>
            </div>         
          )
          }</div>          
    </div>
    );
  }
}
 
const mapDispatchToProps = (dispatch) => ({  
  setFetch: (user) => dispatch(fetchData(user)),
});

const mapStateToProps = (state) => ({
  users: state.requestReducer.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
