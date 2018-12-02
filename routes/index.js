var express= require("express");
var router = express.Router();
var middlewareObj= {};
const NBA = require("nba");

router.get("/", function(req,res){
  console.log("someone has entered live site")
    // NBA.stats.commonTeamRoster({ TeamID: 1610612761}).then(console.log);
    NBA.stats.shots({
      TeamID : 1610612761,
      LastNGames: "1"
    }).then(function(stats){
      console.log("I am getting stats out")
      var shotMade = 0;
      stats["shot_Chart_Detail"].forEach(function(shotDetail){
        if (shotDetail["shotType"] !== "2PT Field Goal") {
          if (shotDetail["shotMadeFlag"] == 1) {
            shotMade++;
            console.log(shotDetail)
          }
        }

      }
    )
    var freeFries = false;
    if (shotMade>= 13) {
      freeFries = true
    }
    else{
      freeFries = false
    }

    res.render("landing", {freeFries: freeFries, numberOfMadeThreePointers: shotMade});
      // console.log(stats["shot_Chart_Detail"])
    });
    // NBA.stats.commonTeamRoster({ PlayerID: curry.playerId }).then(console.log);
    // console.log(lastRaptorsGame)

});

router.get("/test", function(req,res){
  console.log("someone has entered test")
  var curry = NBA.findPlayer('Stephen Curry');
  console.log(curry)
  res.render("landing", {freeFries: "TEST", numberOfMadeThreePointers: "TEST"})
})

router.get("/hello", function(req,res){
  console.log("someone has entered test")
  res.status(200).render("landing", {freeFries: "Hello", numberOfMadeThreePointers: "Hello"});
})


module.exports = router;
