//define functions here
function getIt (){
  $('p').on("click", function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img .tasty').on('load', function(){
    
});
}


$(document).ready(function(){

getIt();
frameIt();
});
