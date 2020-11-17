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
  const queryText = `INSERT INTO "events" ("title, "address", "description", "date",  "image_url" , "bandcamp")
  VALUES `;
  pool.query(queryText)
  .then((result) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log(' Error in the POST', error);
    res.sendStatus(500);
  });
});

module.exports = router;
