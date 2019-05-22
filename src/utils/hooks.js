import { useStaticQuery, graphql } from "gatsby"

// Get the list of all available public files from Gatsby
export const useSiteFiles = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query DownloadableFiles {
        allFile {
          edges {
            node {
              publicURL
              name
            }
          }
        }
      }
    `
  )
  return allFile
}
