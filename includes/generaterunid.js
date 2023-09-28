
function generateRunId() {
    return `
    SELECT CONCAT(FORMAT_DATETIME('%d%m%Y%H%M%S', CURRENT_DATETIME()), 'cerner-pat') AS run_id
  `;
  }

  module.exports = { generateRunId };
