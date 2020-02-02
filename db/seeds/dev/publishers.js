const tableData = require('../../../tableData');

const createTable = async (knex, publisher) => { // create table takes in knex and a publisber from the data to seed/insert into our table
  const publisherId = await knex('publishers').insert( 
    {
      publisher: publisher.publisher,
      location: publisher.location
    }, 'id')
    
    let mangaPromises = publisher.mangas.map(manga => {
      return createManga(knex, {
        mangas: manga,
        publisher_id: publisherId[0]
      })
    });
    return Promise.all(mangaPromises);
}

const createManga = (knex, comic) => {
  return knex('mangas').insert(comic)
}

exports.seed = async (knex) => {
  try {
    await knex('publishers').del()
    await knex('mangas').del()


    let publisherPromises = tableData.map(manga => {
      return createTable(knex, manga)
    });

    return Promise.all(publisherPromises)
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};
