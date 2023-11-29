import React, { Component } from "react";
import Navbar_page from "./Navbar_page"
import Footer_page from "./Footer_page"
import s from "../css/Vibor_page.module.css"
import axios from "axios";
import url from "../config/host";
import s2 from "../css/One_product.module.css"

export default class Vibor_page extends Component {
    state={
        data:[],
        nowdata:JSON.parse(localStorage.getItem("data")),
        nowdata1:'',
        master:{}
    }

Zakaz=()=>{
if(localStorage.getItem('token')){
var data=new FormData()
data.append("time_end",document.querySelector("#end_time").value)
data.append("time_start",document.querySelector("#date_time").value)
data.append("day_zakaz",document.querySelector("#data_day").value)
data.append("mutahasis_id",document.querySelector("#select_master").value)
data.append("message",document.querySelector("#message").value)
data.append("user_id",(JSON.parse(localStorage.getItem('one_user')))[0].id)
axios.post(`${url}/api/zakaz`,data).then(res=>{
  alert("Мы скоро свяжемся с вами. Ваш заказ принят")
  window.location='/'
  }).catch(err=>{
  alert('Информация неполная')
  })


}else{
  alert("Вы не зарегистрированы. Зарегистрируйтесь, чтобы воспользоваться услугой")
}


}

    //  time not null,
    // "" time not null,
    // "" date not null,
    // "" integer not null,
    // "" text not null,
    // "" integer not null,

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
    this.setState({nowdata1:`${year}-${month}-${day}`})
    console.log((this.state.nowdata.time).padStart(5,"0"));
    document.querySelector('#data_day').value=this.state.nowdata.day
    document.querySelector('#date_time').value=(this.state.nowdata.time).padStart(5,"0")
    document.querySelector('#select_master').value=this.state.nowdata.master
    this.setState({master:this.state.nowdata.data})
    }
    


  render() {
    return <div className={s.big_s}>
      <Navbar_page/>
 <div className={s.reg}>
        <div className={s.reg1}>
        <h1><strong>Бронирование</strong></h1><br/>
        <p style={{color:'#283f5e;'}}><strong>{this.state.data.name}</strong></p><br/>
        <p>{this.state.data.address}</p><br/>
        <span>Тип места</span><br/>
        <select name="" id="select_master">
        {this.state.data.master?(this.state.data.master.map((item,key)=>{
          return <option value={item.id}>{item.work}</option>
        })):(<div></div>)}
          
        </select><br/>

     <br/> 
        <div className={s.inp}>
         <div><span>Дата</span><br/>
          <input id="data_day" min={this.state.nowdata1} style={{width: '120px', height: '40px', borderRadius: '6px',border: '1px solid #98c1d9',
    backgroundColor:'transparent',
    paddingLeft: '15px',fontSize: '15px',color:'#3d5a80'}} type="date"/></div> 
    <div>   <span>Время (от)</span><br/>
          <input id="date_time"  style={{width: '120px',height: '40px',borderRadius: '6px',border: '1px solid #98c1d9',backgroundColor: 'transparent', paddingLeft: '15px',fontSize: '15px',color: '#3d5a80'}} type="time"/></div>

    <div>  <span>Время (до)</span><br/>
          <input id="end_time" style={{width: '118px',height: '40px',borderRadius:'6px',border: '1px solid #98c1d9',backgroundColor: 'transparent',paddingLeft: '15px',fontSize: '15px',color: '#3d5a80'}} type="time"/></div>

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
        <textarea id="message" style={{width: '85%', minWidth: '280px', minHeight: '200px', borderRadius: '6px',border: '1px solid #98c1d9',backgroundColor: 'transparent',paddingLeft: '15px',
    fontSize: '15px',color: '#3d5a80',height: '200px'}}  type="text"/><br/>
        <br/><div class="sto">
        <div class="stoimost">
            <p>Стоимость</p>
            <h3 style={{color: '#223e61'}}>{this.state.master.price} ₽</h3>
        </div>
        <div className={s.stoimost2}>
            <button onClick={()=>{this.Zakaz()}} >Забронировать</button>
        </div>
    </div><br/>
    <p class={s.lol}>Нажимая кнопку Забронировать, вы подтверждаете согласие с требованиями салона. Оплата производится на месте по правилам салона</p>
    </div>

<div className={s.sipper12}>

{this.state.data.images?(<swiper-container style={{width:'100%',height:'40vh',minHeight:'200px',maxHeight:'500px'}} id={s2.swipper1} class="mySwiper"
   thumbs-swiper=".mySwiper2" space-between="10" navigation="true">
  {this.state.data.images?(this.state.data.images.map((item,key)=>{
    return <swiper-slide>
     <img src={item.image} alt="img"  />
   </swiper-slide>
  })):(<div>ddd</div>)} 

 </swiper-container>):(<div></div>)} 


 {this.state.data.images?(<swiper-container style={{maxHeight:'200px',width:'100%'}} class="mySwiper2" id={s2.mySwiper21} space-between="10" slides-per-view="4" free-mode="true"
   watch-slides-progress="true">
   {this.state.data.images?(this.state.data.images.map((item,key)=>{
    return <swiper-slide>
     <img src={item.image} alt="img"/>
   </swiper-slide>
  })):(<div>ddd</div>)} 
 </swiper-container>):(<div></div>)}
</div>
    </div>
    <Footer_page/>
    </div>;
  }
}
