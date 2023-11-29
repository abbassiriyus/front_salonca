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
select_id:0,
category:[],
filyal:[],
rayon:[],
metro:[],
searchkey:"",
select_data:0,
resultpage_rayon:false,
resultpage_metro:false
}
getProduct=(item)=>{
localStorage.setItem("product",JSON.stringify(item))
window.location="/one"
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
    console.error(err.message);
  })
}
getFillial=()=>{
  axios.get(`${url}/api/filyal`).then(res=>{
this.setState({filyal:res.data})
  }).catch(err=>{
    console.error(err.message);
  })
}

startFilter=()=>{
var senddata={
  "id":this.state.select_id,
  "name":this.state.select_page,
  "date":document.querySelector("#date_time").value,
  "rayonMetro":this.state.select_data,
}
sessionStorage.setItem("filter", JSON.stringify(senddata))
setTimeout(() => {
  window.location="/search"
}, 1000);
}
getMetro=()=>{
  axios.get(`${url}/api/metro`).then(res=>{
    this.setState({metro:res.data})
  })
  }
getRayon=()=>{
    axios.get(`${url}/api/rayon`).then(res=>{
      this.setState({rayon:res.data})
    })
  }
  
value_send=(data)=>{
document.querySelector("#valuesearch").value=data.title
document.querySelector('#page_select').style="display:none"
}

result_control=(key)=>{
  var dostup1=true
  var dostup2=true
for (let i = 0; i < this.state.metro.length; i++) {
if(this.state.metro[i].title.includes(key)){
  dostup1=false
}}
for (let j = 0; j < this.state.rayon.length; j++) {
if(this.state.rayon[j].title.includes(key)){
  dostup2=false
}}
if(dostup1){
  this.setState({resultpage_metro:false})
}else{
  this.setState({resultpage_metro:true})
}
if(dostup2){
  this.setState({resultpage_rayon:false})

}else{
this.setState({resultpage_rayon:true})
}

}

componentDidMount(){ 
  this.getMetro()
  this.getRayon()
  this.getCategory()
  this.getFillial()
 
}



  render(){
    return <div>
      <Navbar_page/>
        <header className={s.header}>
  <div className={s.black_fon}>
  <div className={s.header_center}>
        <h1>Забронируйте свое рабочее место</h1>
        <p>Быстрый поиск по бьюти салонам города</p>
        <div className={s.header_inputs}>
        <div className={s.header_input} id={s.sa} >
          <div className={s.title}  style={{display:'flex',
          justifyContent:'space-between',color: 'rgb(28, 61, 114)',
          alignItems:'center'}}  
          onClick={()=>{this.open_modal2()}} ><div>{this.state.select_page}</div><MdKeyboardArrowDown/> </div>  
          <div className={s.pages} onMouseLeave={()=>this.open_modal()} id="modal_header" >
            
           {this.state.category.map((item,key)=>{
            return <div className={s.page_select} onClick={()=>{this.setState({select_page:item.category,select_id:item.id});
            document.querySelector('#modal_header').style="display:none"}} >{item.category}</div>
           })} 
        </div>
        </div>
        <div className={s.header_input}>
    <input type="text"  id="valuesearch" className={s.border_first} onKeyUp={(e)=>{this.setState({searchkey:e.target.value});document.querySelector('#page_select').style="display:block";this.result_control(e.target.value);}}  style={{background:'none',width:'100%',height:'100%',cursor:'pointer'}}  placeholder="Район или метро" />
          <div id="page_select" style={{display:"none"}} onMouseLeave={()=>{document.querySelector('#page_select').style="display:none"}} className={s.select_data}>
{(this.state.resultpage_metro||this.state.resultpage_rayon)?(
  <div> 
    {this.state.resultpage_rayon?(<div><h3>Район</h3>
            <ul> 
               {this.state.rayon.map((item,key)=>{
                if(item.title.includes(this.state.searchkey)){
              return  <li onClick={()=>{item.type="rayon";this.setState({select_data:item});this.value_send(item)}} >{item.title}</li>
                }
               })}
              </ul></div>):(<div></div>)}
{this.state.resultpage_metro?(<div>  <h3>метро</h3>
           <ul>
           {this.state.metro.map((item,key)=>{
                if(item.title.includes(this.state.searchkey)){
                 return <li onClick={()=>{item.type="metro";this.setState({select_data:item});this.value_send(item)}} >{item.title}</li>
                }
               })}
          </ul></div>):(<div></div>)}
        
          </div>
):(<div style={{textAlign:'center',color:'gray',paddingTop:'20px',paddingBottom:'20px'}}>no result</div>)}

           
          </div>
          
        </div>
        <div className={s.header_input}>
          <input  style={{background:'none',width:'100%',height:'100%',cursor:'pointer'}} type="date" id="date_time" placeholder="Дата" /></div>
        <div className={s.header_input} style={{background:"rgb(59 130 246)",borderRight:'20px'}}>
          <input style={{background:'none',width:'100%',height:'100%',color:'white',fontWeight:'700',fontSize:'20px'}} type="button"  onClick={()=>{this.startFilter()}} value="Найти" /></div>
        </div>
       </div>
  </div>
        </header>
<main className={s.second_page} >

  <h2>Популярно прямо сейчас</h2>
<div className={s.cards_home}>

{this.state.filyal.map((item,key)=>{
if(key<8){
return <div onClick={()=>{this.getProduct(item)}} className={s.card_h}>
  <h3>{item.name}</h3>
  <p style={{display:'flex',alignItems:'center'}}>
    <div style={{borderRadius:'50%'}} className={s.circle}></div>{item.address}</p>
  <p className={s.sena_card} >
    {item.master.length>0?(<div>от {item.master[0].price} ₽/час · <span>от 1 часа</span></div>):(<span>не в рабочем состоянии</span>)}  </p>
    <div className={s.img} style={{background:`url(${item.image})`,backgroundSize:'cover'}} ></div>
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
