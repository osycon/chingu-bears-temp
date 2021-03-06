import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MeetAttending from './MeetAttending';
import './Profile.css';
import App from './App';

class Profile extends Component {
  state = {
    user: null
  };
  async componentDidMount() {
    const user = await axios.get('/api/user');
    this.setState({
      user: user.data
    });
  }
  render() {
    return (
      <div className="profile-container">
        {!this.state.user ? (
          'Loading...'
        ) : (
          <div>
            <h2 id="profile-name" className="header">
              {this.state.user.name}
            </h2>
            <div className="profile-border text">
              <div className="data-pair">
                <h4>e-Mail:</h4>
                <div className="profile-data">
                  <p>{this.state.user.email}</p>
                </div>
              </div>
              <div className="data-pair">
                <h4>Location:</h4>
                <div className="profile-data">
                  <p>{this.state.user.location}</p>
                </div>
              </div>
              <div className="data-pair">
                <h4>Date of Birth:</h4>
                <div className="profile-data">
                  <p>{App.formatDate(this.state.user.birth)}</p>
                </div>
              </div>
              <div className="data-pair">
                <h4>Description:</h4>
                <div className="profile-data">
                  <p>{this.state.user.description}</p>
                </div>
              </div>
              <div className="data-pair">
                <h4>Website:</h4>
                <div className="profile-data">
                  <p>{this.state.user.website}</p>
                </div>
              </div>
            </div>
            <div className="Profile__navigation">
              <Link to="/profile-form">
                <button onClick={this.toggleForm} className="form__button">
                  <i className="fa fa-pencil-square-o fa-lg" /> Edit profile
                </button>
              </Link>
              <Link to="/meet/new">
                <button className="form__button">Create a meetup</button>
              </Link>
            </div>
          </div>
        )}
        <MeetAttending />
      </div>
    );
  }
}

export default Profile;
