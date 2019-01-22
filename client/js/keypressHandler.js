
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

$('#direction').on('click', function(event) {
  const serverURL = 'http://127.0.0.1:3000';
  $.ajax({
    url: serverURL,
    type: 'GET',
    contentType: 'application/json',
    success: function(data) {
      console.log(typeof data);
      data = JSON.parse(data);
      SwimTeam.move(data);
    },
    error: function() {
      console.log('Failed');
    }

  });
});



console.log('Client is running in the browser!');
