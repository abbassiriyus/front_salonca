import React, { useState } from "react";
import ReactDOM from "react-dom";

import {Calendar,momentLocalizer,setLocalizer,Views} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
import url from "../config/host";
import { useEffect } from "react";
let allViews = Object.keys(Views).map((a) => Views[a]);

var localizer=momentLocalizer(moment);
export default function Calendar_page() {
const [selected, setSelected] = useState();
const [data,setData]=useState([])


  useEffect(()=>{
    axios.get(`${url}/api/zakaz`).then(res=>{
        const Filter=res.data.filter(item=>item.user_id==JSON.parse(localStorage.getItem("one_user"))[0].id)
        Filter.map(zakaz=>{
         for (let i = 0; i < Filter.length; i++) {
           var dateE=new Date((Filter[i].day_zakaz).slice(0,4),(Filter[i].day_zakaz).slice(5,7)-1,(Filter[i].day_zakaz).slice(8,10),(Filter[i].time_end).slice(0,2),(Filter[i].time_end).slice(3,5))
           var dateB=new Date((Filter[i].day_zakaz).slice(0,4),(Filter[i].day_zakaz).slice(5,7)-1,(Filter[i].day_zakaz).slice(8,10),(Filter[i].time_start).slice(0,2),(Filter[i].time_start).slice(3,5))
           Filter[i].description=Filter[i].message
           Filter[i].start=dateB
           Filter[i].end=dateE
           Filter[i].allDay=false
         }
        })
        axios.get(`${url}/api/mutahasis`).then(res1=>{
            axios.get(`${url}/api/filyal`).then(res2=>{
                for (let j = 0; j < Filter.length; j++) {
                    for (let d = 0; d < res1.data.length; d++) {
                      if(Filter[j].mutahasis_id==res1.data[d].id){
                        Filter[j].filial_id=res1.data[d].filial_id
                      }
                    }
                  }
                  for (let i = 0; i < Filter.length; i++) {
                    for (let n = 0; n < res2.data.length; n++) {
                      if(Filter[i].filial_id==res2.data[n].id){
                        Filter[i].title=res2.data[n].name
                       }
                    }
                  }
                  setData(Filter)
                  
            })
        })
    })
  },[])
//   const events = [
//     {
//       id: 0,
//       name: "Holiday",
//       description: "this is description",
//       allDay: true,
//       start: new Date(2022, 9, 7),
//       end: new Date(2022, 9, 7)
//     }
//   ];

  const events = data
  const event = ({ event }) => {
    return (
      <div>
        {event.title} <br /> <small>{event.description}</small>{" "}
      </div>
    );
  };
  const handleSelected = (event) => {
    setSelected(event);
    console.info('[handleSelected - event]', event);
  };
  return (
    <div className="" style={{ minHeight: 580 }}>
      <Calendar
      localizer={localizer}
        events={events}
        onSelectEvent={(e)=>handleSelected(e)}
        views={allViews}
        step={60}
        showMultiDayTimes
        
        defaultDate={new Date()}
        style={{ minHeight: 580 }}
        components={{
          event: event
        }}
      />
    </div>
  );

    }