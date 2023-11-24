import React, { Component } from "react";
import s from "../css/One_product.module.css"
import  Navbar_page  from "./Navbar_page.jsx";
import  Footer_page  from "./Footer_page.jsx";
import Map_page from "./Map_page_one.jsx";
import url from "../config/host.jsx";
import axios from "axios";

export default class One_product extends Component {
state={
  data:[],
  star:['','','','',''],
  nowdata:'',
  masterid:0,
  one_master:[],
  time:"",
  master:{}
}


send_message=()=>{
var user=JSON.parse(localStorage.getItem("one_user"))
if(user){
var data=new FormData()
data.append("nomer",document.querySelector("#nomer").value)
data.append("ism",document.querySelector("#name1").value)
data.append("creator",user[0].id)
data.append("mutahasis_id",document.querySelector("#master_id").value)
axios.post(`${url}/api/contact`,data).then(res=>{
alert("Мы скоро свяжемся с вами. Ваш заказ принят")
window.location.reload()
}).catch(err=>{
alert('Информация неполная')
})
}else{
alert("Вы не зарегистрированы. Зарегистрируйтесь, чтобы воспользоваться услугой")
}
}

bigclick=(key)=>{
for (let i = 0; i < document.querySelectorAll('.er').length; i++) {
  document.querySelectorAll('.er')[i].style="color:#0e2742;background:white"
}
document.querySelector(`#${key}`).style="background:#0e2742;color:white"
}

Vibor=()=>{
  console.log(this.state.masterid,this.state.time);
if(this.state.masterid!=0&&this.state.time.length>0){
  var data={
    master:this.state.masterid,
    time:this.state.time,
    day:this.state.nowdata,
    data:this.state.master
  }
localStorage.setItem("data", JSON.stringify(data))
window.location="/vibor"
}
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
this.setState({nowdata:`${year}-${month}-${day}`})
document.querySelector('#date11').value=`${year}-${month}-${day}`
document.querySelector('#date112').value=`${year}-${month}-${day}`

}


  render() {
    return <div>  <Navbar_page/>  <div className={s.salonca_head1}>
           <a href="/search"><i class='bx bx-left-arrow-alt'></i>Вернуться назад</a>
       </div>  <div className={s.salonca_head}>
   
       <div className={s.salonca_head2}>
           <h1><strong>{this.state.data.name}</strong></h1>
           <p>{this.state.data.address}<a href="#" onClick={()=>{
    document.querySelector("#page_modal").style="display:flex"
  }}>Посмотреть на карте</a></p>
       </div>
       <div className={s.salonca_head3}>
           <a href="#page_1"><button><strong>Забронировать</strong> </button></a>
       </div>
   </div>




   {this.state.data.images?(<swiper-container id={s.swipper1} class="mySwiper"
   thumbs-swiper=".mySwiper2" space-between="10" navigation="true">
  {this.state.data.images?(this.state.data.images.map((item,key)=>{
    return <swiper-slide>
     <img src={item.image} alt="img"  />
   </swiper-slide>
  })):(<div>ddd</div>)} 

 </swiper-container>):(<div></div>)} 


 {this.state.data.images?(<swiper-container class="mySwiper2" id={s.mySwiper21} space-between="10" slides-per-view="4" free-mode="true"
   watch-slides-progress="true">
   {this.state.data.images?(this.state.data.images.map((item,key)=>{
    return <swiper-slide>
     <img src={item.image} alt="img"/>
   </swiper-slide>
  })):(<div>ddd</div>)} 
 </swiper-container>):(<div></div>)}


<div className={s.btn}>
 <button className={s.nol}><i class='bx bx-stopwatch'></i> от 1 часа</button>
 <button><i class='bx bxs-calendar' ></i> долгосрочная аренда</button>
</div>


<div className={s.opisaniya}>
 <h2><strong>Описание</strong></h2>
 <p>{this.state.data.description}</p><br/>
<h2><strong>Особенности</strong></h2>
<ul>
  {this.state.data.xususiyat?(
    this.state.data.xususiyat.map((item,key)=>{
 return<li><i class='bx bx-check-double' style={{color:'#508a45',marginRight:'10px'}}  ></i>{item.title}</li>
    })
  ):(<div></div>)}

</ul><br/>
<h2><strong>Требования к мастеру</strong></h2>
<p>Уборка рабочего места осуществляется мастером после окончания работы.
</p>
</div>



<div id="page_1" className={s.just}>
   <div className={s.nothingbig}>
     <h2>Тип места</h2>
</div> 
</div>

<div className={s.cards121}>
<table className={s.master_table}>
  <tr>
    <th><span style={{color: '#0e2742'}}>Фото</span></th>
    <th style={{color: '#0e2742'}}>Специализация</th>
    <th> <span style={{color: '#0e2742'}}>Дата: <input type="date" id="date11" onChange={(e)=>{this.setState({nowdata:e.target.value})}} style={{width:'120px',border:'none',outline:'none'}} /></span></th>
    <th><span style={{color: '#0e2742'}}>Цена в час</span></th>
  </tr>
 {this.state.data.master?(this.state.data.master.map((item,key)=>{
 
  return <tr className={s.dr}>
    <td className={s.now}><img src={item.mutahasis_image.length>0?item.mutahasis_image[0].image:''} alt="image" />
    <a onClick={()=>{this.setState({one_master:item});document.querySelector('#modal23').style="display:flex"}} className={s.podrobniy}>Подробнее</a>
    </td>
    <td>{item.work}</td>
    <td className={s.button_td}>  
{item.mutahasis_time.length>0?(item.mutahasis_time.map((item1,key1)=>{
  return <button onClick={()=>{this.bigclick("a"+key+key1)
  ;this.setState({time:item1.time,masterid:item.id,master:item})}} className="er" id={"a"+key+key1} >{item1.time}</button>
})):(<div></div>)}
     
  
  </td>
    <td style={{fontWeight:900,fontSize:'23px',color:'rgb(20, 43, 81)'}}>{item.price} ₽</td>
  </tr>
 })):(<div></div>)}  
  
</table>

<div className={s.media_masters}>

{this.state.data.master?(this.state.data.master.map((item,key)=>{
  return <div className={s.master}>
  <div className={s.image}>
    <div className={s.title}>Фото</div>
    <div style={{display:'block'}}>
    <img src={item.mutahasis_image.length>0?item.mutahasis_image[0].image:''} alt="" /> <br />
    <a onClick={()=>{this.setState({one_master:item});document.querySelector('#modal23').style="display:flex"}} className={s.podrobniy}>Подробнее</a>
    </div>
    <p>Дата: {this.state.nowdata}</p>
  </div>
  <div className={s.spes}>
  <div className={s.title}>Специализация</div>
  <p>{item.work}</p>
  </div>
<div className={s.button}>
{item.mutahasis_time.length>0?(item.mutahasis_time.map((item1,key1)=>{
  return <button onClick={()=>{this.bigclick("b"+key+key1);this.setState({time:item1.time,masterid:item.id})}} className="er" id={"b"+key+key1}>{item1.time}</button>
})):(<></>)}
</div>
<div className={s.sena}>
  <span>Цена за час</span>
  <h4>{item.price} ₽</h4>
</div>
<button style={this.state.time&&this.state.masterid==item.id?{backgroundColor:"#0e2742"}:{backgroundColor:"#0e274280"}} onClick={()=>{this.Vibor()}} className={s.button_one}>Выбрать</button>
</div>
 })):(<></>)}  


</div>


<div className={s.cass}>
<button  style={this.state.time.length>0&&this.state.masterid!=0?{backgroundColor:"#0e2742"}:{backgroundColor:"#0e274280",marginBottom:'30px'}} onClick={()=>{this.Vibor()}} >Выбрать</button>
       <ul style={{listStyle:"none "}}>
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
  {this.state.data.filyal_mark?(
    this.state.data.filyal_mark.map((item,key)=>{
   return  <div style={{position:'relative'}} className={s.ot}>
   <div className={s.otziv22}>
     <p>{item.time_create.slice(8,10)}.{item.time_create.slice(5,7)}.{item.time_create.slice(0,4)}</p>
    
     <span><strong>{item.creator}</strong></span>
     <p>{item.text}</p>
   </div>
   <div style={{position:'absolute',top:'0px',right:'30px'}} className={s.otziv222}>
{this.state.star.map((item1,key1)=>{
  if(item.mark*1>key1){
    return <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#FF0000"></path>
  </svg> 
  }else{
    return <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.10755 0.872559L9.81555 6.12925H15.3428L10.8712 9.37806L12.5792 14.6347L8.10755 11.3859L3.63594 14.6347L5.34395 9.37806L0.87234 6.12925H6.39955L8.10755 0.872559Z" fill="#000000"></path>
    </svg>  
  }

})}

   </div>
 </div>  
    })
  ):(<></>)}
  
 </div>
</div>


<div className={s.nujna}>
 <h1><strong>Нужна долгосрочная аренда?</strong></h1>
 <h3>Оставьте заявку и с вами свяжется специалист для обсуждения деталей</h3><br/>
 <p>Имя</p>
 <input id="name1" type="text" /><br/>
 <p>Номер телефона</p>
 <input placeholder="+7(" id="nomer" type="text"/><br/>
 <p>Специализация</p>
 <select name="" id="master_id">
{this.state.data.master?(this.state.data.master.map((item,key)=>{
return <option value={item.id}>{item.work}</option>
})):(<></>)}   

 </select><br/><br/>
 <button onClick={()=>{this.send_message()}} className={s.btnn}>Отправить заявку</button><br/><br/>
 <h1><strong>Остались вопросы?</strong></h1>
 <h3>Уточним все детали, поможем с выбором или договоримся о просмотре</h3>
 <h1 style={{color: '#316d8fb2'}}>{this.state.data.phone?(this.state.data.phone):(<></>)}</h1>
 {this.state.data.phone?(<a href={"tel:"+this.state.data.phone}><button className={s.button12} >Связаться с нами</button></a> ):(<></>)}

</div>
<div className={s.back_map} id="page_modal">
<div className={s.modal_map} id="map">
  <div className={s.close} onClick={()=>{
    document.querySelector("#page_modal").style="display:none"
  }}>x</div>
 <Map_page /> 
</div>
</div>

<div className={s.one_master}  id="modal23">
  <div className={s.close} onClick={()=>{document.querySelector('#modal23').style="display:none"}}>x</div>
<div className={s.page12}>
<h1 style={{fontSize:'23px',color:'#0e2742',paddingTop:'10px',paddingLeft:'20px'}}>Место для визажиста</h1>
{this.state.one_master.mutahasis_image?(<swiper-container style={{height:'170px',maxWidth:'80%'}} id={s.swipper1} class="mySwiper"
   thumbs-swiper=".mySwiper21" space-between="10" navigation="true">
  {this.state.one_master.mutahasis_image?(this.state.one_master.mutahasis_image.map((item,key)=>{
    return <swiper-slide >
     <img  src={item.image} alt="img"  />
   </swiper-slide>
  })):(<div>ddd</div>)} 

 </swiper-container>):(<div></div>)} 


 {this.state.one_master.mutahasis_image?(<swiper-container style={{maxHeight:'60px',maxWidth:'80%'}}  class="mySwiper21" id={s.mySwiper21} space-between="10" slides-per-view="4" free-mode="true"
   watch-slides-progress="true">
   {this.state.one_master.mutahasis_image?(this.state.one_master.mutahasis_image.map((item,key)=>{
    return <swiper-slide >
     <img src={item.image}  alt="img"/>
   </swiper-slide>
  })):(<div>ddd</div>)} 
 </swiper-container>):(<div></div>)}
<h3 style={{color:'#0e2742',fontSize:'15px'}}>Описание</h3>
<p style={{fontSize:'12px'}}>{this.state.one_master.description}</p>
<span  style={{width:'90%',margin:'auto',display:'flex',gap:'10px',flexWrap:'wrap'}}>Дата: 
<input style={{border:'none',width:'120px',outline:'none'}} type="date" id="date112" />
</span>
<div style={{width:'90%',margin:'auto',display:'flex',gap:'10px',flexWrap:'wrap'}} className={s.button}>
{this.state.one_master.mutahasis_time?(this.state.one_master.mutahasis_time.map((item1,key1)=>{
  return <button onClick={()=>{this.bigclick("b"+key1);this.setState({time:item1.time,masterid:this.state.one_master.id})}} className="er" id={"b"+key1}>{item1.time}</button>
})):(<></>)}
</div>
<div className={s.one_master_buttton}>
<button style={this.state.time&&this.state.masterid==this.state.one_master.id?{backgroundColor:"#0e2742"}:{backgroundColor:"#0e274280"}} onClick={()=>{this.Vibor()}} className={s.button_one}>Выбрать</button>
</div>
</div>

</div>

<Footer_page/>



</div>;
  }
}
