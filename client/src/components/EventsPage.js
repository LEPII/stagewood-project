import { useEffect } from "react";
import { Card, Image } from "semantic-ui-react";
import "../styles/welcome.css";
import ErrorImage from "../styles/assets/errorImg.png";
import { useHistory } from "react-router-dom";
import Aos from "aos";

const EventsPage = ({ event, id }) => {
  const history = useHistory();



  const handleClick = () => {
    history.push({
      pathname: `/search/${id}`,
      search: `?query=${id}`,
      state: { event: event },
    });
    document.title = `Stagewood ${event.title}`;
  };

  return (
    <>
      <div className="cards__item__container">
        <Card onClick={() => handleClick(id)} className="cards__item__card">
          <Image src={event.source} onError={(e)=>{e.target.onerror = null; e.target.src = ErrorImage;}} className="cards__item__img" />
          <Card.Content className="cards__item__info">
            <Card.Header className="cards__item__text">
              {event.title}
            </Card.Header>
          </Card.Content>
        </Card>
      </div>
    </>
  );
};

export default EventsPage;
