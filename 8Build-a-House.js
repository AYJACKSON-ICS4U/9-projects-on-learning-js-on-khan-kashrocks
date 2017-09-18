background(219, 255, 255);

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);

var movingy = 150;
for(var oh1 = 21; oh1 --; oh1 === 0){
///
var movingx = 60;
for(var oh = 28; oh --; oh === 0){
    fill(204, 18, 68);
    rect(movingx, movingy, 10, 10); 
    movingx = movingx+10; 
}
movingy = movingy+10;
}

fill(120, 80, 19);
rect(180, 280, 40, 77);

movingx = 111; 
for(var temp = 5; temp--; temp === 0){
    
fill(113, 202, 240);
rect(movingx, 197, -28, -26);   

fill(49, 71, 6);
rect(movingx+10, 371, -28, -26); 
movingx = movingx+52;   
}

movingx = 1;
for(var temp = 133; temp--; temp === 0){
fill(random(255),random(255),random(255));
line(movingx, 400, movingx, 376);   
movingx = movingx+3;   
}


