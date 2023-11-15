import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarpage from './pages/js/Navbar_page'
import Home_page from './pages/js/Home_page'
import Footer_page from './pages/js/Footer_page'
import Search_page from './pages/js/Search_page'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Home_page/> */}
        <Search_page/>
      </div>
    )
  }
}
