import React, { Component } from "react";
import s from "../css/Home_page.module.css"
import { MdKeyboardArrowDown } from "react-icons/md"
import axios from "axios";
import url from "../config/host";
export default class Home_page extends Component {
state={
select_page:'Ваша специализация',
category:''
}

open_modal=()=>{
  document.querySelector('#modal_header').style="display:none"
}
open_modal2=()=>{
  document.querySelector('#modal_header').style="display:block"
}
getCategory=()=>{
  axios.get(`${url}/api/category`).then(res=>{
    console.log(res.data);
this.setState({category:res.data})
  }).catch(err=>{
    console.log(err.message);
  })
}
componentDidMount(){
  this.getCategory()
}
  render() {
    return <div>
        <header className={s.header}>
  <div className={s.black_fon}>
  <div className={s.header_center}>
        <h1>Забронируйте свое рабочее место</h1>
        <p>Быстрый поиск по бьюти салонам города</p>
        <div className={s.header_inputs}>
        <div className={s.header_input} >
          <div className={s.title}  style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}  onClick={()=>{this.open_modal2()}} ><div>{this.state.select_page}</div><MdKeyboardArrowDown/> </div>  
          <div className={s.pages} onMouseLeave={()=>this.open_modal()} id="modal_header" >
           {/* {this.state.category.map((item,key)=>{
            return <div className={s.page_select} onClick={()=>{this.setState({select_page:"Ваша специализация"});document.querySelector('#modal_header').style="display:none"}} >{}</div>
           })} */}
        </div>
        </div>
        <div className={s.header_input}><input type="text" placeholder="Район или метро" /></div>
        <div className={s.header_input}><input type="date" placeholder="Дата" /></div>
        <div className={s.header_input}><input type="button" value="Найти" /></div>
        </div>
       </div>
  </div>
        </header>
<main className={s.second_page} >
  <h2>Популярно прямо сейчас</h2>
<div className={s.cards_home}>
<div className={s.card_h}>
  <h3>INDI</h3>
  <p>Таганская, г Москва, ул Таганская, д 36 к 2</p>
  <p>от 250 ₽/час · <span>от 1 часа</span></p>
  <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2Fy9Nqkao9c_fgHkVORA5Q8ivq8yqs8zTBBj2FlA9ZBf8%2Frs%3Afill%3A327%3A200%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzEyMmEwNjgzLWVlYWEtNGMxMy05YjRlLTNhYTE1ZDlhM2EwMS9iMzRhNzU3NS1iOTM3LTRhZDEtODNkMi1mODlmOWE2ZDA1N2YuanBn.jpg&w=3840&q=75" alt="" />
</div>
<div className={s.card_h}>
  <h3>INDI</h3>
  <p>Таганская, г Москва, ул Таганская, д 36 к 2</p>
  <p>от 250 ₽/час · от 1 часа</p>
  <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2Fy9Nqkao9c_fgHkVORA5Q8ivq8yqs8zTBBj2FlA9ZBf8%2Frs%3Afill%3A327%3A200%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzEyMmEwNjgzLWVlYWEtNGMxMy05YjRlLTNhYTE1ZDlhM2EwMS9iMzRhNzU3NS1iOTM3LTRhZDEtODNkMi1mODlmOWE2ZDA1N2YuanBn.jpg&w=3840&q=75" alt="" />
</div>
<div className={s.card_h}>
  <h3>INDI</h3>
  <p>Таганская, г Москва, ул Таганская, д 36 к 2</p>
  <p>от 250 ₽/час · от 1 часа</p>
  <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2Fy9Nqkao9c_fgHkVORA5Q8ivq8yqs8zTBBj2FlA9ZBf8%2Frs%3Afill%3A327%3A200%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzEyMmEwNjgzLWVlYWEtNGMxMy05YjRlLTNhYTE1ZDlhM2EwMS9iMzRhNzU3NS1iOTM3LTRhZDEtODNkMi1mODlmOWE2ZDA1N2YuanBn.jpg&w=3840&q=75" alt="" />
</div>
<div className={s.card_h}>
  <h3>INDI</h3>
  <p>Таганская, г Москва, ул Таганская, д 36 к 2</p>
  <p>от 250 ₽/час · от 1 часа</p>
  <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2Fy9Nqkao9c_fgHkVORA5Q8ivq8yqs8zTBBj2FlA9ZBf8%2Frs%3Afill%3A327%3A200%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzEyMmEwNjgzLWVlYWEtNGMxMy05YjRlLTNhYTE1ZDlhM2EwMS9iMzRhNzU3NS1iOTM3LTRhZDEtODNkMi1mODlmOWE2ZDA1N2YuanBn.jpg&w=3840&q=75" alt="" />
</div>

</div>
<button className={s.main_button}>Посмотреть все</button>
</main>



    </div>;
  }
}
