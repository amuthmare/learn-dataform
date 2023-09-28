function audit(table,  metrics) {
    return `
        select
        1 as sno,
        ${metrics.map(field => `count(${field}) as total`).join(",\n")}
        from ${table}
      `;
  }

  module.exports = { audit };


