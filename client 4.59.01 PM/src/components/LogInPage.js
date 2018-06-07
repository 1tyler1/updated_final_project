import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class LogIn extends Component {
  state = {
    users: [],
    user: {
      userName: '',
      password: ''
    }
  }

  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios.get('/api/users')
      .then(res => {
        console.log("Saving users to state", res.data)
        this.setState({ users: res.data })
      })
      .catch(err => {
        console.error(err)
      })
  }

  createUser = () => {
    axios.post('/api/users', { user: this.state.user })
    .then((res) => {
      const users = [...this.state.users]
      users.push(res.data)
      this.setState({users})
    })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    axios.post('/api/users', { user: this.state.user })
    .then((res) => {
      const users = [...this.state.users]
      users.push(res.data)
      this.setState({users})
    })
  }

  handleChange = (event) => {
    const user = { ...this.state.user }
    user[event.target.name] = event.target.value
    this.setState({ user })
  }

  render() {
    const userLinks = this.state.users.map((user, i) => {
      return (
        <div key={i}>
          <Link to={`/user/${user._id}`}>{user.userName}</Link>
        </div>)
    })

    return (
      <div class="form">
        <div>
          
        </div>
        <div class="Link-style">
        <Link to='/'>Return Home</Link>
        <h3>Log-In</h3>
        <h6>Please Select an Existing User</h6>
        <div class="update">
        
       {userLinks} 
       
       </div>
        </div>
        <h3>Sign-Up</h3>
        <form onSubmit={this.handleSignUp}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input onChange={this.handleChange} name="userName" type="text"/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input onChange={this.handleChange} name="password" type="text" />
          </div>
          <div class="center">
         <button class="waves-effect waves-light btn center-align btn-small center">Send</button>
          </div>
        </form>
      </div>
    
    )
  }
}

export default LogIn