import React, { Component } from "react";
import s from '../css/Tarif_page.module.css'
import Navbar_page from "./Navbar_page";
import Footer_page from "./Footer_page";
export default class Tarif_page extends Component {
  render() {
    return <div>
        <Navbar_page/>
        <div class={s.tarif}>
        <h1><strong>Тарифы и условия</strong></h1><br/>
        <p>До 30 сентября использование сервиса бесплатное. С 1 октября для салонов и коворкингов действуют следующие тарифы:</p><br/>
        <h1><strong>1. Ежемесячная плата за оформленные бронирования:</strong></h1><br/>
        <ul>
            <li>0-1 бронирование в месяц - бесплатно</li><br/>
            <li>2-4 бронирования в месяц - 199 руб</li><br/>
            <li>5-9 бронирований в месяц - 499 руб</li><br/>
            <li>10-20 бронирований в месяц - 899 руб</li><br/>
            <li>больше 20 бронирований в месяц - 1599 руб</li>
        </ul><br/>
        <p>Оплата осуществляется путем безналичного перевода по счету. Акт оказанных услуг и счет выставляются в течение 5 рабочих дней после окончания соответствующего календарного месяца. Оплата должна быть произведена до 15 числа месяца получения акта и счета.</p><br/>
        <p>Доступен безлимитный тариф на 3 месяца (любое количество бронирований) - 2599 руб (866 руб/месяц). Оплата осуществляется путем безналичного перевода по счету до 5 числа первого месяца оказываемых услуг.</p><br/>
        <p>Для определения тарифа используются все бронирования, которые оформлены и не отменены клиентом. Если мастер не отменил бронирование и не пришел, для того, чтобы исключить это бронирование из расчета тарифа, необходимо нажать кнопку “Мастер не пришел” в соответствующем бронировании в личном кабинете или написать в службу поддержки +7 993 895 0829.</p><br/>
        <h1><strong>2. Стоимость каждой уникальной заявки на долгосрочную аренду - 59 руб.</strong></h1><br/>
        <p>Для расчета используется не более 1 заявки от каждого мастера.</p><br/>
        <p>Оплата осуществляется путем безналичного перевода по счету. Акт оказанных услуг и счет выставляются в течение 5 рабочих дней после окончания соответствующего календарного месяца. Оплата должна быть произведена до 15 числа месяца получения акта и счета.</p>
    </div>
        <Footer_page/>
        </div>;
  }
}
