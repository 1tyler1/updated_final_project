import React, { Component } from 'react';

class UpdateUserFormPage extends Component {
  state = {
    updatedUser: {}
  };

  static getDerivedStateFromProps(nextProps, prevState){
    const futureState = {
        updatedUser: nextProps.user
      }
      console.log(".")
      return futureState
  }

  // componentDidMount() {
  //   console.log(this.props.user)
  //   const userData = { ...this.props.user }
  //   this.setState({ updatedUser: userData })
  // }

  updateUserfunction = (event) => {
      event.preventDefault()
    this.props.updateUser(this.state.updatedUser)
  }

  handleUpdateUserChange = (event) => {
    event.preventDefault()
    const user = { ...this.state.updatedUser };
    user[event.target.name] = event.target.value;
    this.setState({ updatedUser: user });
    console.log(event.target.value)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.updateUserfunction}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input
              onChange={this.handleUpdateUserChange}
              name="userName"
              type="text"
              value={this.state.updatedUser.userName}
            />
          </div>
          <div>
            <label htmlFor="e-mail">e-mail</label>
            <input
              onChange={this.handleUpdateUserChange}
              name="email"
              type="text"
              value={this.state.updatedUser.email}
            />
          </div>
          <div className="center">
            <button className="waves-effect waves-light btn center-align btn-small">
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateUserFormPage;
