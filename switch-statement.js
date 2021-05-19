var msg;        // Message
var level = 2;  // Level

// Determine message based on level
switch (level) {
case 1:
    msg = 'Good luck on the trip';
    break;

case 2:
    msg = 'There is more to explore - keep going!';
    break;

case 3:
    msg = 'almost there!';
    break;

default:
    msg = 'Have fun!!';
    break;
}

var el = document.getElementById('answer');
el.textContent = msg;