
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

$('#direction').on('click', function(event) {
  var a = ['up', 'down', 'left', 'right'];
  var randomDirection = a[Math.floor(a.length * Math.random())];
  SwimTeam.move(randomDirection);
})

console.log('Client is running in the browser!');
