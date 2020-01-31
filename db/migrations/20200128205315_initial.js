
exports.up = knex => {
  return knex.schema
    .createTable('publishers', table => {
      table.increments('id').primary();
      table.string('publisher').unique('publisher');
      table.string('location');
      table.timestamps(true, true);
    })
    .createTable('mangas', table => {
      table.increments('id').primary();
      table.string('title');
      table.string('author');
      table.string('serialization_year');
      table.string('genres');
      table.integer('chapters');
      table.string('status');
      table.integer('publisher_id').unsigned();
      table.foreign('publisher_id').references('publisher_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('publishers')
    .dropTable('mangas')
};
