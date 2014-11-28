function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

c = ['white', 'blue', 'red', 'green', 'yellow', 'brown'];
a = ['dog', 'cat', 'frog', 'cow', 'lion', 'elephant', 'monkey', 'duck', 'rooster'];

$().ready(function () {

  var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'data/'+a[0]+'.wav');
      audioElement.setAttribute('autoplay', 'autoplay');


  $(document).keydown(function (e) {
    if(e.which == 55 && e.ctrlKey) {
        //ctrl+7      
    }
    else if (e.which != 122) {
      e.preventDefault();
    }
  });
  $(document).keyup(function (e) {
    var animal = a[random(0,8)];
    e.preventDefault();
    $('body').css('background-color', c[random(0,5)]);
    $('#bicho').attr("src", "data/"+animal+".jpg");
    $('#bicho').css('top', random(0,500));
    $('#bicho').css('right', random(0,500));
    $("#bicho").show('slow');

    audioElement.setAttribute('src', 'data/'+animal+'.wav');
    audioElement.play();
  })


  $(document).click(function(e) {
      e.stopPropagation();
      e.preventDefault();
      e.stopImmediatePropagation();
      return false;
  });

  // disable right click
  $(document).bind('contextmenu', function(e) {
      e.stopPropagation();
      e.preventDefault();
      e.stopImmediatePropagation();
      return false;
  });
  //$(document).unbind('contextmenu');


});

