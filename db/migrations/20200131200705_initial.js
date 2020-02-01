
exports.up = knex => {
  return knex.schema
    .createTable('publishers', table => {
      table.increments('id').primary();
      table.string('publisher');
      table.string('location');
      table.timestamps(true, true);
    })
    .createTable('mangas', table => {
      table.increments('id').primary();
      table.string('mangas');
      table.integer('publisher_id').unsigned();
      table.foreign('publisher_id').references('publisher_id');
      table.timestamps(true, true);
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('publishers')
    .dropTable('mangas')
};

