const knex = require('knex');
const app = require('./app');

const { PORT, DATABASE_URL } = require('./config');

const db = knex({
  client: 'pg',
  connection: 'postgres://pudnxuhliwotci:cb6506ba184c0ac76031640e7d5bc4220ed59e1e0b2b9ab151e2aacec4d3a660@ec2-107-22-7-9.compute-1.amazonaws.com:5432/de458fm765arg0',
})

app.set('db', db);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})