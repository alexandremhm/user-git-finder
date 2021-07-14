import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSearchs, userDetailsAction } from '../actions';
import Followers from '../components/Followers';
import '../styles/Details.css'

class Details extends Component {

  render() { 
    const { user } = this.props.match.params;
    const { users, setDetails } = this.props;
    const userFind = users.items.find((usuario) => usuario.id.toString() === user.toString())
    setDetails(userFind);    
    
    
    return (  
      <div>
        <div id="details-cart">
          <h1>{userFind.login}</h1>
          <img src={userFind.avatar_url} alt={userFind.login} width="300PX" />
          <Followers userData= {userFind}/>          
        </div>
        <Link to="/" id="link-home">Home</Link>  
      </div>
    );
  }
}
 
const mapStateToProps = (state) => ({
  users: state.requestReducer.users,
  dataSearch: state.requestReducer.dataSearch,
});

const mapDispatchToProps = (dispatch) => ({  
  setFetch: (url) => dispatch(fetchSearchs(url)),
  setDetails: (data) => dispatch(userDetailsAction(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Details);