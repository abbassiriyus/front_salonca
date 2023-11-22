import React, { Component } from "react";
import s from "../css/One_product.module.css"
import  Navbar_page  from "./Navbar_page.jsx";
import  Footer_page  from "./Footer_page.jsx";

export default class One_product extends Component {
  render() {
    return <div>  <Navbar_page/>  <div className={s.salonca_head1}>
           <a href="/search"><i class='bx bx-left-arrow-alt'></i>Вернуться назад</a>
       </div>  <div className={s.salonca_head}>
   
       <div className={s.salonca_head2}>
           <h1><strong>Да, Салон</strong></h1>
           <p>Кутузовская, г Москва, Кутузовский пр-кт, д 30, <a href="#">Посмотреть на карте</a></p>
       </div>
       <div className={s.salonca_head3}>
           <a href="#"><button><strong>Забронировать</strong> </button></a>
       </div>
   </div>




     <swiper-container id={s.swipper1} class="mySwiper"
   thumbs-swiper=".mySwiper2" space-between="10" navigation="true">
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2FtYlPKHQFvVF0M6oc9P7LUCR3C3RMzQ4Ptw52a6hFR4s%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC9kZTRhOTYxOS03YzVkLTRjNjgtYTA4OS1mNjE5YTkzMjc5NTYuanBn.jpg&w=3840&q=75" alt="img"  />
   </swiper-slide>
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2Ffi1a_dIYj_Z4ewnkjTX8BWXgJlouKDjCz_uVfot0X_Y%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC85NTE0NDlkMS0wMTJkLTQzM2QtODhkZC1lY2Y0ZDA2YjliZWUuanBn.jpg&w=3840&q=75" alt="img"  />
   </swiper-slide>
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2FU8ayMz7CPtfhNgdRxOLROmGNzW7zEvnmAGC-wW27h9o%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC84MDA4NWY2MC1jOTUwLTQzMGMtYWMyNS1lYjAwNzA2MmUwNTguanBn.jpg&w=3840&q=75" alt="img"  />
   </swiper-slide>
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2FcAK3eeqiTV45Kv5Nnhjc6-QeoDnjqpo0ZHCSePpoIyo%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC8xYzc5YTZkOC03YjM1LTQ1M2MtYTJkZS00N2QyZjRmMjM1ZGQuanBn.jpg&w=3840&q=75" alt="img"  />
   </swiper-slide>
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2Flo5xki7yHdOlgoSXqOzLsjfxNMyui6pRxjNQAMJIaK4%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC83ODFjMTc0NC1lYmMzLTRkNzQtOGI0ZC0zNDBjNzdlYmVmNGYuanBn.jpg&w=3840&q=75" alt="img"  />
   </swiper-slide>
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2FTSz2Y9FRWbJF_PwBG0jV-pYZ1BX-aNC9_nzsf7W_qyA%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC9iNDE4NzY5ZC00YWQyLTQ4ZTUtYmJjOS00ZjNlZjBjZWY3ZGQuanBn.jpg&w=3840&q=75" alt="img"  />
   </swiper-slide>
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2FxeePZuBO_2D67cldkQRF3YI_aOI0Ia7O-PTU4Pzx-pQ%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC9mYTBhZGIxZS04Y2U3LTRhMzgtOTQ2Mi1jNzhlZDM2MzNlYjYuanBn.jpg&w=3840&q=75" alt="img"  />
   </swiper-slide>
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2FJqiyIHWNUGUlQyUVoNFAU-hkTt5mzvGcLyiDYj9dpvM%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC9lZDAyNTUyYS04N2NjLTRkY2MtODMxNi0zN2I4ZTY5MGExYjUuanBn.jpg&w=3840&q=75" alt="img"  />
   </swiper-slide>
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2F-DCN2_0N2MwJi776QUlfiIVtqcbHr6iqT7_M8l7ZYfs%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC9lNzYyN2NhOC1iYmE4LTQzNDAtOGIzNS00ZjQzMTQ3ZDdmNzUuanBn.jpg&w=3840&q=75" alt="img"  />
   </swiper-slide>
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2F_tnQ6As0JbAqw9NCD3Tcu7sHUTp7tGKxOcMoVdBOPLs%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC8wY2FlMTdhYy1iNGYwLTQyM2EtYjg2Yy04NGU3ZmYwNWJhYTQuanBn.jpg&w=3840&q=75" alt="img"  />
   </swiper-slide>
 </swiper-container>


 <swiper-container class="mySwiper2" id={s.mySwiper21} space-between="10" slides-per-view="4" free-mode="true"
   watch-slides-progress="true">
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2FHMELV_fkUTynqZQ4lbej4co-yHf-BN6ZyttFdJeA5n8%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC9lZTRlYTdjOS0xZGU2LTQ4MWUtYTMxOC0zZmQzMmQ4NDZjY2MuanBn.jpg&w=3840&q=75" alt="img"  />
   </swiper-slide>
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2FqUXjbJNBxyqGCQrOOLDIC_6SkOxmGKG4zUK9JD2wi9o%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC82MDg5ZDRhMi1iZmNjLTRkZTItYjEwOC1jZWZkNzAyMGFiOTEuanBn.jpg&w=3840&q=75" alt="img"  />
   </swiper-slide>
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2FU8ayMz7CPtfhNgdRxOLROmGNzW7zEvnmAGC-wW27h9o%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC84MDA4NWY2MC1jOTUwLTQzMGMtYWMyNS1lYjAwNzA2MmUwNTguanBn.jpg&w=3840&q=75" alt="img"  />
   </swiper-slide>
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2FcAK3eeqiTV45Kv5Nnhjc6-QeoDnjqpo0ZHCSePpoIyo%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC8xYzc5YTZkOC03YjM1LTQ1M2MtYTJkZS00N2QyZjRmMjM1ZGQuanBn.jpg&w=3840&q=75" alt="img"  />
   </swiper-slide>
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2Flo5xki7yHdOlgoSXqOzLsjfxNMyui6pRxjNQAMJIaK4%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC83ODFjMTc0NC1lYmMzLTRkNzQtOGI0ZC0zNDBjNzdlYmVmNGYuanBn.jpg&w=3840&q=75" alt="img"  />
   </swiper-slide>
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2FTSz2Y9FRWbJF_PwBG0jV-pYZ1BX-aNC9_nzsf7W_qyA%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC9iNDE4NzY5ZC00YWQyLTQ4ZTUtYmJjOS00ZjNlZjBjZWY3ZGQuanBn.jpg&w=3840&q=75" alt="img"  />
   </swiper-slide>
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2FxeePZuBO_2D67cldkQRF3YI_aOI0Ia7O-PTU4Pzx-pQ%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC9mYTBhZGIxZS04Y2U3LTRhMzgtOTQ2Mi1jNzhlZDM2MzNlYjYuanBn.jpg&w=3840&q=75" alt="img"  />
   </swiper-slide>
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2FJqiyIHWNUGUlQyUVoNFAU-hkTt5mzvGcLyiDYj9dpvM%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC9lZDAyNTUyYS04N2NjLTRkY2MtODMxNi0zN2I4ZTY5MGExYjUuanBn.jpg&w=3840&q=75" alt="img"  />
   </swiper-slide>
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2F-DCN2_0N2MwJi776QUlfiIVtqcbHr6iqT7_M8l7ZYfs%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC9lNzYyN2NhOC1iYmE4LTQzNDAtOGIzNS00ZjQzMTQ3ZDdmNzUuanBn.jpg&w=3840&q=75" alt="img"  />
   </swiper-slide>
   <swiper-slide>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2F_tnQ6As0JbAqw9NCD3Tcu7sHUTp7tGKxOcMoVdBOPLs%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC8wY2FlMTdhYy1iNGYwLTQyM2EtYjg2Yy04NGU3ZmYwNWJhYTQuanBn.jpg&w=3840&q=75" alt="img" />
   </swiper-slide>
 </swiper-container>


<div className={s.btn}>
 <button className={s.nol}><i class='bx bx-stopwatch'></i> от 1 часа</button>
 <button><i class='bx bxs-calendar' ></i> долгосрочная аренда</button>
</div>


<div className={s.opisaniya}>
 <h2><strong>Описание</strong></h2>
 <p>Аренда рабочих мест и отдельного кабинета для парикмахеров-стилистов, бровистов, визажистов, гримеров, массажистов, косметологов, тату-мастеров Стоимость: 350 руб/час Возможна аренда по сменам Да, салон! Коворкинг-пространство— это: — полностью оборудованное рабочее место или отдельный кабинет с кушеткой: зеркала с подсветкой, удобные кресла, мобильная тележка, локеры для хранения, мойка — аренда зала под бьюти-мероприятия и мастер-классы — уникальный яркий дизайн помещения, кольцевые лампы, локации для фото — вы сможете снимать контент для своих соцсетей — удобное расположение и парковка — доброжелательная атмосфера — отзывчивый персонал — приятная музыка — чай/кофе и конфетки, журналы и книги в зоне ожидания для ваших клиентов —бесплатная Wi-Fi сеть Если вы бьюти-мастер и ищете рабочее место без начальства и переплат за аренду, то мы ждем вас в «Да, салон!» Так же в салоне доступна почасовая и длительная аренда рабочих кабинетов для парикмахеров, косметологов, массажистов и тату-мастеров. Мы работаем ежедневно с 9:00 до 23:00 💛 Онлайн-бронирование Вы всегда можете выбрать нужное место и забронировать его онлайн
</p><br/>
<h2><strong>Особенности</strong></h2>
<ul>
 <li><i class='bx bx-check-double' style={{color:'#508a45'}}  ></i> Профессиональные материалы по запросу</li>
 <li><i class='bx bx-check-double' style={{color:'#508a45'}}  ></i> Есть администратор</li>
 <li><i class='bx bx-check-double' style={{color:'#508a45'}}  ></i> Зона ожидания для гостей</li>
 <li><i class='bx bx-check-double' style={{color:'#508a45'}}  ></i> Кухня для сотрудников</li>
</ul><br/>
<h2><strong>Требования к мастеру</strong></h2>
<p>Уборка рабочего места осуществляется мастером после окончания работы.
</p>
</div>



<div className={s.just}>
   <div className={s.nothingbig}>
     <h2>Тип места</h2>
   <div className={s.nothing}>
       <div className={s.nothing_1}>
           <div className={s.no}>
               <span style={{color: '#98c1d9'}}>Фото</span><br/><br/>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2FcAK3eeqiTV45Kv5Nnhjc6-QeoDnjqpo0ZHCSePpoIyo%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC8xYzc5YTZkOC03YjM1LTQ1M2MtYTJkZS00N2QyZjRmMjM1ZGQuanBn.jpg&w=1280&q=75" alt="image" />

           </div>
           <div className={s.no1}>
               <ul>
                   <li style={{color: '#98c1d9'}}>Специализация</li><br/>
               <li>Стилист- <br/> парикмахер</li>
       
               </ul>
           </div>
       </div>
       <div className={s.nothing_2}>
           <div className={s.lalala}>
               <br/>
           <span style={{color: '#98c1d9'}}>Дата: <a href="#">14.11.2023</a></span><br/><br/>
    
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     
     <button className={s.vibr} >Выбрать</button>
   </div>
   <div className={s.lalala1}><br/>
       <span style={{color: '#98c1d9'}}>Цена в час</span><br/><br/>
     <h3 style={{color: '#3d5a80'}}><strong>350 ₽</strong></h3>
   </div>
   
 
       </div>

   </div><br/>
 

      <div className={s.nothing}>
       <div className={s.nothing_1}>
           <div className={s.no}>
               <span style={{color: '#98c1d9'}}>Фото</span><br/><br/>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2FcAK3eeqiTV45Kv5Nnhjc6-QeoDnjqpo0ZHCSePpoIyo%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC8xYzc5YTZkOC03YjM1LTQ1M2MtYTJkZS00N2QyZjRmMjM1ZGQuanBn.jpg&w=1280&q=75" alt="image" />

           </div>
           <div className={s.no1}>
               <ul>
                   <br/><br/>
               <li>Визажист</li>
               </ul>
           </div>
       </div>
       <div className={s.nothing_2}>
           <div className={s.lalala}>
               <br/><br/><br/>
    
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
     <button>09:00</button>
    
     <button className={s.vibr} >Выбрать</button>
   </div>
   <div className={s.lalala1}>
<br/><br/> 
     <h3 style={{color:'#3d5a80',paddingLeft:'40px'}}><strong>350 ₽</strong></h3>
   </div>
   
 
       </div>
   
   </div><br/>

      <div className={s.nothing}>
       <div className={s.nothing_1}>
           <div className={s.no}>
               <span style={{color: '#98c1d9'}}>Фото</span><br/><br/>
     <img src="https://salonca.ru/_next/image?url=https%3A%2F%2Fsalonca.ru%2Fimages%2FcAK3eeqiTV45Kv5Nnhjc6-QeoDnjqpo0ZHCSePpoIyo%2Frs%3Aauto%3A886%3A420%3A1%2Fmh%3A420%2Fdpr%3A2%2Fg%3Ace%2FczM6Ly9zYWxvbmNhLWRldi1idWNrZXQvaW1hZ2VzLzY3MTlmMmNhLTM2YjQtNGQyYi1iYmIwLWZjYWYxZDg2ZjVjNC8xYzc5YTZkOC03YjM1LTQ1M2MtYTJkZS00N2QyZjRmMjM1ZGQuanBn.jpg&w=1280&q=75" alt="image" />

           </div>
           <div className={s.no1}>
               <ul>
                   <li style={{color: '#98c1d9'}}>Специализация</li><br/>
        <li>Визажист</li>
        <li>Косметолог</li>
        <li>Специалист по <br/> наращиванию <br/> ресниц</li>
        <li>Массажист</li>
        <li>Мастер <br/> перманентного <br/> макияжа</li>
        <li>Стилист- <br/> парикмахер</li>
        <li>(кабинет)</li>
               </ul>
           </div>
       </div>
       <div className={s.nothing_2}>
           <div className={s.lalala}>
           
    <p style={{color: '#3d5a80'}}>Выберите дату, чтобы увидеть <br/> доступное время</p>
  
   </div>
   <div className={s.lalala1}>
      

   </div>
   
 
       </div>

   </div>
   
</div>


         <div className={s.not}>
       <button>Выбрать</button>
       <ul>
           <li><i class='bx bx-check-double' style={{color:'#259a42'}}  ></i> Бронируйте сейчас — платите потом!</li>
           <li><i class='bx bx-check-double' style={{color:'#259a42'}}  ></i> Бесплатная отмена</li>
           <li><i class='bx bx-check-double' style={{color:'#259a42'}}  ></i> Никаких скрытых платежей и комиссий</li>
       </ul>
   </div>


</div>

<div className={s.otzivi}>
 <div class={s.otziv1}>
   <h1><strong>Отзывы</strong> </h1>
 </div>
 <div className={s.otziv2}>
   <div className={s.ot}>
   <div className={s.otziv22}>
     <p>12.06.2023</p>
     <span><strong>Алла</strong> </span>
     <p>Все отлично !</p>
   </div>
   <div className={s.otziv222}>
     <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
   </div>
 </div>
     <div className={s.ot}>
   <div className={s.otziv22}>
     <p>12.06.2023</p>
     <span><strong>Алла</strong> </span>
     <p>Все отлично !</p>
   </div>
   <div className={s.otziv222}>
     <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
   </div>
 </div>
     <div className={s.ot}>
   <div className={s.otziv22}>
     <p>12.06.2023</p>
     <span><strong>Алла</strong> </span>
     <p>Все отлично !</p>
   </div>
   <div className={s.otziv222}>
     <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
   </div>
 </div>
 <div className={s.ot}>
   <div className={s.otziv22}>
     <p>11.06.2023   <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg></p>
     <span><strong>Марина</strong> </span>
     <p>Все очень понравилось 🥰 прекрасный дружелюбный персонал . Хорошее расположение . Мне оооочень понравилось у вас . Буду вашим постоянным клиентом 🥰</p>
   </div>
   <div className={s.otziv222}>
     
   </div>
 </div>
 <div className={s.ot}>
   <div className={s.otziv22}>
     <p>05.06.2023</p>
     <span><strong>Татьяна</strong> </span>
     <p>Всё замечательно)</p>
   </div>
   <div className={s.otziv222}>
     <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#E60000"></path>
</svg>
   </div>
 </div>
 </div>
</div>


<div className={s.nujna}>
 <h1><strong>Нужна долгосрочная аренда?</strong></h1>
 <h3>Оставьте заявку и с вами свяжется специалист для обсуждения деталей</h3><br/>
 <p>Имя</p>
 <input type="text" /><br/>
 <p>Номер телефона</p>
 <input placeholder="+7(" type="text"/><br/>
 <p>Специализация</p>
 <select name="" id="">
   <option value="">Ваша специализация</option>
   <option value="">стилист парикхмахер</option>
   <option value="">визажист</option>
   <option value="">Косметолог</option>
   <option value="">мастер ногтевого сервиса</option>
   <option value="">массажист</option>
   <option value="">мастер перманентного макияжа</option>
   <option value="">барбер</option>
 </select><br/><br/>
 <button className={s.btnn}>Отправить заявку</button><br/><br/>
 <h1><strong>Остались вопросы?</strong></h1>
 <h3>Уточним все детали, поможем с выбором или договоримся о просмотре</h3>
 <h1 style={{color: '#316d8fb2'}}>+7 993 895-08-29</h1>
 <button className={s.button12} >Связаться с нами</button>
</div>
<Footer_page/>
</div>;
  }
}
