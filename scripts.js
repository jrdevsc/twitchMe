//notes to self
//proper url format:
//.../kraken/{users, chanels}/{<uid>, <cid>}?client_id=blah blah blah


var client_id = "yhjsiruqbj18c73zd8txvkvlmirx4m";
var bUrl = "https://api.twitch.tv/kraken/";

$('submit').on('click', function(e){
  e.preventDefault();
  //grab value from input
  var sQuery = $('input').val();

  //ajax using sQuery
  $.ajax({
    url: bUrl +"search/channels",
    data: {
      query: sQuery,
      client_id: client_id,
    },
    success: function(sData){
      // console.log(sData.channels.length);
      for(var i = 0; i < sData.channels.length; i++){
        var sResultsName = sData.channels[i].display_name;
        $('#sResults h2').removeClass('.hidden');
        $('#sResultsP').append(`<a href="${bUrl+"users/"+sResultsName}/${client_id}">${sResultsName}</a>`+"<br>");

        //reset form
        $('inpu[type=text]').value = ' ';
      }
    }
  });
});

// this grabs the id of the user
var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "potsuraze", "Macie_Jay"];

users.forEach(function(user){
  $.ajax({
    url: bUrl+"users/"+user,
    data:{
      client_id: client_id,
    },
    success: function(data){
      // console.log(data);
      //another ajax to see of the user is streaming
      $.ajax({
        url: bUrl+"channels/" +user,
        data:{
          client_id: client_id,
        },
        success: function(cData){
          // console.log(cData);
          if(cData.status == null){
            // console.log(user + " is not streaming");
          }else{
            $('#common').append("<div class='col-md-4'><div class='thumbnail'><img src="+cData.logo+"><div class='caption'><h3><a href="+cData.url+">"+cData.name+"</a></h3><p>Status: <em>"+cData.status+"</em></p><button class='btn btn-info'>Streaming?</button></div></div></div>");
            $.ajax({
                url: bUrl +"streams/",
                data: {
                  client_id: client_id,
                },
                success: function(sData){
                  console.log(sData);
                }
            }); // end ajax
          };
        }
        });
        }
      });
    });


//button checks if user is streaming or not
// $('button[class=qstreaming]').click(function(){
//   console.log('click');
// });
