function audit(table,  metrics) {
    return `
        select
        1 as sno,
        ${metrics.map(field => `count(${field}) as total`).join(",\n")}
        from ${table}
      `;
  }
/* 
function customSchema takes an argument and joins with default env value,from dataform.json,
to create custom schema name
*/
function customSchema(source) {
    return "infohub" + "_" + source;
}

/* 
function customDatabase uses default env value,from dataform.json,
to create custom database name
Custom database name does not accept any other value then Google Project ID as database name
*/
function customDatabase() {
    return dataform.projectConfig.vars.env + "_" + dataform.projectConfig.defaultSchema;
}

module.exports = {customSchema,customDatabase,audit};



