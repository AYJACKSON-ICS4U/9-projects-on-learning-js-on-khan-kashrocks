background(8, 164, 212);

var drawFish = function(x, y, bodyl, bodyh, bodyColour, tailColour, eyeColour, tailw, tailh, eyew, eyeh){
    
    noStroke();
    fill(bodyColour);
    ellipse(x, y, bodyl, bodyh);
    fill(tailColour);
    triangle(x - bodyl / 2, y,
             x - bodyl / 2 - tailw, y - tailh,
             x - bodyl / 2 - tailw, y + tailh);
    // eye according to passed variables
    fill(eyeColour);
    ellipse(x + bodyl / 4, y, eyew, eyeh);
};

drawFish(156,177,104,58,color(212, 8, 120),color(212, 8, 120),color(0, 0, 0),43,10,20,20);
drawFish(340,97,104,58,color(8, 212, 124),color(8, 212, 124),color(0, 0, 0),77,50,5,5);
drawFish(282,293,104,58,color(8, 127, 212),color(8, 127, 212),color(0, 0, 0),43,37,10,10);

mouseClicked = function(){

drawFish(mouseX, mouseY, 50 + random(100), 20 +random(100), 
        color(random(255), random(255), random(255)), color(random(255), random(255), random(255)), color(random(255), random(255), random(255)), 20 + random(100), 20 + random(50), 10 + random(15), 10 + random(15));
};
         
