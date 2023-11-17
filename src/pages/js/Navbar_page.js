import React, { Component } from 'react'
import { FaRegUser } from "react-icons/fa"
import { TbMenu2 } from "react-icons/tb"
import {MdClose} from "react-icons/md"
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

closeModalContact=()=>{
  document.querySelector("#back_black2").style="display:none"
  document.querySelector("#back_black").style="display:none"
  

}


openModalContact=()=>{
  document.querySelector("#back_black2").style="display:flex"
  document.querySelector("#back_black").style="display:flex"
  document.querySelector('#modal_navbar').style="top:-400px" 
}
  render() {
    return (
      <div>
<div className={s.navbar_first}>
<a style={{textDecoration:'none',color:'black'}} href="/"><div className={s.logo}>salonca</div></a>
<ul className={s.page}>
<li onClick={()=>this.openModalContact()} >Связаться с нами</li>
<li><a href="/salon">Салонам</a></li>
<li><button>Войти</button></li>
</ul>
<div className={s.page_icons}>
<FaRegUser className={s.user_icons} />
<TbMenu2 onClick={()=>{this.open_modal()}} />
</div>
</div>
<ul className={s.nav_page} id='modal_navbar'>
<li onClick={()=>this.openModalContact()} >Связаться с нами</li>
<li><a href="/salon">Салонам</a></li>
<li><button>Войти</button></li>
</ul>

<div className={s.back_black}  id='back_black' onClick={()=>this.closeModalContact()} ></div>
<div className={s.back_black2}  id='back_black2' >
  <div className={s.open_page}>
    <div className={s.close} onClick={()=>this.closeModalContact()} ><MdClose/></div>
<h1>Связаться с нами</h1>
<a href="https://wa.clck.bar/79938950829">
  <button style={{backgroundColor:"rgb(28, 61, 114)",color:"white"}} >Написать в чат</button></a>
<a href="tel:+998996487223">
  <button style={{background:"while",border:'2px solid rgb(28, 61, 114)'}} >Позвонить
  </button></a>
  </div>
</div>


      </div>
    )
  }
}
