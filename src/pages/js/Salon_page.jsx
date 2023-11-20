import React, { Component } from "react";
import s from '../css/Salon_page.module.css'
import Navbar_page1 from "./Navbar_page1";
import Footer_page from "./Footer_page";
export default class Salon_page extends Component {
  render() {
    return <div>
      <Navbar_page1/>
      <div className={s.head}>
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
            <a href="#"><button className={s.btn}>Начать регистрацию</button></a><br/>
            <button className={s.bttn}><a href="#">Салон уже зарегистрирован</a></button>
       </div> 
    </div>
    </div>

    <div className={s.votkak}>
        <div className={s.votkak2}>
        <h3><strong>Вот как все устроено:</strong></h3>
        </div>
        <div className={s.votkak_4}>
        <div className={s.votkak3}>
            <div className={s.vot_img}>
              <i class='bx bx-edit' style={{color:'rgba(7, 44, 104, 0.726)'}}  ></i>
            </div>
            <p>Вы регистрируете свой салон, <br/> указываете расписание и цену</p>
        </div>
         <div className={s.votkak3}>
            <div className={s.vot_img}>
              <i class='bx bx-edit' style={{color:'rgba(7, 44, 104, 0.726)'}}  ></i>
            </div>
            <p>Вы регистрируете свой салон, <br/> указываете расписание и цену</p>
        </div>
         <div className={s.votkak3}>
            <div className={s.vot_img}>
              <i class='bx bx-edit' style={{color:'rgba(7, 44, 104, 0.726)'}}  ></i>
            </div>
            <p>Вы регистрируете свой салон, <br/> указываете расписание и цену</p>
        </div>
         <div className={s.votkak3}>
            <div className={s.vot_img }>
              <i class='bx bx-edit' style={{color:'rgba(7, 44, 104, 0.726)'}}  ></i>
            </div>
            <p>Вы регистрируете свой салон, <br/> указываете расписание и цену</p>
        </div>
    </div>
        <div class={s.votkak4}>
            <p><a href="#">Правила работы салонов и коворкингов</a></p>
            <p><a href="#">Тарифы для салонов и коворкингов</a></p>
        </div>
    </div>

      <Footer_page/>
    </div>;
  }
}
