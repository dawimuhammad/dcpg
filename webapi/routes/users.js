var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/active', function(req, res, next) {
  const users = [
  {
    id : 1,
    name : "user a",
    score : 100
  },{
    id : 2,
    name : "user b",
    score : 100
  },{
    id : 3,
    name : "user c",
    score : 100
  },{
    id : 4,
    name : "user d",
    score : 100
  },{
    id : 5,
    name : "user e",
    score : 100
  }]

  res.status(200).send(users)
  // res.status(200).json({ status : "active", users : users })
})

router.get('/inactive', function(req, res) {
  const users = [
    {
      id : 1,
      name : "user p",
      score : 100
    },
    {
      id : 2,
      name : "user l",
      score : 100
    },
    {
      id : 3,
      name : "user m",
      score : 100
    },
    {
      id : 4,
      name : "user n",
      score : 100
    },
    {
      id : 5,
      name : "user h",
      score : 100
    },
    {
      id : 6,
      name : "user s",
      score : 100
    },
    {
      id : 7,
      name : "user f",
      score : 100
    },
    {
      id : 8,
      name : "user r",
      score : 100
    },
    {
      id : 9,
      name : "user y",
      score : 100
    },
    {
      id : 10,
      name : "user x",
      score : 100
    },
  ]
  
  res.status(200).json({ status : "inactive", users : users })
})

module.exports = router;
