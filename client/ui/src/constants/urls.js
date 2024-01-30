/* istanbul ignore file */

export const apiRoot =
  process.env.NEXT_PUBLIC_GRAPHQL_API || "http://localhost:4000/graphql";

export const apiRoutes = {
  addNote: `${`${apiRoot}`}`,
  getNotes: `${`${apiRoot}`}`,
};
