function pre_op_detail(table, description)
{
    return `
    Insert into dataform.workflow_logs
    (table,start_time,description)
    values
    (${ref(table)},current_timestamp(),${description})`;
}

function post_op_detail(table)
{
    return`
    update dataform.workflow_logs
    set end_time = current_timestamp()
    and run_status = 'Success'
    where model_name = ${table}`;
}
 
module.exports = {pre_op_detail};