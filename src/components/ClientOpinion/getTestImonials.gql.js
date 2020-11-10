import { gql } from '@apollo/client';

export const GET_TESTIMONIALS = gql`
    query getTestimonials {
        testimonials {
            items {
              id
              testimonial_content
              author
              job
              image
              flag
            }
          }
    }
`;


export default {
    queries: {
        getTestimonials: GET_TESTIMONIALS
    }
};
