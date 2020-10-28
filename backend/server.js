//--ref: https://bezkoder.com/react-node-express-postgresql/
//--ref: https://node-postgres.com/features/connecting

require('dotenv').config();

const bodyParser=require('body-parser');

const express=require('express');

const app = express();

const {Pool} =require('pg')

app.use(bodyParser.json())

const pool=new Pool ({
    user:process.env.PGUSER,
    host:process.env.PGHOST,
    database:process.env.PGDATABASE,
    password:process.env.PGPASSWORD,
    port:process.env.PGPORT
})


app.get('/', (req, res)=>{
    pool
    .query('SELECT * FROM recipes')
    .then(data=>res.json(data.rows))
})


const port=process.env.PORT ||  8080;

app.listen(port, ()=>{
    console.log('listen to port and ready for development')
})

//______________________________________________________________________________
// with connection string-----------
//______________________________________________________________________________


// const { Pool, Client } = require('pg')
// const connectionString = 'postgres://wrgjdzyu:iGGTL3cO7BQm-ywPmtCq1dyPqyvsVEXA@lallah.db.elephantsql.com:5432/wrgjdzyu'
// const pool = new Pool({
//   connectionString: connectionString,
// })
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
// const client = new Client({
//   connectionString: connectionString,
// })
// client.connect()
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })













