const router = require('express').Router();
//const store = require('../db/store');
const fs=require('fs');
 
router.post('/notes', (req, res) => {
  //console.log("notetaker post");
   
  fs.readFile('./db/db.json', 'utf8', function (err, notedata) {
    if (err) {
      return console.log(err);
    }
    
   temp=JSON.parse(notedata);
    temp.push(req.body);
  temp2=JSON.stringify(temp);
  fs.writeFileSync('./db/db.json',temp2 , (err) =>
  err ? console.error(err) : console.log("db file written too")
);  
});
  
 });

 router.get('/notes', (req, res) => {
  //console.log("notetaker get");
   fs.readFile('./db/db.json', 'utf8', function (err, notedata) {
    if (err) {
      return console.log(err);
    }
   var notedatajson=JSON.parse(notedata);
   return res.json(notedatajson);

  
  })
  
  });

module.exports = router;
