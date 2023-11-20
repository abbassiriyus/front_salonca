import React, { Component } from "react";
import s from "../css/Home_page.module.css"
import { MdKeyboardArrowDown } from "react-icons/md"
import axios from "axios";
import url from "../config/host.jsx";
import  Navbar_page  from "./Navbar_page.jsx";
import  Footer_page  from "./Footer_page.jsx";

export default class Home_page extends Component {
state={
select_page:'Ваша специализация',
category:[],
filyal:[]
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
getFillial=()=>{
  axios.get(`${url}/api/filyal`).then(res=>{
this.setState({filyal:res.data})
  }).catch(err=>{
    console.log(err.message);
  })
}
componentDidMount(){
  this.getCategory()
  this.getFillial()
}
  render() {
    return <div>
      <Navbar_page/>
        <header className={s.header}>
  <div className={s.black_fon}>
  <div className={s.header_center}>
        <h1>Забронируйте свое рабочее место</h1>
        <p>Быстрый поиск по бьюти салонам города</p>
        <div className={s.header_inputs}>
        <div className={s.header_input} >
          <div className={s.title}  style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}  onClick={()=>{this.open_modal2()}} ><div>{this.state.select_page}</div><MdKeyboardArrowDown/> </div>  
          <div className={s.pages} onMouseLeave={()=>this.open_modal()} id="modal_header" >
            
           {this.state.category.map((item,key)=>{
            return <div className={s.page_select} onClick={()=>{this.setState({select_page:item.category});
            document.querySelector('#modal_header').style="display:none"}} >{item.category}</div>
           })} 
        </div>
        </div>
        <div className={s.header_input}><input type="text"  style={{background:'none',width:'100%',height:'100%'}}  placeholder="Район или метро" /></div>
        <div className={s.header_input}><input  style={{background:'none',width:'100%',height:'100%'}} type="date" placeholder="Дата" /></div>
        <div className={s.header_input} style={{background:"rgb(59 130 246)",borderRight:'20px'}}><input style={{background:'none',width:'100%',height:'100%'}} type="button" value="Найти" /></div>
        </div>
       </div>
  </div>
        </header>
<main className={s.second_page} >

  <h2>Популярно прямо сейчас</h2>
<div className={s.cards_home}>

{this.state.filyal.map((item,key)=>{
if(key<8){
return <div className={s.card_h}>
  <h3>{item.name}</h3>
  <p style={{display:'flex',alignItems:'center'}}>
    <div style={{borderRadius:'50%'}} className={s.circle}></div>{item.address}</p>
  <p className={s.sena_card} >
    {item.master.length>0?(<div>от {item.master[0].price} ₽/час · <span>от 1 часа</span></div>):(<span>не в рабочем состоянии</span>)}  </p>
  <img src={item.image} alt="" />
</div>
}
})}


</div>
<a href="/search" style={{textDecoration:"none"}} className={s.section_two_button} ><button className={s.main_button}>Посмотреть все</button></a>
</main>

<Footer_page/>

    </div>;
  }
}
