import React, { useState } from "react";
import EventsPage from "./EventsPage";
import { useQuery, gql } from "@apollo/react-hooks";
import "../styles/welcome.css";

const GETEVENT = gql`
  query Query {
    getEvents {
      source
      id
      title
      startDate
    }
  }
`;

const WelcomePage = ({ history }) => {
  
  const [currentEvent, setCurrentEvent] = useState([]);
  const [userInputValue, setUserInputValue] = useState(" ");
  const [filter, setFilter] = useState([]);

  const { loading, error } = useQuery(GETEVENT, {
    onCompleted({ getEvents }) {
      setCurrentEvent(getEvents);
    },
  });

  const handleChange = (e) => {
    e.preventDefault();
    const eventInput = e.target.value.toLowerCase().trim();
    setUserInputValue(eventInput);
    if (eventInput.length < 1) {
      setUserInputValue([]);
      return;
    }
    const newArray = currentEvent.filter((e) => {
      const name = `${e.title}`;
      return name.toLowerCase().includes(eventInput);
    });
    if (newArray.length < 1) {
      setUserInputValue([]);
    } else {
      setUserInputValue(newArray);
    }
  };

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    history.push(`/search${id}`);
  };

  function handleSorting (sort) {
    switch (sort) {
      case "1":
        const array = [...currentEvent].sort((a, b) => {
          const nameA = a.title.toLowerCase();
          const nameB = b.title.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        return setCurrentEvent(array);
      case "2":
        const newArray = [...currentEvent].sort((a, b) => {
          const nameA = a.title.toLowerCase();
          const nameB = b.title.toLowerCase();
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        });
        return setCurrentEvent(newArray);
      case "3":
        const newDateArray = [...currentEvent].sort((a, b) => {
          const nameA = a.startDate;
          const nameB = b.startDate;
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        });
        return setCurrentEvent(newDateArray);
      case "4":
        const newDateArrayTwo = [...currentEvent].sort((a, b) => {
          const nameA = a.startDate;
          const nameB = b.startDate;
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        return setCurrentEvent(newDateArrayTwo);
      default:
        break;
    }
  }

  const filteredEvent = currentEvent?.filter((event) => {
     return event.title.toLowerCase().includes(userInputValue);
   });
  



  console.log(userInputValue)
  console.log(currentEvent);
console.log(filteredEvent);
  return (
    <>
      <div className="wp__container">
        <h1 className="wp__header"> Search For Your Favorite Events! </h1>
        <form>
          <div className="searchContainer">
            <input
              className="searchInput"
              type="text"
              placeholder="Harry Potter"
              onChange={(event) => handleChange(event)}
            />
            <div className="search"></div>
          </div>
          <div className="button__container">
            <button
              className="button"
              type="button"
              onClick={() => handleSorting("1")}
            >
              A-Z
            </button>
            <button
              className="button"
              type="button"
              onClick={() => handleSorting("2")}
            >
              Z-A
            </button>
            <button
              className="button"
              type="button"
              onClick={() => handleSorting("3")}
            >
              Newest
            </button>
            <button
              className="button"
              type="button"
              onClick={() => handleSorting("4")}
            >
              Oldest
            </button>
          </div>
        </form>
        {loading && <div className="wp__loader">Fetching...</div>}
        {error && <div>There was an error fetching the data.</div>}
      </div>

      {filteredEvent.map((event, index) => (
        <EventsPage
          key={index}
          id={event.id}
          event={event}
          handleSubmit={handleSubmit}
        />
      ))}
    </>
  );
};

export default WelcomePage;
