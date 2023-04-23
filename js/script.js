function newItem(){
  // 1. Adding a new item to the list of items: 
  let li = $('<li>')
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

  // 2. Crossing out an item from the list of items:
  // "dblclick" is not well supported
  li.on("click", () => li.toggleClass("strike"));

  // 3. Adding the delete button "X": 
  let crossOutButton = $("<span class='crossOutButton'>X</span>");
  crossOutButton.on("click", () => li.hide());
  li.append(crossOutButton);

  // 4. Reordering the items: 
  $('#list').sortable();
}