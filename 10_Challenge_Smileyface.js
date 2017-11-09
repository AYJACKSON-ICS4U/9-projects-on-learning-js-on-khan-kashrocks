var SmileyFace = function(centerX,centerY){
    this.centerX = centerX;
    this.centerY = centerY;
};

SmileyFace.prototype.draw = function() {
    fill(255,234,0);
    ellipse(this.centerX,this.centerY,150,150);
    fill(0,0,0);
    ellipse(this.centerX-30,this.centerY-30,20,20);
    ellipse(this.centerX+30,this.centerY-30,20,20);
    noFill();
    strokeWeight(3);
    arc(this.centerX, this.centerY+10, 64,40,0,180);
    strokeWeight(1);

};

SmileyFace.prototype.speak = function(speachText){
    text(speachText, this.centerX - 15, this.centerY +100);
};

var smileFace = new SmileyFace(100,100);
smileFace.draw();
smileFace.speak("Hi all.");

var smileFace2 = new SmileyFace(300,100);
smileFace2.draw();
smileFace2.speak("What's up");
