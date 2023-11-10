import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarpage from './pages/js/Navbar_page'
import Home_page from './pages/js/Home_page'

export default class App extends Component {
  render() {
    return (
      <div>
<Navbarpage/>
        <Home_page/>
      </div>
    )
  }
}
