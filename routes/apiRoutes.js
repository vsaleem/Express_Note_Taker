const router = require("express").Router();
const db = require("../db/db.json");
const fs = require("fs");
const path = require("path");
const store = require("../js/store");

router.get("/notes", function(request, response) {
  // get a note
  response.send(db);
});

// other apis here. GET, POST, DELETE, WRITE

router.post("/notes", function(request, response){
  db.push(store(request.body));
  response.json(true)
  let data = JSON.stringify(db);
  writeToDB();
})


// /api/notes/:id
router.delete("/notes/:id", function(request, response){
  let sideNote = request.params.id;
  db = db.filter(item => item.id !=sideNote);
  response.json(true);
  writeToDB();
})

function writeToDB(){
  let data = JSON.stringify(db);
  fs.writeFile(path.join(__dirname, "../db/db.json"), data, error => {if(error) throw error});
}

module.exports = router;