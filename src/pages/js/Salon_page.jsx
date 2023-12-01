import React, { Component } from "react";
import s from '../css/Salon_page.module.css'
import s1 from '../css/Navbar_page.module.css'

import Navbar_page1 from "./Navbar_page1";
import Footer_page from "./Footer_page";
import axios from "axios";
import url from "../config/host";
export default class Salon_page extends Component {
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
  axios.post(`${url}/api/verify`,data).then(res1=>{
    axios.get(`${url}/api/users`).then(res=>{
     var a=res.data.filter(item=>item.email==this.state.email)
      localStorage.setItem("one_user",JSON.stringify(a))
      localStorage.setItem("token",res1.data.access)
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
  render() {
    return <div>
      <Navbar_page1/>
      <div className={s.head}>
        <div className={s.white}>
        <div className={s.head1}>
         <h1><strong>Зарегистрируйте свои рабочие места и получите стабильный поток  мастеров</strong></h1><br/>
         <p>Регистрация займет не более 5 минут</p>
        </div>
        <div className={s.head2}>
            <div className={s.head2_1}>
            <h3><strong>Зарегистрировать салон</strong></h3>
            <ul>
                <li><i class='bx bx-check-double' style={{color:'#508a45'}}  ></i> Бесплатная регистрация</li>
                <li><i class='bx bx-check-double' style={{color:'#508a45'}}  ></i> Поддержка по телефону</li>
                <li><i class='bx bx-check-double' style={{color:'#508a45'}}  ></i> Удобный календарь с расписанием</li>
            </ul>
            <a href="#"><button onClick={()=>{ this.setState({key:0})
   document.querySelector('#modal_navbar').style="top:-400px";
   document.querySelector('#modal122').style="display:flex";
  
  }} className={s.btn}>Начать регистрацию</button></a><br/>
            <button  onClick={()=>{
   document.querySelector('#modal_navbar').style="top:-400px";
   document.querySelector('#modal122').style="display:flex";
   this.setState({key:1})
  }} className={s.bttn}><a style={{userSelect:'none'}} href="#">Салон уже зарегистрирован</a></button>
       </div> 
    </div>
    </div></div>

    <div className={s.votkak}>
        <div className={s.votkak2}>
        <h3><strong>Вот как все устроено:</strong></h3>
        </div>
        <div className={s.votkak_4}>
        <div className={s.votkak3}>
            <div className={s.vot_img}>
              <i class='bx bx-customize' style={{color:'rgba(7, 44, 104, 0.726)'}}  ></i>
            </div>
            <p>Вы регистрируете свой салон, <br/> указываете расписание и цену</p>
        </div>
         <div className={s.votkak3}>
            <div className={s.vot_img}>
              <i class='bx bx-like' style={{color:'rgba(7, 44, 104, 0.726)'}}  ></i>
            </div>
            <p>Вы регистрируете свой салон, <br/> указываете расписание и цену</p>
        </div>
         <div className={s.votkak3}>
            <div className={s.vot_img}>
              <i class='bx bx-calendar-check' style={{color:'rgba(7, 44, 104, 0.726)'}}  ></i>
            </div>
            <p>Вы регистрируете свой салон, <br/> указываете расписание и цену</p>
        </div>
         <div className={s.votkak3}>
            <div className={s.vot_img }>
              <i class='bx bx-money' style={{color:'rgba(7, 44, 104, 0.726)'}}  ></i>
            </div>
            <p>Вы регистрируете свой салон, <br/> указываете расписание и цену</p>
        </div>
    </div>
        <div class={s.votkak4}>
            <p><a href="#">Правила работы салонов и коворкингов</a></p>
            <p><a href="/tarif">Тарифы для салонов и коворкингов</a></p>
        </div>
    </div>


  
<div className={s1.back_user} id='modal122'>
{this.state.key===0?(<div className={s1.modal_user}>
  <div className={s1.close} style={{userSelect:"none"}} onClick={()=>{
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
{this.state.key===1?(<div className={s1.modal_user}>
  <div className={s1.close} style={{userSelect:"none"}} onClick={()=>{
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
{this.state.key===2?(<div className={s1.modal_user}>
  <div className={s1.close} style={{userSelect:"none"}} onClick={()=>{
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





      <Footer_page/>
    </div>;
  }
}
