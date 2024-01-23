import { gql } from "apollo-server-core";

 
export const typeDefs=gql`#graphql
type Query{
    users: [User]
}
type User{
    _id: ID!
    name: String!
    email: String!
    master_password: String!
}
type Token{
    token: String
}
type Mutation{
    register(userNew: UserInput!): User
    login(userSignin: UserSigninInput!): Token
    createVaultDoc(vaultDoc: VaultInput!): String
}
input UserSigninInput{
    email: String!
    master_password: String!
}
input UserInput{
    email: String!
    name: String!
    master_password: String!
}
input VaultInput{
    name: String!
    email: String!
    phone_number: Int
    password: String!
}
`;