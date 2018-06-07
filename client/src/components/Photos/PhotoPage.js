import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import NewPhotoFormPage from './NewPhotoFormPage';

class PhotoPage extends Component {
  state = {
    user: [],
    photo: [],
   
  
    photoRemoved: false
  }

  componentWillMount() {
    if (this.props.match.params) {
      const { userId } = this.props.match.params;
      
      axios.get(`/api/users/${userId}/photos`)
      .then(res => {
        this.setState({ photo: res.data });
        console.log(res.data);
      });
    }
  }

  updatePhoto = updatedPhoto => {
    const userId = this.state.user._id;
    const photoId = this.state.user.photo._id;
    axios
      .patch(`/api/users/${userId}/photos/${photoId}`, {
        photo: updatedPhoto,
      })
      .then(res => {
        const resPhoto = res.data;
        this.setState({ photo: resPhoto });
      });
  };

  deleteUser = deletedUser => {
    const userId = this.state.user._id;

    axios.delete(`/api/users/${userId}`).then(() => {
      this.setState({ userRemoved: true });
    });
  };

  handleDeleteUser = e => {
    e.preventDefault();
    this.deleteUser();
  };

  render() {
    if (this.state.userRemoved) return <Redirect to={`/`} />;

    return (
      <div class="form">
          <h3>Photos</h3>
     <div class="imagestyle">
        <img src='https://i.imgur.com/RugY75D.png' alt="workout" />
        </div>
        <p class="pmedia">Title: Day 1 </p>
          <div>
            <div class="center">
              <div>
              
             
          </div>
        </div>
        <NewPhotoFormPage
          photo={this.state.photo}
          user={this.state.user}
          createPhoto={this.createPhoto}
        />

        <div className="center">
          <button
            onClick={this.handleDeletePhoto}
            className="waves-effect waves-light btn center-align btn-small">
            Delete
          </button>
        </div> 
      </div>
      </div>
    );
  }
}

export default PhotoPage;
