var client_id = "yhjsiruqbj18c73zd8txvkvlmirx4m";
var bUrl = "https://wind-bow.gomix.me/twitch-api";

//premade list of users from free code camp
// this grabs the id of the user
var users = ["nikolarntv", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "potsuraze", "Macie_Jay"];

//loop thorough users
var myUser = users.forEach(function(user){
  //since this is a pre made list, it is going to serve as the info for the initial load

  //make ajax call for users array
  $.ajax({
    url: bUrl+"/users/"+user,
    data: {
    },
    success: function(data){
      // another to check if they are currently streaming
      $.ajax({
        url: bUrl+'/streams/'+user,
        success: function(sData){
          console.log(sData);
          if(sData.stream !== null){
            console.log(sData.stream.game);
          }else{
            // console.log(user + " is not streaming");
          }
        }
      });
    }
  });
});

// users.forEach(function(user){
//   $.ajax({
//     url: bUrl+"users/"+user,
//     data:{
//       client_id: client_id,
//     },
//     success: function(data){
//       // console.log(data);
//       //another ajax to see of the user is streaming
//       $.ajax({
//         url: bUrl+"channels/" +user,
//         data:{
//           client_id: client_id,
//         },
//         success: function(cData){
//           // console.log(cData);
//           if(cData.status == null){
//             // console.log(user + " is not streaming");
//           }else{
//             $('#common').append("<div class='col-md-4'><div class='thumbnail'><img src="+cData.logo+"><div class='caption'><h3><a href="+cData.url+">"+cData.name+"</a></h3><p>Status: <em>"+cData.status+"</em></p><button class='btn btn-info'>Streaming?</button></div></div></div>");
//             $.ajax({
//                 url: bUrl +"streams/",
//                 data: {
//                   client_id: client_id,
//                 },
//                 success: function(sData){
//                   console.log(sData);
//                 }
//             }); // end ajax
//           }
