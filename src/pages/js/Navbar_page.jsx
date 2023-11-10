import React, { Component } from 'react'
import { FaRegUser } from "react-icons/fa"
import { TbMenu2 } from "react-icons/tb"

import s from "../css/Navbar_page.module.css"



export default class Navbar_page extends Component {
state={
  modal_var:0
}

open_modal=()=>{
  if(this.state.modal_var==0){
   document.querySelector('#modal_navbar').style="top:70px" 
   this.setState({modal_var:1})
  }else{
   document.querySelector('#modal_navbar').style="top:-400px" 
   this.setState({modal_var:0})
  
  }
  
}


  render() {
    return (
      <div>
<div className={s.navbar_first}>
<div className={s.logo}>salonca</div>
<ul className={s.page}>
<li>Связаться с нами</li>
<li><a href="#">Салонам</a></li>
<li><button>Войти</button></li>
</ul>
<div className={s.page_icons}>
<FaRegUser className={s.user_icons} />
<TbMenu2 onClick={()=>{this.open_modal()}} />
</div>
</div>
<ul className={s.nav_page} id='modal_navbar'>
<li>Связаться с нами</li>
<li><a href="#">Салонам</a></li>
<li><button>Войти</button></li>
</ul>


      </div>
    )
  }
}
