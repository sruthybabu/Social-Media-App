import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg  navbar-dark bg-primary">
  <div class="container-fluid">
      <Link to="/" class="navbar-brand">Social Media</Link>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
          <Link to="/" class="nav-link active">Add Post</Link>
        <Link to= "/search" class="nav-link" >Search Post</Link>
        <Link to= "/view" class="nav-link" >View Post</Link>
       
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar