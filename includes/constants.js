  // filename is includes/constants.js
  const PROJECT_ID = "my-clo-proj-nit";
  const SCHEMA_NAME = "patient";
  const RUN_ID="concat(FORMAT_DATE('%d%m%G%I%M%S',current_datetime),'cerner-pat')";
 
  
  module.exports = { PROJECT_ID,SCHEMA_NAME,RUN_ID};
  