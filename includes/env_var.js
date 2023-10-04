// filename is includes/env_var.js
const def_project = dataform.projectConfig.defaultDatabase;
const def_schema = dataform.projectConfig.defaultSchema;
const RUN_ID="concat(FORMAT_DATE('%d%m%G%I%M%S',current_datetime),'cerner-pat')";

module.exports = { def_project,def_schema,RUN_ID};
  