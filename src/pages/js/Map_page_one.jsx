import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import s from "../css/Map_page.module.css"
import React, { Component } from "react";
import url from '../config/host.jsx';
import axios from 'axios';
import  Navbar_page  from "./Navbar_page.jsx";
import  Footer_page  from "./Footer_page.jsx";
export default class Map_page extends Component {
state={
  filyal:[JSON.parse(localStorage.getItem('product'))],
  getdata:[JSON.parse(localStorage.getItem('product'))],
  color:"#ffff00"
}
  getFillial=()=>{
    axios.get(`${url}/api/filyal`).then(res=>{
  for (let i = 0; i < res.data.length; i++) {
   res.data[i].color='rgba(0, 0, 0, 0.605)'
  } 
  this.setState({filyal:res.data})
  this.setState({getdata:res.data})
    }).catch(err=>{
      console.log(err.message);
    })
  }

  open_modal=(key)=>{
    document.querySelector('#modal_first').style="left:0px"
    var data=this.state.filyal
    for (let index = 0; index < data.length; index++) {
      if(index===key){
        data[index].color="red"    
      }else{
        data[index].color="rgba(0, 0, 0, 0.605)"
      }
      
    }
  }
  close_modal=()=>{
    document.querySelector('#modal_first').style="left:-400px"
  }
  componentDidMount(){
this.open_modal()
  }
  render() {
    return <div>
      
<div className={s.cards} style={{height:"auto",}}  >
<div className={s.send_mage1} style={{height:"auto",maxHeight:"500px"}} id='modal_first' >
    {this.state.getdata.length>0?( <div className={s.card_h}>
  <h3>{this.state.getdata[0].name}</h3>
  <p style={{display:'flex',alignItems:'center'}}>
    <div style={{borderRadius:'50%'}} className={s.circle}></div>{this.state.getdata[0].address}</p>
  <p className={s.sena_card} >
    {this.state.getdata[0].master.length>0?(<div>от {this.state.getdata[0].master[0].price} ₽/час · <span>от 1 часа</span></div>):(<span>не в рабочем состоянии</span>)}  </p>

     <div className={s.img} style={{background:`url(${this.state.getdata[0].image})`,backgroundSize:'cover'}} ></div>
</div> ):(<div>
  
</div>)
    }
</div>
    
    <YMaps>
      <div style={{width:'30vw',height:'20vw',minWidth:'300px',minHeight:'250px',marginTop:'20px'}}>
        <Map  width='100%'
        height="100%"
         defaultState={{ center: [55.751574, 37.573856], zoom: 10 }}>
          {this.state.filyal.map((placemark, index) => (
            <Placemark options={{iconColor:placemark.color}} style={{color:'green',fontSize:'30px',backgroundColor:'red'}} 
            onClick={()=>{this.setState({getdata:[placemark]});this.open_modal(index)}} key={index}
             geometry={[placemark.location,placemark.longuage]}
              properties={{ hintContent: placemark.name }} />
          ))}
        </Map>
      </div>
    </YMaps></div>
    </div>
  }
}
