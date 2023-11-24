import React, { Component } from "react";
import Navbar_page from "./Navbar_page";
import Footer_page from "./Footer_page";
import s from "../css/User_page.module.css" 
import Calendar_page from "./Calendar_page"
import axios from "axios";
import url from "../config/host";
export default class User_Page extends Component {

  state={
    category:[],
    passwordd:[],
    superAdmin:[],
  }
  

   componentDidMount(){
    axios.get(`${url}/api/users`).then(res=>{
      const Filter=res.data.filter(item=>item.id==JSON.parse(localStorage.getItem("one_user"))[0].id)
      axios.get(`${url}/api/category`).then(cat=>{
            this.setState({category:cat.data})
            Filter.map(item=>{
            this.setState({passwordd:item.password})
            this.setState({superAdmin:item.superadmin})
            document.querySelector("#user_email").value=item.email
            document.querySelector("#user_name").value=item.username
            document.querySelector("#user_phonenumber").value=item.phone
            document.querySelector("#user_category").value=item.category
            })
      })
      
      })
   }

   UserPut=()=>{
    var formdata=new FormData()
    formdata.append("phone",document.querySelector("#user_phonenumber").value)
    formdata.append("password",this.state.passwordd)
    formdata.append("username",document.querySelector("#user_name").value)
    formdata.append("superadmin",this.state.superAdmin)
    formdata.append("email",document.querySelector("#user_email").value)
    formdata.append("category",document.querySelector("#user_category").value)

    axios.put(`${url}/api/users/${JSON.parse(localStorage.getItem("one_user"))[0].id}`,formdata).then(res=>{
    alert("Your information has changed.")
    window.location.reload()
    }).catch(err=>{
      alert("Your information has not changed.")
    })
   }
   Exit=()=>{
    localStorage.clear()
    window.location="/"
   }
  
  render() {
    return <div>
        <Navbar_page/>
<div className={s.users}>
  <div className={s.calendar}>
<Calendar_page/>
  </div>
  <div className={s.form}>
   <div className={s.form_title}><h1>Personal data</h1><button onClick={()=>this.Exit()}>Go Out</button></div>
   <label htmlFor="">
    <p>Email</p>
    <input id="user_email" type="text" disabled/>
   </label>
   <label htmlFor="">
    <p>Name</p>
    <input id="user_name" type="text" />
   </label>
   <label htmlFor="">
    <p>Phone number</p>
    <input id="user_phonenumber" type="text" />
   </label>
   <label htmlFor="">
    <p>Specialization</p>
    <select id="user_category">
      {this.state.category.map(item=>{
      return <option value={item.id}>{item.category}</option>
      })}
    </select>
    <button onClick={()=>this.UserPut()} className={s.form_button}>Save</button>
   </label>
  </div>
</div>
<Footer_page/>
    </div>;
  }
}
