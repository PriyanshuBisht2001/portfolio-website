export const GET_ALL_PROJECTS = `
    query GetAllProjects{
        projects {
          id
          name 
          heroImage 
        }
    }
`;

export const GET_PROJECT_BY_ID = `
    query GetProjectByID($projectID:ID!){
      project(id: $projectID) {
          id
          name 
          heroImage 
          overview 
          challenge 
          photos 
          details 
          url 
      }
    }
`
