import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ErrorImage from "../styles/assets/errorImg.png";
import "../styles/eventspage.css";

const EventResults = ({history}) => {

  const location = useLocation();
  const handleReturn = (e) => {
    history.push("/")
  }

  return (
    <>
      <div className="events__container">
        <div className="events__sub_container">
          <img
            src={location.state.event.source}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = ErrorImage;
            }}
            className="events__image"
            alt="Avatar"
          />
          <div className="events__content">
            <h3>Now showing: {location.state.event.title}</h3>
            <p className="events__subcontent">Explore Now</p>
            <button className="events__button" onClick={handleReturn}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventResults;
