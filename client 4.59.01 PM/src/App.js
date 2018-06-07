import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import PhotoPage from './components/Photos/PhotoPage'
import ShowUserPage from './components/Users/ShowUserPage'
import NewPhotoFormPage from './components/Photos/NewPhotoFormPage'
import Weight from './components/Weight'




class App extends Component {
  render() {
    return (
     
      <div>
        <Router>
          
            <Switch>

            {/* user routes */}
              <Route exact path="/" component={HomePage} />
             {/* delete and show in the show route */} 
              <Route exact path="/user" component={LogInPage} />
              <Route exact path="/user/:userId" component={ShowUserPage} />
              {/* photos routes */}
              <Route exact path='/user/:userId/photos' component={PhotoPage} />
              <Route exact path='/user/:userId/photos/:photoId' component={NewPhotoFormPage} />
              <Route exact path='/user/:userId/weight' component={Weight} />
             
              {/* delete and show in the show route */}
             
             
           

            </Switch>

        </Router>

      
      <footer class="footer">Tyler Lauren Designs</footer>      
     
      </div>
    )
  }
}

export default App