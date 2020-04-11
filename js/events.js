//define functions here
function getIt (){
  $('p').on("click", function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load', function(){
  //actions you want to happen
});

}
// should bind the load event that adds the class tasty
// to the image to add a red frame to the image.

$(document).ready(function(){

getIt();

});
