//define functions here
function getIt (){
  $('p').on("click", function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
   });
}

function pressIt(){
  $(document).on('keydown', function(key) {
    if(key.which == 71){
      alert('G was pressed');
  }
});
}

// should bind a keydown event to the input field 
// of the form that alerts a user when they have 
// pressed the G key.


$(document).ready(function(){

getIt();
frameIt();
});
