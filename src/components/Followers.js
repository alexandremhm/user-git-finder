import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Details.css'

class Followers extends Component {
  constructor(){
    super()
    this.state = {
      usersData: [],
      repoInfo: [],
    }
    this.userInfoRequest = this.userInfoRequest.bind(this);
    this.repoInfoRequest = this.repoInfoRequest.bind(this);

  }

  componentDidMount(){
    const { userDetails } = this.props;
    this.userInfoRequest(`https://api.github.com/users/${userDetails.login}`);
    this.repoInfoRequest(userDetails.repos_url)
  }

   userInfoRequest(URL) {
    fetch(URL)
    .then((result) => result.json())
    .then((data) => ((this.setState({usersData: data}))));
  }

  repoInfoRequest(URL) {
    fetch(URL)
    .then((result) => result.json())
    .then((data) => ((this.setState({repoInfo: data}))));
  }

  render() { 
    const { usersData, repoInfo } = this.state;
    console.log(repoInfo)
    
    
    return (
      <div id="info-container">
        <p>{ `Número de seguidores: ${usersData.followers}` }</p>
        <p>{ `Seguindo: ${usersData.following}` }</p>
        <p>{usersData.location && `Location: ${usersData.location}`}</p>
        <p>Principais Projetos:</p>
        <div id="repo-container">
        <a href={ repoInfo.length !== 0 && repoInfo[0].html_url } target="blank">{ repoInfo.length !== 0 && repoInfo[0].name }</a>
        <a href={ repoInfo.length !== 0 && repoInfo[1].html_url } target="blank">{ repoInfo.length !== 0 && repoInfo[1].name }</a>
        <a href={ repoInfo.length !== 0 && repoInfo[2].html_url } target="blank">{ repoInfo.length !== 0 && repoInfo[2].name }</a>
        </div>                       
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userDetails: state.requestReducer.userDetails,
});
 
export default connect(mapStateToProps)(Followers);