export const convertToBase64 = (data) => {
   return `data:image/png;base64,${data}`;
  //  return Buffer.from(data).toString('base64');
  };
  
  export const convertbackBase64 = (data) => {
    // Convert binary data to Base64 string
    console.log(data.split(',')[1]);
    return data.split(',')[1]; // Remove the MIME type prefix
  };