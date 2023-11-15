import React, { Component } from "react";
import s from "../css/Footer_page.module.css"
export default class Footer_page extends Component {
  render() {
    return <div>
<div className={s.line}></div>

<div className={s.footer_link}>
    <ul className={s.footer_page}>
<a href="#"><li>Связаться с нами</li></a>
<a href="#"><li>Политика конфиденциальности</li></a>
<a href="#"><li>Условия использования</li></a>
    </ul>
    <div></div>
    <a href="#">@SALONCA, 2023</a>
</div>



    </div>;
  }
}
