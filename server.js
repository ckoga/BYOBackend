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
})

app.listen(app.get('port'), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get('port')}.`
    );
});