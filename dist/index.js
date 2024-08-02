import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
const typeDefs = `#graphql
    scalar Date

    type Destination {
        cityName: String!
        dateArriving: Date!
        arrivalMethod: String!
        activities: [Activity]!
    }

    type Activity {
        name: String!
        timeNeededInHours: Int
        cost: String
    }

    type Query {
        destinations: [Destination]
    }

    type Mutation  {
        addDestination: Destination
    }

`;
const resolvers = {
    Query: {
        destinations: () => destinations
    }
};
const server = new ApolloServer({
    typeDefs,
    resolvers
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});
console.log(`🚀  Server ready at: ${url}`);
