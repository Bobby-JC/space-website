// Create the HTML for the message
var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Our servers are being updated between 2 and 6 a.m. We call these our "Dark side of the Moon hours"';
msg += ' During this time, we will be working on our site so we wll not be accepting/processing requests. Sorry!</div>';

var elNote = document.createElement('div');       // Create a new element
elNote.setAttribute('id', 'note');                // Add an id of note
elNote.innerHTML = msg;                           // Add the message
document.body.appendChild(elNote);                // Add it to the page

function dismissNote() {                          // Declare function
  document.body.removeChild(elNote);              // Remove the note
}

var elClose = document.getElementById('close');   // Get the close button
elClose.addEventListener('click', dismissNote, false);// Click close-clear note