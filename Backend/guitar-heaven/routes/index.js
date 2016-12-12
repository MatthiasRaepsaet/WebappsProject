var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Guitar = mongoose.model("Guitar");
var Gebruiker = mongoose.model("Gebruiker");
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/guitars", function (req, res, next) {
    Guitar.find(function (err, guitars) {
        if(err){
          return next(err);
        }
        res.json(guitars);
    })
})

router.post("/guitars", function (req, res, next) {
    var guitar = new Guitar(req.body);
    guitar.save(function (err, guitar) {
        if(err){
          return next(err);
        }
        res.json(guitar);
    })

})

router.get("/gebruikers", function (req, res, next) {
    Gebruiker.find(function (err, gebruikers) {
        if(err){
            return next(err)
        }
        res.json(gebruikers);
    })
})

router.post("/gebruikers", function (req, res, next) {
    var gebruiker = new Gebruiker(req.body);
    gebruiker.save(function (err, gebruiker) {
        if(err){
            return next(err);
        }
        res.json(gebruiker);
    })
})

router.post("/gebruikers/:gebruiker/guitars/:guitar", function (req, res, next) {
    var guitar = new Guitar(req.body);
    guitar.gebruiker = req.gebruiker;

    guitar.save(function(err, comment){
        if(err){ return next(err); }

        req.gebruiker.guitars.push(guitar);
        req.gebruiker.save(function(err, gebruiker) {
            if(err){ return next(err); }

            res.json(gebruiker);
        });
    });
})

router.get('/gebruiker/:gebruiker', function(req, res, next) {
    req.gebruiker.populate('guitars', function(err, gebruiker) {
        if (err) { return next(err); }

        res.json(gebruiker);
    });
});

module.exports = router;
