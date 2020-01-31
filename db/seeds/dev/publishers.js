const tableData = require('../../../tableData');

const createTable = async (knex, manga) => {
  const publisherId = await knex('publishers').insert(
    // add logic so that each publisher shows up once
    {
      publisher: manga.publisher,
      location: manga.location
    }, 'id') // returning an id to use for relationship id  

let mangaPromise = [createManga(knex, {
  title: manga.name,
  author: manga.author,
  serialization_year: manga.serialization_year,
  genres: manga.genres,
  chapters: manga.chapters,
  status: manga.status,
  publisher_id: publisherId[0]
})]

  return Promise.all(mangaPromise)
}

const createManga = (knex, comic) => {
  return knex('mangas').insert(comic)
}

exports.seed = async (knex) => {
  // Deletes ALL existing entries
  try {
    await knex('publishers').del()
    await knex('mangas').del()


    let publisherPromises = tableData.map(manga => { // map through the data set and create a table with each publisher 
      console.log(tableData)
      return createTable(knex, manga)
    });

    return Promise.all(publisherPromises)
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};
