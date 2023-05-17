import { GraphQLClient, gql } from 'graphql-request';

const endpoint = process.env.NEXT_DATOCMS_API_URL;

const requestHeaders = {
  'Content-Type': 'application/json',
  authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
};

const mainRequest = () => {
  const client = new GraphQLClient(endpoint, { headers: requestHeaders });

  return client.request(query);
};

const query = gql`
  query {
    hero {
      profession
      heroImage
      fullName
    }
    aboutMe {
      blockTitle
      blockAnchorId
      order
      photo
      summary
    }
    contact {
      blockTitle
      contactLink {
        id
        link
        title
        isemail
      }
    }
    workExperience {
      workPosition {
        id
        positionTitle
        requirements(markdown: false)
        duration
        companyTitle
        companyPlacement
      }
      blockTitle
      blockAnchorId
      order
    }
    featuredProject {
      blockTitle
      order
      blockAnchorId
      project {
        stack
        icon
        tag
        role
        projectTitle
        projectPreview
        isCommand
        id
        description
        button {
          id
          link
          title
        }
        projectType
      }
    }
    review {
      blockTitle
      blockAnchorId
      order
      recommendation {
        date
        id
        name
        positionTitle
        quote
        relationship
        source
      }
    }
  }
`;

export default mainRequest;
