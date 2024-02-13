import _ from "lodash";

export const dataFormatter = (data) => {
  let formattedData = {};
  // changes keys to camelCase for to process as JS
  formattedData = _.mapKeys(data, (v, k) => _.camelCase(k))

  if (formattedData.createdAt && formattedData.updatedAt){
    // sets unix timestamp dates from postgres to js readable dates
    formattedData.createdAt = new Date(formattedData.createdAt).toLocaleString("en-US")
    formattedData.updatedAt = new Date(formattedData.updatedAt).toLocaleString("en-US")
  }

  return formattedData;

};