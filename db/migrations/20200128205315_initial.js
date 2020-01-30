
exports.up = knex => {
  return knex.schema
    .createTable('manga', table => {
      table.increments('id').primary();
      table.string('title');
      table.timestamps(true, true);
    })
    .createTable('series', table => {
      table.increments('id').primary();
      table.string('alias');
      table.integer()
    })
};

exports.down = function(knex) {
  
};
