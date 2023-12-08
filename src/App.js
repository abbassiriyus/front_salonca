import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home_page from './pages/js/Home_page'
import Search_page from './pages/js/Search_page'
import Politika_page from './pages/js/Politika_page'
import Salom_page from './pages/js/Salon_page'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Map_page from './pages/js/Map_page';
import Usloviya_page from './pages/js/Usloviya_page'
import Tarif_page from './pages/js/Tarif_page'
import One_product from './pages/js/One_product'
import User_Page from './pages/js/User_Page'
import Vibor_page from './pages/js/Vibor_page'
import NewUser from './pages/js/NewUser'
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
      <Route path="/" element={<Home_page/>} />
      <Route path="/search" element={<Search_page/>} />
      <Route path="/map" element={<Map_page/>} />
      <Route path="/politika" element={<Politika_page/>} />
      <Route path="/salon" element={<Salom_page/>} />
      <Route path="/usloviya" element={<Usloviya_page/>} />
      <Route path="/tarif" element={<Tarif_page/>} />
      <Route path="/one" element={<One_product/>} />
      <Route path="/vibor" element={<Vibor_page/>} />
      <Route path="/NewUser" element={<NewUser/>} />

      {localStorage.getItem("token")?(<Route path="/users" element={<User_Page/>} />):(<></>)}

</Routes>
    </BrowserRouter>
      </div>
    )
  }
}
