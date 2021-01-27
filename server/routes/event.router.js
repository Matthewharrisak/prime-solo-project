const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// this router will select all data from the events table and display it on the landing page
router.get('/', (req, res) => {
  // GET route code here
  const queryText = ` SELECT * FROM events
  ORDER BY date ASC;`;
  pool.query(queryText)
  .then((result) => {
      res.send(result.rows);
  }).catch((error) =>{
    console.log(`Error with Query` , error);
    res.sendStatus(500);
  });
});


// this get request will display data based on the event_id number 
router.get('/:id', (req, res) => {
  // GET route code here
  let id = req.params.id;
  const queryText = `SELECT * FROM events WHERE "events"."event_id" = $1;`;
  pool.query(queryText , [id])
  .then((result) => {
      res.send(result.rows);
  }).catch((error) =>{
    console.log(`Error with Query` , error);
    res.sendStatus(500);
  });
});

// this get request will display data based on the user id number 
router.get('/userEvent/:id',  (req, res) => {
  // GET route code here
  let id = (req.user.id);
  console.log(req.user);
  const queryText = `SELECT * FROM events WHERE "events"."user_id" = $1;`;
  pool.query(queryText, [id])
  .then((result) => {
      res.send(result.rows);
  }).catch((error) =>{
    console.log(`Error with Query` , error);
    res.sendStatus(500);
  });
});


// this POST route will send data to database 
router.post('/', (req, res) => {
  // POST route code here
  console.log('logging from the POST request' , req.body);
  const queryText = `INSERT INTO "events" ("user_id", "title", "address" , "description", "date",  "image_url" , "bandcamp")
VALUES ($1 , $2, $3, $4 , $5, $6 , $7);`;
  pool.query(queryText, [req.user.id , req.body.newEvent.title, req.body.newEvent.address, 
    req.body.newEvent.description, req.body.newEvent.date, req.body.newEvent.image_url, req.body.newEvent.bandcamp])
  .then((result) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log(' Error in the POST', error);
    res.sendStatus(500);
  });
});

// this function will delete DB data, triggered by a onClick event from our user page 
router.delete('/:id', (req, res) => {
  // DELETE route code here
  // console.log('req.body params', req.params.id);
  let id = req.params.id;
  const queryText = `DELETE FROM "events" WHERE "events"."event_id" = $1;`;
  pool.query(queryText, [id]).then((result) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log('ERROR in DELETE route', error);
    res.sendStatus(500);
  });
});


// this function will update database inforamtion
router.put('/:id', (req, res) => {
  console.log('whats up form the put request?' , req.params.id , req.body);
  // let queryText = `UPDATE "events" SET "title" = 'not cool' WHERE "event_id" = ${req.params.id};`;

  let id = req.params.id;
  let queryText = `UPDATE "events" 
  SET "user_id" = $1,
  "title" = $2,
  "address" = $3,
  "description" = $4 ,
  "date" = $5 ,
  "image_url" = $6,
  "bandcamp" = $7 
  WHERE "event_id" = $8;`;
  pool.query(queryText , [req.user.id , req.body.title, req.body.address, 
    req.body.description, req.body.date, req.body.image_url, req.body.bandcamp, id]).then((result) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log('error in the PUT' , error);
    res.sendStatus(500)
  });

});





module.exports = router;
