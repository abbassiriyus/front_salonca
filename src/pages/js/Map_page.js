import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import s from "../css/Map_page.module.css"
import React, { Component } from "react";
import url from '../config/host.jsx';
import axios from 'axios';
import  Navbar_page  from "./Navbar_page";
import  Footer_page  from "./Footer_page";
export default class Map_page extends Component {
state={
  filyal:[],
  getdata:[],
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
    this.getFillial()
  }
  render() {
    return <div>
       <Navbar_page/>
    <div className={s.cards}>
<div className={s.send_mage} id='modal_first' >
  <div onClick={()=>{this.close_modal()}} className={s.close_s}>x</div>
    {this.state.getdata.length>0?( <div className={s.card_h}>
  <h3>{this.state.getdata[0].name}</h3>
  <p style={{display:'flex',alignItems:'center'}}>
    <div style={{borderRadius:'50%'}} className={s.circle}></div>{this.state.getdata[0].address}</p>
  <p className={s.sena_card} >
    {this.state.getdata[0].master.length>0?(<div>от {this.state.getdata[0].master[0].price} ₽/час · <span>от 1 часа</span></div>):(<span>не в рабочем состоянии</span>)}  </p>
  <img src={this.state.getdata[0].image} alt="" />
</div> ):(<div>
  
</div>)
    }
</div>
    
    <YMaps>
      <div>
        <Map  width={'80vw'}
        height={'70vh'}
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
    <Footer_page/>
    </div>
  }
}
