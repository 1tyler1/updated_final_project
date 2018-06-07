import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'



class HomePage extends Component {
  render(){
    return (
   <div>  
<div class="card-style mobile-card">
  <div>
  
   
    <div class="card center">
      <div class="centered-card">
       
      <div class="card-stacked">
      
        <div id='align' class="card-content center">
        <h1>Progress</h1>
        <div class="align-text">
          <p class="center">Progress is app an that allows you to visualize your progression, whether weight loss or making gains. Best wishes on your journey to changing your body for the best!</p>
          </div>
        </div>
        <div class="card-action">
        <Link class="waves-effect waves-light btn" to='/user'>Login</Link>
        </div>
        </div>
      </div>
    </div>
  </div>
     </div>     

      </div>
     
    )
  }
}

export default HomePage