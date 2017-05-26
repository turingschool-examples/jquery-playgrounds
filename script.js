// Part One: The Presidents

// Select each tr element.
$('tr')
// Select all of the elements with the class of name.
$('.name')
// Select all of the elements with either the class of name or term.
$('.name, .term')
// Select all of the checked —umm— checkboxes. (You’ll probably want to check some checkboxes first.)
$('input:checked')
// Select all of the td elements with the class of number that appear in a row of a tr with the class of whig.
$('tr.whig td.number')

// Part Two: Manipulating CSS

// Add the class of red to all of the Republicans.
$('.republican').addClass('red')
// Add the class of blue to all of the Democrats.
$('.democrat').addClass('blue')
// Add the class of yellow to the term column of the table.
$('td.term').addClass('yellow')
// Take all the whig presidents and give them a purple background and white text.
$('.whig').css({'background-color': 'purple', 'color': 'white'})

// Part Three: Filtering and Traversal

// Add the green class to anyone who served right after a president who died.
$('.died').next().addClass('green')
// Find all of the presidents who only served one term and add the class red.
$('.one-term').addClass('red')
// Add the class of blue to the parent of a checked checkbox.
$('input:checked').parent().addClass('blue')
// Add the class of yellow to the siblings of the parent (td, in this case) of an unchecked checkbox.
$('input:not(:checked)').parent().siblings().addClass('yellow')

// Part Four: Dead Presidents

// Find all of the presidents who died in office (hint: they have a died class on their tr).
// Append <span class="died">(Died)<span> to the the term column of presidents who have .died.
$('.died .term').append('<span class="died">(Died)<span>')

// Part Five:

// Add an event handler to all of the checkboxes that when the box is checked, adds the yellow class to the parent tr.
$('input[type="checkbox"]').on('click', function() {
  $(this).parent().addClass('yellow')
})
// Add an event handler that adds the red class to a td element when it’s clicked on.
$('td').on('click', function () {
  $(this).addClass('red')
})
// Modify the event handler above to remove the red class when it is clicked a second time.
$('td').on('click', function () {
  $(this).toggleClass('red')
})
// Bonus: Add a new div to the page, every time a checkbox is checked, add that presidents name to the div.
// Bonus 2: Remove that presidents name when the box is unchecked. (This is both solutions)
$('input[type="checkbox"]').on('click', function() {
  $name = $(this).parents('tr').find('td.name').text()
  // grabbed the text of the name column
  $Id = $name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
  // created an easy reference (this is parameterizing the name)
  if ($(this).prop("checked") == true) {
    $('.selected_prez').append('<span id=' + $Id + '>' + $name + '</br>')
  } else if ($(this).prop("checked") == false){
    $('#' + $Id).remove()
  }
})
