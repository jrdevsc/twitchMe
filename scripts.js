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
      console.log(user+": "+data._id);
      //another ajax to see of the user is streaming
      $.ajax({
        url: bUrl+"streams/",
        data:{
          cid: data._id,
          client_id: client_id,
        },
        success: function(stream){
          console.log(stream);
        }
      });
    }
  });
});




// $('#fcc').click(function(){
//
// })
