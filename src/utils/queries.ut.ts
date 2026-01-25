export const GET_ALL_PROJECTS = `
    query GetAllProjects{
        projects {
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
`;
