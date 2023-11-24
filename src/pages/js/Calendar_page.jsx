import React, { useState } from "react";
import ReactDOM from "react-dom";

import {Calendar,momentLocalizer,setLocalizer,Views} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
let allViews = Object.keys(Views).map((k) => Views[k]);

var localizer=momentLocalizer(moment);
export default function Calendar_page() {
const [selected, setSelected] = useState();
  const events = [
    {
      id: 0,
      name: "Holiday",
      description: "this is description",
      allDay: true,
      start: new Date(2022, 9, 7),
      end: new Date(2022, 9, 7)
    }
  ];
  const event = ({ event }) => {
    return (
      <div>
        {event.name} <br /> <small>{event.description}</small>{" "}
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
        
        defaultDate={new Date(2022, 9, 7)}
        style={{ minHeight: 580 }}
        components={{
          event: event
        }}
      />
    </div>
  );

    }