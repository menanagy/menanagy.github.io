var initX = 0;
var initY = 0;

$(document).keydown(function(e){
    if(e.keyCode == 37) {//left
      initX += 10;
      document.getElementsByTagName('body')[0].style.backgroundPositionX = initX + "px";
      
    }
    else if(e.keyCode == 39) {//right
      initX -= 10;
      document.getElementsByTagName('body')[0].style.backgroundPositionX = initX + "px";
    }
});