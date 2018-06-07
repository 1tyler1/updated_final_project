import React, { Component } from 'react';

class NewPhotoFormPage extends Component {

  state = {
    updatedPhoto: {},
  };

  static getDerivedStateFromProps(nextProps, prevState){
    const futureState = {
        updatedUser: nextProps.user
      }
      return futureState
  }

  updatePhotofunction = (event) => {
      event.preventDefault()
    this.props.updatePhoto(this.state.updatedPhoto)
  }

  handleUpdatePhoto = event => {
    event.preventDefault();
    const photo = { ...this.state.updatedPhoto };
    photo[event.target.name] = event.target.value;
    this.setState({ updatedPhoto: photo });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.updatePhotofunction}>
          <div>
          <div className="center">
            <button className="waves-effect waves-light btn center-align btn-small">
              New
            </button>
          </div>
            <label htmlFor="Title">Title</label>
            <input
              onChange={this.handleUpdatePhoto}
              name="Title"
              type="text"
              value={this.state.updatedPhoto.title}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              onChange={this.handleUpdatePhoto}
              name="description"
              type="text"
              value={this.state.updatedPhoto.description}
            />
          </div>
       
        </form>
      </div>
    );
  }
}


export default NewPhotoFormPage;