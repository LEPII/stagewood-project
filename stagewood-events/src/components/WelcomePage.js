import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

// const GET_EVENT = gql`
//  Query {
//   getEvents{
//     title
//     id

//   }
// }
// `;

const WelcomePage = ({ onEventSelected, history }) => {
  WelcomePage.query({
    query: gql`
     getevents{
    title
    id
}
    `,
  }).then((result) => console.log(result));
  // const [event, setEvent] = useState("");

  // function GetEvents () {
  //   const [executeSearch, { data, loading, error }] = useQuery(GET_EVENT);
  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error :(</p>;
  // }
  //

  // if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   history.push(`/eventspage/${event}`);
  // };

  return (
    <>
      {" "}
      <h1> yer </h1>
      {/* data.getEvents.map(({(event, index)}) => (
      <div key={index}>
        <p>
          {evnt}: {rate}
        </p>
      </div> */}
      {/* <select name="event" onChange={onEventSelected}>
        {data.GET_EVENT.map((event) => (
          <option key={event.id} value={event.title}>
            {event.title}
          </option>
        ))}
      </select> */}
      {/* <h1> Search For Your Favorite Event! </h1>
      <input
        type="text"
        placeholder="Who are you in the mood to see perform?"
        className="searchInput"
        value={event}
        onChange={(e) => setEvent(e.target.value)}
      /> */}
    </>
  );
};

export default WelcomePage;
