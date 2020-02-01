const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');
const app = express();

app.use(express.json())

app.set('port', process.env.PORT || 3000);
app.locals.title = 'BYOB';

app.get('/', (request, response) => {
  response.send('hello world')
});

app.get('/api/v1/publishers', async (request, response) => {
  try {
    const publishers = await database('publishers').select();
    response.status(200).json(publishers)
  } catch(error) {
    response.status(500).json({ error })
  }
});

app.get('/api/v1/publishers/:id', async (request, response) => { // would like to get the mangas from the manga table as welll, look into "linking dynmics routes (??)"
  try {
    const publisher = await database('publishers')
      .where('id', request.params.id)
      .select();
    if(publisher.length) {
      response.status(200).json(publisher)
    } else {
      response.status(404).json({
        error: `Could not find locations with id of ${required.params.id}`
      })
    }
  } catch(error) {
    response.status(500).json({ error })
  }
});

app.post('/api/v1/publishers', async (request, response) => {
  const publisher = request.body;

  for (let requiredParameter of ['publisher', 'location']) {
    if (!publisher[requiredParameter]) {
      return response.status(422).send({
        error: `expected POST format: { publisher: <string>, location: <string> } 
        . You're missing the ${requiredParameter} property`
      })
    }
  }

  try {
    const id = await database('publishers').insert(publisher, 'id')
    response.status(201).json(id[0])
  } catch(error) {
    response.status(500).json({ error })
  }
});

app.get('/api/v1/mangas', async (request, response) => {
  try {
    const mangas = await database('mangas').select();
    response.status(200).json(mangas)
  } catch(error) {
    response.status(500).json({ error })
  }
});

app.get('/api/v1/mangas/:id', async (request, response) => {
  try {
    const manga = await database('mangas')
      .where('id', request.params.id)
      .select()
    if (manga.length) {
      response.status(200).json(manga)
    } else {
      response.status(404).json({
        error: `Could not fine the manga with id of ${request.params.id}.`
      });
    } 
  } catch (error) {
    response.status(500).json({ error })
  }
})

app.listen(app.get('port'), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get('port')}.`
    );
});