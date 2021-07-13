// web/components/PrintObject.js

//this is just a helpful little component that displays
//all the data from our customer's session
const PrintObject = ({ content }) => {
  const formattedContent = JSON.stringify(content, null, 2);
  return <pre>{formattedContent}</pre>;
};

export default PrintObject;
