import React, { useEffect, useState } from "react";
import Image from "../styles/assets/ticket.jpeg";
import "../styles/eventspage.css"
const EventResults = () => {
  const [eventResult, setEventResult] = useState([]);


  return (
    <div className="BxCard">
      <div className="imgBx">
        <img src={Image} className="BxImg"alt="Avatar" />
      </div>
      <div className="contentBx">
        <h3>
examples
        </h3>
        <p className="price">Architect Engineer</p>
        <p className="buy">Explore Now</p>
      </div>
    </div>
  );
};

export default EventResults;
