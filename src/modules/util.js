// require('dotenv').config();

export const filePath = (fileName) => {
  const rootURL = process.env.REACT_APP_FILE_URL;
  return `${rootURL}/${fileName.substr(0, 6)}/${fileName}`;
};
