import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home_page from './pages/js/Home_page'
import Search_page from './pages/js/Search_page'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Map_page from './pages/js/Map_page';
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
      <Route path="/" element={<Home_page/>} />
      <Route path="/search" element={<Search_page/>} />
      <Route path="/map" element={<Map_page/>} />

</Routes>
    </BrowserRouter>
      </div>
    )
  }
}
