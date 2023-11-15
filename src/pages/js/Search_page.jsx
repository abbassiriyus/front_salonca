import React, { Component } from "react";
import Navbar_page from "./Navbar_page"
import Footer_page from "./Footer_page"
import s from "../css/Search_page.module.css"
import axios from "axios";
import url from "../config/host";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai"
export default class Search_page extends Component {
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
<div className={s.title_page}>
    <h1>Найдено: {this.state.filyal.length} салонов</h1>
    <div></div>
    <div></div> 
    <button>Показать на карте</button>
</div>
<div className={s.search_body}>
<div className={s.search_filter}>
  <label htmlFor="">Специализация</label>
<div className={s.header_input} >
          <div className={s.title}  style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} 
           onClick={()=>{this.open_modal2()}} ><div>{this.state.select_page}</div><MdKeyboardArrowDown/> </div>  
          <div className={s.pages} onMouseLeave={()=>this.open_modal()} id="modal_header" >
           {this.state.category.map((item,key)=>{
            return <div className={s.page_select} onClick={()=>{this.setState({select_page:item.category});
            document.querySelector('#modal_header').style="display:none"}} >{item.category}</div>
           })} 
        </div>
        </div> 
<label htmlFor="">Цена (руб/ч)
</label>
<div className={s.sena_inputs}>  
    <input type="text" placeholder="300" className={s.sena_input} /> <AiOutlineMinus/> <input placeholder="30000"  type="text" className={s.sena_input} />
</div>
<label htmlFor="">Дата</label><br />
<input type="date" className={s.date_time} /><br />
<label htmlFor="">Метро</label><br />
<div className={s.input_div}></div>
<label htmlFor="">Район</label><br />
<div className={s.input_div}></div>
<label htmlFor="">Особенности</label><br />
<div className={s.filter_check}>
  <input type="checkbox" /> <span>Есть парковка</span>
</div>
<div className={s.filter_check}>
  <input type="checkbox" /> <span>Есть парковка</span>
</div>
<button>Найти</button>
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
  <img src={item.image} alt="" />
</div>
}
})}

</div>

</div>


<Footer_page/>
    </div>;
  }
}
