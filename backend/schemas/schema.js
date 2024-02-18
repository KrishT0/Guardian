import { gql } from "apollo-server-core";

 
export const typeDefs=gql`#graphql
type Query{
    vaultData: [Vault]
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
    logout(userEmail: String): String
    createVaultDoc(vaultDoc: VaultInput!): Response
    updateVaultDoc(vaultDoc: UpdateVaultInput): String
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
    phone_number: String
    password: String!
}
type Vault{
    _id: String!
    name: String!
    email: String!
    phone_number: String
    password: String!
}
input UpdateVaultInput{
    _id: String!
    vault: updatedInput
}
input updatedInput{
    name: String
    email: String
    phone_number: String
    password: String
}
type Response{
    message: String
    data: id
}
type id{
    _id: String
}
`;