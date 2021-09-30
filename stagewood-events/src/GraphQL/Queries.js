import gql from "graphql-tag";

export const getEvents = gql`
  Query {
  getEvents{
    title
    id
  }
}
`;
