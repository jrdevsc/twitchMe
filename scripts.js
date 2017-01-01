//notes to self
//proper url format:
//.../kraken/{users, chanels}/{<uid>, <cid>}?client_id=blah blah blah


var client_id = "yhjsiruqbj18c73zd8txvkvlmirx4m";
var bUrl = "https://api.twitch.tv/kraken/";


// this grabs the id of the user
var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "potsuraze"];

users.forEach(function(user){
  $.ajax({
    url: bUrl+"users/"+user,
    data:{
      client_id: client_id,
    },
    success: function(data){
      //another ajax to see of the user is streaming
      $.ajax({
        url: bUrl+"channels/" +user,
        data:{
          client_id: client_id,
        },
        success: function(cData){
          if(cData.status == null){
            console.log(user + " is not streaming");
          }else{
            console.log(user + " is streaming. Status: "+cData.status);
            console.log(cData);
          }
          // console.log(cData);
        }
      });
    }
  });
});




// $('#fcc').click(function(){
//
// })
