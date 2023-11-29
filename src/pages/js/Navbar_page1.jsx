import React, { Component } from 'react'
import { FaRegUser } from "react-icons/fa"
import { TbMenu2 } from "react-icons/tb"
import {MdClose} from "react-icons/md"
import s from "../css/Navbar_page.module.css"



export default class Navbar_page extends Component {
  state={
    modal_var:0,
    email:"test@gmail.com",
  key:0
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
<li><a href="/">Мастерам</a></li>
<li> {localStorage.getItem("token")?(<a style={{textDecoration:'none',color:'rgb(28, 61, 114) ',display:'flex',alignItems:'center'}} href='/users'><FaRegUser style={{marginRight:'4px'}} /> <span style={{position:'relative',top:'2px'}}>Профиль</span></a>):(  <button onClick={()=>{
    document.querySelector('#modal122').style="display:flex"
  }}>Войти</button>)}</li>
</ul>
<div className={s.page_icons}>
{localStorage.getItem("token")?(<FaRegUser className={s.user_icons} />):(  <></>)}
<TbMenu2 onClick={()=>{this.open_modal()}} />
</div>
</div>
<ul className={s.nav_page} id='modal_navbar'>
<li onClick={()=>this.openModalContact()} >Связаться с нами</li>
<li><a href="/">
Мастерам</a></li>
<li> {localStorage.getItem("token")?(<a style={{textDecoration:'none',color:'rgb(28, 61, 114) ',display:'flex',alignItems:'center',justifyContent:'center'}} href='/users'><FaRegUser style={{marginRight:'4px'}} /> <span style={{position:'relative',top:'2px'}}>Профиль</span></a>):(  <button onClick={()=>{
    document.querySelector('#modal122').style="display:flex"
  }}>Войти</button>)}</li>
</ul>

<div className={s.back_black}  id='back_black' onClick={()=>this.closeModalContact()} ></div>
<div className={s.back_black2}  id='back_black2' >
  <div className={s.open_page}>
    <div className={s.close} onClick={()=>this.closeModalContact()} ><MdClose/></div>
<h1>Связаться с нами</h1>
<a href="https://wa.clck.bar/89958882154">
  <button style={{backgroundColor:"rgb(28, 61, 114)",color:"white"}} >Написать в чат</button></a>
<a href="tel:+89958882154">
  <button style={{background:"while",border:'2px solid rgb(28, 61, 114)'}} >Позвонить
  </button></a>
  </div>
</div>

<div className={s.back_user} id='modal122'>
{this.state.key===0?(<div className={s.modal_user}>
  <div className={s.close} style={{userSelect:"none"}} onClick={()=>{
    document.querySelector('#modal122').style="display:none"
  }} >x</div>
<h2>Регистрация</h2>
<label htmlFor="">Электронная почта</label><br />
<input type="text" placeholder='email' id='email' /><br />
<label htmlFor="">Пароль</label><br />
<input type="text" placeholder='password' id='parol' /><br />
<label htmlFor="">Имя пользователя</label><br />
<input type="text" placeholder='Username' id='username' /><br />
<button onClick={()=>{this.registratsiya()}} >Получить код в email</button>
<center><p onClick={()=>{this.setState({key:1})}} style={{cursor:'pointer',textDecoration:'underline'}} >Вход для салонов</p></center>
</div>):(<></>)}
{this.state.key===1?(<div className={s.modal_user}>
  <div className={s.close} style={{userSelect:"none"}} onClick={()=>{
    document.querySelector('#modal122').style="display:none"
  }}>x</div>
<h2>Вход</h2>
<label htmlFor="">Электронная почта</label><br />
<input type="text" placeholder='email' id='email1' /><br />
<label htmlFor="">Пароль</label><br />
<input type="text" placeholder='password' id="parol1" /><br />
<button onClick={()=>{this.login()}} >Вход</button>
<center><p onClick={()=>{this.setState({key:0})}} style={{cursor:'pointer',textDecoration:'underline'}} >Вход для салонов</p></center>
</div>):(<></>)}
{this.state.key===2?(<div className={s.modal_user}>
  <div className={s.close} style={{userSelect:"none"}} onClick={()=>{
    document.querySelector('#modal122').style="display:none"
  }}>x</div>
<h2>Вход</h2>
<label htmlFor="">Электронная почта</label><br />
<input style={{border:'1px solid gray'}} disabled type="text" placeholder='email' value={this.state.email} /><br />
<label htmlFor="">Код из sms</label><br />
<input type="text" id="code" placeholder='code'  /><br />
<label htmlFor="">Отправить код </label>
<button onClick={()=>{this.send_code()}}>Вход</button>
</div>):(<></>)}



</div>


      </div>
    )
  }
}
