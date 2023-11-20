import React, { Component } from "react";
import Navbar_page from "./Navbar_page"
import Footer_page from "./Footer_page"
import s from "../css/Search_page.module.css"
import axios from "axios";
import url from "../config/host";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai"
import { RiCloseFill } from "react-icons/ri";
export default class Search_page extends Component {
state={
    select_page:'Ваша специализация',
    category:[],
    filyal:[],
    select_id_category:0,
    minDate:'',
    xususiyat:[],
    metro:[],
    rayon:[],
    rayon1:[],
    metro1:[],
    }
    // start filter oll
filter_master=(data)=>{
    var masiv=data
    var send_data=[]
if(this.state.select_id_category!==0){
    for (let i = 0; i < masiv.length; i++) {
var push=false 
for (let j = 0; j < masiv[i].master.length; j++) {
if(masiv[i].master[j].category===this.state.select_id_category){
push=true
}
}
if(push){
send_data.push(masiv[i])
}}}else{
  send_data=data
}
    return send_data
    }

filter_price=(data)=>{
var min_price=document.querySelector('#min_price').value
var max_price=document.querySelector('#max_price').value
if(min_price.length===0){
min_price=0
}else{
min_price=min_price*1
}
if(max_price.length===0){
max_price=99999999999
}else{
  max_price=max_price*1
}
var result=[]
for (let i = 0; i < data.length; i++) {
if(data[i].master.length>0 && data[i].master[0].price>=min_price && data[i].master[0].price<=max_price){
result.push(data[i])
}
}
return result
}
filter_date=(data12)=>{
  var data=document.querySelector('#date1').value
  var data1=data12
if(data.length>0){
  for (let i = 0; i < data1.length; i++) {
    data1[i].date1=data
}
}else{
  for (let i = 0; i < data1.length; i++) {
    data1[i].date1="сегодня"
  }
}
return data1
}
filter_xususiyat=(data)=>{
  var checked1=[]
  var xus=document.querySelectorAll('.check_x')
  for (let i = 0; i < xus.length; i++) {
if(xus[i].checked){
checked1.push(this.state.xususiyat[i])
}}
  console.log(data,checked1);
var send_data=[]
if(checked1.length>0){
for (let i = 0; i < data.length; i++) {
var dostup=false
  for (let j = 0; j < data[i].xususiyat.length; j++) {
   for (let k = 0; k < checked1.length; k++) {
if(data[i].xususiyat[j].xususiyat_id===checked1[k].id){
dostup=true
}
    }}
  if(dostup){
      send_data.push(data[i])  
  }

}
}else{
send_data=data
}

return send_data
}
open_modal=()=>{
      document.querySelector('#modal_header').style="display:none"
    }
open_modal2=()=>{
      document.querySelector('#modal_header').style="display:block"
    }
getCategory=()=>{
      axios.get(`${url}/api/category`).then(res=>{
    this.setState({category:res.data})
      }).catch(err=>{
        console.log(err.message);
      })
  }
getFillial=()=>{
      axios.get(`${url}/api/filyal`).then(res=>{
        for (let i = 0; i < res.data.length; i++) {
        res.data[i].date1="сегодня"
        }
    this.setState({filyal:res.data})
      }).catch(err=>{
        console.log(err.message);
      })
    }
getXususiyat=()=>{
  axios.get(`${url}/api/xususiyatlar`).then(res=>{
    // console.log(res.data,"x");
    this.setState({xususiyat:res.data})
  })
}
getMetro=()=>{
axios.get(`${url}/api/metro`).then(res=>{
  this.setState({metro:res.data})
  console.log(res.data,"metro");
})
}
open_molal_metro=()=>{
  document.querySelector('#modal3').style="display:block !important"
}
close_molal_metro=()=>{
  document.querySelector('#modal3').style="display:none !important"
  console.log("Ss");
}
getRayon=()=>{
  axios.get(`${url}/api/rayon`).then(res=>{
    this.setState({rayon:res.data})
    console.log(res.data,"rayon");
  })
}

allFilter=()=>{
  axios.get(`${url}/api/filyal`).then(res=>{
    var data=this.filter_master(res.data)
    data=this.filter_xususiyat(data)
    data=this.filter_date(data)
    this.setState({filyal:this.filter_price(data)})
      }).catch(err=>{
        console.log(err.message);
      })
}
metroSelect=(data)=>{
  setTimeout(() => {
    this.close_molal_metro()
  }, 100);
  var sendata=this.state.metro1
  sendata.push(data)
  this.setState({metro1:sendata})
}
    componentDidMount(){
      this.getCategory()
      this.getFillial()
      this.getMetro()
      this.getRayon()
      this.getXususiyat()
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      const formattedDate = `${yyyy}-${mm}-${dd-1}`;
      this.setState({minDate:formattedDate});
    }

  render() {
    return <div>
        <Navbar_page/>
<div className={s.title_page}>
    <h1>Найдено: {this.state.filyal.length} салонов</h1>
    <div></div>
    <div></div> 
   <a style={{textDecoration:'none'}} href="/map"> <button>Показать на карте</button></a>
</div>
<div className={s.search_body}>
<div className={s.search_filter}>
  <label htmlFor="">Специализация</label>
<div className={s.header_input} >
          <div className={s.title}  style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} 
           onClick={()=>{this.open_modal2()}} ><div>{this.state.select_page}</div>
           <MdKeyboardArrowDown/> </div>  
          <div className={s.pages} onMouseLeave={()=>this.open_modal()} id="modal_header" >
           {this.state.category.map((item,key)=>{
            return <div className={s.page_select} onClick={()=>{this.setState({select_page:item.category,select_id_category:item.id});
            document.querySelector('#modal_header').style="display:none"}} >{item.category}</div>
           })} 
        </div>
        </div> 
<label htmlFor="">Цена (руб/ч)
</label>
<div className={s.sena_inputs}>  
    <input type="number" id="min_price" placeholder="300" className={s.sena_input} /> 
    <AiOutlineMinus/>
     <input placeholder="30000"  type="number" id="max_price" className={s.sena_input} />
</div>
<label htmlFor="">Дата</label><br />
<input type="date" min={this.state.minDate} id="date1" className={s.date_time} /><br />
<label htmlFor="">Метро</label><br />
<div onClick={()=>{this.open_molal_metro()}} className={s.input_div}> 
<ul id="modal3" className={s.openpage_metro}>
{this.state.metro.map((item,key)=>{
 return <li onClick={()=>{this.metroSelect(item)}} className={s.metro12}>{item.title}</li>
})}
</ul>
{this.state.metro1.map((item,key)=>{
 return <div className={s.metro1}>{item.title} <div className={s.close}><RiCloseFill /></div></div>
})} <br />
<p>Выберите метро</p>
</div>
<label htmlFor="">Район</label><br />
<div className={s.input_div}>
{this.state.rayon.map((item,key)=>{
 return <div className={s.metro1}>{item.title} <div className={s.close}><RiCloseFill /></div></div>
})} <br />
<p>Выберите район</p>
</div>
<label htmlFor="">Особенности</label><br />
{this.state.xususiyat.map((item,key)=>{
return <div className={s.filter_check}>
  <input type="checkbox" className="check_x" /><span className="check_xt">{item.title}</span>
</div>
})}


<button onClick={()=>{this.allFilter()}} >Найти</button>
</div>
<div className={s.search_cards}>
{this.state.filyal.map((item,key)=>{
if(key<8){
return <div className={s.card_h}>
  <h3>{item.name}</h3>
  <p style={{display:'flex',alignItems:'center'}}>
    <div style={{borderRadius:'50%'}} className={s.circle}></div>{item.address}</p>
  <p className={s.sena_card} >
    {item.master.length>0?(<div>от {item.master[0].price} ₽/час · <span>от 1 часа</span></div>):(<span>не в рабочем состоянии</span>)}  </p>
  <div className={s.dostup_data}>Доступно {item.date1}:</div>
  <div className={s.worktime}>{" "}
    <button>09:50</button>
    <button>09:50</button>
    <button>09:50</button>
    <button>09:50</button>
  </div>
  <img src={item.image} alt="" />
</div>
}
})}

</div>

</div>


<Footer_page/>
    </div>
  }
}
