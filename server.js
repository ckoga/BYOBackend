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

app.get('/api/v1/publishers/:id', async (request, response) => { 
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

// app.get('/api/v1/publishers/:id/mangas', async (request, response) => { // would like to get the mangas from the manga table as welll, look into "linking dynmics routes (??)"
//   try {
//     const publisher = await database('publishers')
//       .where('id', request.params.id)
//       .select()
//     const mangas = await database('mangas')
//       .where('publisher_id', request.params.id)
//       .select()
  
//     if (publisher.length) {
//       response.status(200).json({publisher: publisher, mangas: manga})
//     } else {
//       response.status(404).json({
//         error: `Could not find locations with id of ${required.params.id}`
//       })
//     }
//   } catch (error) {
//     response.status(500).json({ error })
//   }
// });

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
    response.status(201).json({ publisher_id: id[0], publisher: publisher })
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
        error: `Could not find the manga with id of ${request.params.id}.`
      });
    } 
  } catch (error) {
    response.status(500).json({ error })
  }
});

app.delete('/api/v1/publishers/:id', async (request, response) => {
  const { id } = request.params

  if (!id) {
    response.status(422).send({ error: "Invalid publisher id check url"})
  }

  try {
    await database('publishers')
      .where('id', id)
      .del()
    response.status(204).send()
  } catch(error) {
    response.status(500).json({ error })
  }
})

app.listen(app.get('port'), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get('port')}.`
    );
});