const path = require('path');
const router = require('express').Router();

// "/notes" responds with the notes.html file
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));

})
router.get("/notes", (req, res) => {



  res.sendFile(path.join(__dirname, "./public/notes.html"));
 // console.log("notes reached");

})

module.exports = router;
