import React, { Component, useState } from 'react'
import { FaRegUser } from "react-icons/fa"
import { TbMenu2 } from "react-icons/tb"
import {MdClose} from "react-icons/md"
import s from "../css/Navbar_page.module.css"
import axios from 'axios'
import url  from "../config/host"


export default class Navbar_page extends Component {
state={
  modal_var:0,
  email:"test@gmail.com",
key:0
}

registratsiya=()=>{
  var data=new FormData()
  this.setState({email:document.querySelector("#email").value})
  data.append("username",document.querySelector("#username").value)
  data.append("email",document.querySelector("#email").value)
  data.append("password",document.querySelector("#parol").value)
axios.post(`${url}/api/register`,data).then(res=>{
  this.setState({key:2})
}).catch(err=>{
 console.error(err.message)
})
}

send_code=()=>{
  var data=new FormData()
  data.append("code",document.querySelector("#code").value)

axios.post(`${url}/api/verify`,data).then(res2=>{
  axios.get(`${url}/api/users`).then(res=>{
   var a=res.data.filter(item=>item.email==this.state.email)
    localStorage.setItem("one_user",JSON.stringify(a))
    localStorage.setItem("token",res2.data.access)
      window.location='/users'  
    })
}).catch(err=>{
 console.error(err.message)
})
}

login=()=>{
  var data=new FormData()
  data.append("email",document.querySelector("#email1").value)
  data.append("password",document.querySelector("#parol1").value)

axios.post(`${url}/api/login`,data).then(res1=>{
axios.get(`${url}/api/users`).then(res=>{
var a=res.data.filter(item=>item.email==document.querySelector("#email1").value)
localStorage.setItem("one_user",JSON.stringify(a))
localStorage.setItem("token",res1.data.token)
  window.location='/users'  
})
  
}).catch(err=>{
 console.error(err.message)
})
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
componentDidMount(){
  console.log(window.location.pathname);
}
  render() {
    return (
      <div>
<div className={s.navbar_first}>
<a style={{textDecoration:'none',color:'black'}} href="/"><div className={s.logo}>salonca</div></a>
<ul className={s.page}>
<li onClick={()=>this.openModalContact()} >Связаться с нами</li>
<li><a href="/salon">Салонам</a></li>
<li>
  {localStorage.getItem("token")?(<a style={{textDecoration:'none',color:'rgb(28, 61, 114) ',display:'flex',alignItems:'center'}} href='/users'><FaRegUser style={{marginRight:'4px'}} />
   <span style={{position:'relative',top:'2px'}}>Профиль</span>
   </a>):(  <button onClick={()=>{
   document.querySelector('#modal_navbar').style="top:-400px";
   document.querySelector('#modal122').style="display:flex";
  }}>Войти</button>)}
 

  
  </li>
</ul>
<div className={s.page_icons}>
{localStorage.getItem("token")?(<FaRegUser className={s.user_icons} />):(  <></>)}
<TbMenu2 onClick={()=>{this.open_modal()}} />
</div>
</div>
<ul className={s.nav_page} id='modal_navbar'>
<li onClick={()=>this.openModalContact()} >Связаться с нами</li>
<li><a href="/salon">Салонам</a></li>
<li> {localStorage.getItem("token")?(<a style={{textDecoration:'none',color:'rgb(28, 61, 114) ',display:'flex',alignItems:'center',justifyContent:'center'}} href='/users'><FaRegUser style={{marginRight:'4px'}} /> <span style={{position:'relative',top:'2px'}}>Профиль</span></a>):(  <button onClick={()=>{
   document.querySelector('#modal_navbar').style="top:-400px" ;
   document.querySelector('#modal122').style="display:flex";
  }}>Войти</button>)}</li>
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
