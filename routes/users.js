var express = require('express');
var router = express.Router();
var userModel = require('../models/userModels');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/
router.get('/', function(req, res, next) {
    userModel.getAllUsers()
        .then(function(rows){
            console.log(res.json(rows));
        });
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  console.log('id param: '+id);
    if (typeof id != 'undefined'){

      userModel.getUserById(id)
          .then(function(rows){
              if (''!=rows){
                console.log(res.json(rows));
              }else{
                  res.status(500).send(('ID non valide').toString());
              }
          });
  }else{
    res.status(500);
    res.json('error',{
      'message':'ID non valide'
    });
  }
});

router.post('/', function(req, res, next) {
  console.log(req.body);
    userModel.addUser(req.body)
        .then(function(rows){
            res.redirect('/users/'+rows);
            //console.log(res.json(rows));
        });
});

router.put('/:id', function(req, res, next) {
    const id = req.params.id;
    console.log(req.body);
    console.log(id);
    userModel.updateUsers(id, req.body)
        .then(

            res.redirect('/users/'+id)
            //console.log(res.json(rows));
        );
});

router.delete('/:id', function(req, res, next) {
    const id = req.params.id;
    //console.log(req.body);
    console.log(id);
    userModel.delleteUser(id)
        .then(

            res.redirect('/users/'+id)
            //console.log(res.json(rows));
        );
});
module.exports = router;
