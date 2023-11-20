import React, { Component } from "react";
import s from "../css/Footer_page.module.css";
import {MdClose} from "react-icons/md";
export default class Footer_page extends Component {
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
    return <div>
<div className={s.line}></div>

<div className={s.footer_link}>
    <ul className={s.footer_page}>
<a onClick={()=>{this.openModalContact()}} href="#"><li onClick={()=>{this.openModalContact()}}  >Связаться с нами</li></a>
<a href="/politika"><li>Политика конфиденциальности</li></a>
<a href="/usloviya"><li>Условия использования</li></a>
    </ul>
    <div></div>
    <a href="#">@SALONCA, 2023</a>
</div>

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


    </div>;
  }
}
