/*
pre_op_detail funtion fetches table name, schema name and description as argument
to create table, if not exists, workflow_logs.
Insert table_name, description and start_time into the workflow_logs table
Schema name could be required depending on whether workflow_logs table is under common schema or individual schema
*/
function pre_op_detail(table,description,schema_name)
{
    //const database = JSON.parse(dataform.projectConfig.defaultDatabase)
    return `
    Create Table IF NOT EXISTS ${schema_name}.workflow_logs(model_name string,description string ,start_time timestamp,
    end_time timestamp,run_status string);
    Insert into ${schema_name}.workflow_logs
    (model_name,start_time,description)
    values
    ("${schema_name}.${table}" ,current_timestamp(),"${description}")`;
}
/*
post_op_detail funtion updates the table workflow_logs end_time and run_status for same table name.
Schema name could be required depending on whether workflow_logs table is under common schema or individual schema
*/
function post_op_detail(table,schema_name)
{
    return`
    update ${schema_name}.workflow_logs
    set end_time = current_timestamp()
    and run_status = 'Success'
    where model_name = "${schema_name}.${table}"`;
}
 
module.exports = {pre_op_detail,post_op_detail};