var paintBrush = {
    x: 217,
    y: 229,
    img: getImage("avatars/aqualine-sapling")
};

var paintCanvas = function() {
    imageMode(CENTER);
    image(paintBrush.img, paintBrush.x, paintBrush.y);
};

mouseMoved = function(){
  paintBrush.x = mouseX;
  paintBrush.y = mouseY;
  paintCanvas();

  
    
};

