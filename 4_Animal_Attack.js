var bodyX = 263;
var bodyY = 220;
var bodyW = 124;
var bodyH = bodyW/2;
var eye = 10;
var legh = 53;
var legw = 10;

draw = function() {
    eye = eye + 1; 
    background(207, 254, 255);
    fill(240, 209, 36);
    rect(bodyX - 54, bodyY +-4, legw, legh);
    rect(bodyX +41, bodyY +-5, legw, legh);
    ellipse(bodyX, bodyY, bodyW, 82); // body?
    ellipse(bodyX-70, bodyY, bodyH, 54); // face?
    rect(bodyX - 25, bodyY +20, legw, legh);
    rect(bodyX  +20, bodyY +20, legw, legh);
    fill(0, 0, 0);
    ellipse(bodyX-88, bodyY - 10, eye, eye); // eyes?
    ellipse(bodyX-66, bodyY - 10, eye, eye); // eyes?

    
    


};
