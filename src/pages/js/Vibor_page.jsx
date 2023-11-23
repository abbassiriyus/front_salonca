import React, { Component } from "react";
import s from "../css/Vibor_page.module.css"
// import required modules
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
export default class Vibor_page extends Component {
    state={
        data:[],
        thumbsSwiper:null
}

componentDidMount(){

    var data1=JSON.parse(localStorage.getItem('product'))?JSON.parse(localStorage.getItem('product')):[]
    data1.images.unshift({"image":data1.image})
    setTimeout(() => {
      this.setState({data:data1})
    }, 100);
    var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
    
    if (month.length < 2){month = '0' + month;}
    
    if (day.length < 2){day = '0' + day;} 
    this.setState({nowdata:`${day}.${month}.${year}`})
    
    }
    


  render() {
    return <div className="big_s">
 <div className={s.reg}>
        <div className={s.reg1}>
        <h1><strong>Бронирование</strong></h1><br/>
        <p style={{color: '#283f5e;'}}><strong>Да, Салон</strong></p><br/>
        <p>Кутузовская, г Москва, Кутузовский пр-кт, д 30</p><br/>
        <span>Тип места</span><br/>
        <select name="" id="">
          <option value="">Стилист-парикмахер</option>
          <option value="">Визажист</option>
          <option value="">Визажист, Косметолог, Специалист по </option>
          <option value="">наращиванию ресниц, Массажист,</option>
          <option value=""> Мастер перманентного макияжа,</option>
          <option value="">Стилист-парикмахер</option>
        </select><br/>

     <br/> 
        <div className={s.inp}>
         <div><span>Дата</span><br/>
          <input style={{width: '120px', height: '40px', borderRadius: '6px',border: '1px solid #98c1d9',
    backgroundColor:'transparent',
    paddingLeft: '15px',fontSize: '15px',color:'#3d5a80'}} type="date"/></div> 
    <div>   <span>Время (от)</span><br/>
          <input style={{width: '120px',height: '40px',borderRadius: '6px',border: '1px solid #98c1d9',backgroundColor: 'transparent', paddingLeft: '15px',fontSize: '15px',color: '#3d5a80'}} type="time"/></div>

    <div>  <span>Время (до)</span><br/>
          <input style={{width: '118px',height: '40px',borderRadius:'6px',border: '1px solid #98c1d9',backgroundColor: 'transparent',paddingLeft: '15px',fontSize: '15px',color: '#3d5a80'}} type="time"/></div>

        </div>
       <br/> <span>Имя</span><br/>
        <input style={{width: '85%', minWidth: '280px', height: '50px',borderRadius: '6px',
    border: '1px solid #98c1d9',
    backgroundColor: 'transparent',
    paddingLeft: '15px',
    fontSize: '15px',
    color: '#3d5a80'}} type="text"/><br/>
        <br/><span>Номер телефона</span><br/>
        <input style={{width: '85%', minWidth: '280px', height: '50px', borderRadius: '6px',
    border: '1px solid #98c1d9',
    backgroundColor: 'transparent',
    paddingLeft: '15px',
    fontSize: '15px',color: '#3d5a80'}} type="text"/><br/>
        <br/><span>Комментарий</span><br/>
        <input style={{width: '85%', minWidth: '280px', minHeight: '200px', borderRadius: '6px',border: '1px solid #98c1d9',backgroundColor: 'transparent',paddingLeft: '15px',
    fontSize: '15px',color: '#3d5a80',height: '200px'}}  type="text"/><br/>
        <br/><div class="sto">
        <div class="stoimost">
            <p>Стоимость</p>
            <h3 style={{color: '#223e61'}}>350 ₽</h3>
        </div>
        <div class="stoimost2">
            <button>Забронировать</button>
        </div>
    </div><br/>
    <p class="lol">Нажимая кнопку Забронировать, вы подтверждаете согласие с требованиями салона. Оплата производится на месте по правилам салона</p>
    </div>

<div className={s.sipper12}>
<Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: this.state.thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={this.setState({})}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
</div>
    </div>
    </div>;
  }
}
