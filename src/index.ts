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
        addDestination(): Destination
    }

`