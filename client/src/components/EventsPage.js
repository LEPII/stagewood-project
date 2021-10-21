import React from 'react';
import { Card, Image } from "semantic-ui-react";
import "../styles/welcome.css"
import ErrorImage from "../styles/assets/errorImg.png"

const EventsPage = ({event}) => {

  return (
    <>
      <div 
       className="cards__item__container">
        <Card className="cards__item__card">
          <Image src={event.source} className="cards__item__img" />
          <Card.Content className="cards__item__info">
            <Card.Header className="cards__item__text">{event.title}</Card.Header>
          </Card.Content>
        </Card>
      </div>
    </>
  );
}

export default EventsPage
