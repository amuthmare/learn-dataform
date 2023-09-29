declare({
    database:dataform.projectConfig.vars.movies_database,
    schema: dataform.projectConfig.vars.movies_schema,
    name: "movies"
});

declare({
  schema: "stripe",
  name: "accounts"
});
