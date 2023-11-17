import React, { Component } from "react";
import s from '../css/Salon_page.module.css'
import Navbar_page1 from "./Navbar_page1";
import Footer_page from "./Footer_page";
export default class Salon_page extends Component {
  render() {
    return <div>
      <Navbar_page1/>



      <Footer_page/>
    </div>;
  }
}
