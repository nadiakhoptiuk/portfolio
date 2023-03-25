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
    summary {
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
        icon
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
      project {
        id
        description
        isCommand
        linkToGithub
        linkToLivePage
        linkToPresentation
        projectPreview
        projectTitle
        role
        stack
      }
      blockTitle
      blockAnchorId
      order
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
