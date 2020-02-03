# Build Your Own Backend

https://bring-your-own-backend.herokuapp.com/

A project designed to introduce backend development.

## Uses

If you would just like to practice fetching please look down below to see all the endpoints. For set-up and practice continue reading. 

## Set-Up

Clone down repo run
```
npm i 
npm start
```

## Endpoints

| Purpose | URL | Verb | Request Body | Sample Success Response |
|----|----|----|----|----|
| Get all publishers |`/api/v1/publishers`| GET | N/A | All orders on the server: `{publishers: [{}, {}, ...]}` |
| Add new publisher |`/api/v1/publisher`| POST | `{publisher: <String>, location: <String>}` | New publisher that was added: `{ "publisher_id": 145, "publisher": { "publisher": "Refactor Text", "location": "Somewhere" }}` |
| Delete existing publisher |`/api/v1/publisher/:id`| DELETE | N/A | For successful deletion: No response body (only 204 status code) |
