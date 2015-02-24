var addItem = function(thing, text){
  var newItem = $('<li>');
  newItem.text(text);
  thing.append(newItem);
};

var addTask = function(){
  addItem($('ul'),$(this).val());
  $(this).val('');
};

$(document).ready(function(){
  $('#task').change(addTask);
});
