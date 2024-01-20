import { gql } from "apollo-server-core";

 
export const typeDefs=gql`
type Query{
    users: [User]
}
type User{
    _id: ID!
    username: String!
    email: String!
    password: String!
}
type Mutation{
    signup(userNew: UserInput!): User
}
type UserInput{
    email: String
    username: String
    password: String
}
`;