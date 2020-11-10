import { gql } from '@apollo/client';

export const GET_SERVICES = gql`
    query getServices {
        services {
            items {
              id
              title
              content
              iconUrl
              url_key
            }
        }
    }
`;


export default {
    queries: {
        getServices: GET_SERVICES
    }
};

