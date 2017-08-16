function clicked(event){
  event.preventDefault();
  var stringIn = $("input#stringIn").val();

  $("#stringOut").html(stringIn)
});
