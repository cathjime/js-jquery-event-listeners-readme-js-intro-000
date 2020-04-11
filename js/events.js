//define functions here
function getIt (){
  $('p').on("click", function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load', function(){
    $('img')
  });
}


$(document).ready(function(){

getIt();
frameIt();
});
