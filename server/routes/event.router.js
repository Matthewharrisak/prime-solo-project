const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `SELECT * FROM events;`;
  pool.query(queryText)
  .then((result) => {
      res.send(result.rows);
  }).catch((error) =>{
    console.log(`Error with Query` , error);
    res.sendStatus(500);
  });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log('logging from the POST request' , req.body);
  const queryText = `INSERT INTO "events" ("user_id", "title", "address" , "description", "date",  "image_url" , "bandcamp")
VALUES ($1 , $2, $3, $4 , $5, $6 , $7);`;
  pool.query(queryText, [req.user.id , req.body.newEvent.title, req.body.newEvent.address, req.body.newEvent.description, req.body.newEvent.date, req.body.newEvent.image_url, req.body.newEvent.bandcamp])
  .then((result) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log(' Error in the POST', error);
    res.sendStatus(500);
  });
});

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



// VALUES (${req.user.id}, ${req.body.newEvent.title} , ${req.body.newEvent.address} , ${req.body.newEvent.bandcamp} ,
//   ${req.body.newEvent.image_url} , ${req.body.newEvent.date} ,  ${req.body.newEvent.description});






module.exports = router;
