require('dotenv').config()
const express = require('express');
const { postgraphile } = require('postgraphile');
const { MyDemoPlugin } = require('./plugins/demo');
const { UserPlugin } = require('./plugins/user');
const { Pool } = require('pg');

const ID = ((seed = 0) => {
  let id = seed;
  return () => id++;
})(1);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  min: 10,
  max: 20,

})

pool.on('connect', ({ processID }) => {

  console.log("new connection", ID(), pool._clients.length)
})

pool.on('remove', () => {
  console.log("remove connection", pool._clients.length)
})

pool.on('error', error => {
  console.log("error", error)
})
// const test =async () => { 
//   try {

//     const query= `
//     SELECT * FROM music_store.albums
//     ORDER BY album_id ASC `

//     const res = await pool.query(query)
//     console.log('exec query:',res.rows)


//   } catch (error) {
//     console.log("error", error) 
//   }
// }

// test()
const app = express();

app.get('/test', async (req, res) => {

  const query = `
  SELECT * FROM music_store.albums
  ORDER BY album_id ASC `

  const { rows } = await pool.query(query)
  res.json(rows).end()
});

app.use(
  postgraphile(pool, 'public', {
    graphiql: true,
    //exportGqlSchemaPath: './src/generated/schema.graphql',

    watchPg: true,
    enhanceGraphiql: true,
    disableQueryLog: true,
    appendPlugins: [
      //MyDemoPlugin,
      //UserPlugin
    ],
  }),
);

app.listen(3000, () => {
  console.log('GraphQL server running on port 3000');
});