import React, { Component } from "react";
import Navbar_page from "./Navbar_page";
import Footer_page from "./Footer_page";
import s from "../css/User_page.module.css" 
import Calendar_page from "./Calendar_page"
export default class User_Page extends Component {


  
  render() {
    return <div>
        <Navbar_page/>
<div className={s.users}>
  <div className={s.calendar}>
<Calendar_page/>
  </div>
  <div className={s.form}>
asa

  </div>
</div>
<Footer_page/>
    </div>;
  }
}
