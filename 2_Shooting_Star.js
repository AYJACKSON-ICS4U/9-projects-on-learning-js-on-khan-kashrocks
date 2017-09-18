Author: Kashyap Achar
Date: 9/7/2017

var strx = 6;   //shooting moon x
var stry = 385; //shooting moon y
var str2x= 411; //meteor x
var str2y= 0; //meteor y

draw = function() {
    strx +=1;//moving moon x
    stry -=1;//moving moon y
    str2x -=3;//moving meteor x
    str2y +=4;//moving meteor y
    
    //initializing background
    background(29, 40, 115);
    
    //Making of meteor
    fill(74, 74, 66);
    ellipse(str2x, str2y, 20, 20);        //Meteor
    //Making of moon
    fill(209, 209, 202);
    ellipse(strx, stry, 60, 60);        //Moon
    fill(156, 156, 144);
    ellipse(strx+15, stry+6, 20, 20);   //Dark grey spot  
    ellipse(strx+-10, stry+-14, 8, 8);   //Dark grey spot
    ellipse(strx+2, stry+22, 10, 10);   //Dark grey spot
    
    //making of buildings
    fill(51, 51, 47);
    rect(0,400,76,-150);    //building
    rect(76,400,52,-93);    //building
    rect(128,400,65,-117);    //building
    rect(223,400,52,-143);    //building
    rect(275,400,74,-105);    //building
    rect(349,455,74,-105);    //building
    //making of windows
    fill(217, 217, 146);
    rect(8,318,22,-22);    //building window
    rect(45,356,22,-22);    //building window
    rect(45,281,22,-22);    //building window
    rect(13,387,22,-22);    //building window
    rect(83,340,22,-22);    //building window
    rect(98,379,22,-22);    //building window
    rect(136,318,22,-22);    //building window
    rect(165,348,22,-22);    //building window
    rect(136,382,22,-22);    //building window
    rect(230,286,22,-22);    //building window
    rect(230,356,22,-22);    //building window
    rect(247,320,22,-22);    //building window
    rect(281,324,22,-22);    //building window
    rect(318,358,22,-22);    //building window
    rect(285,387,22,-22);    //building window
    rect(355,381,22,-22);    //building window
    //making of stars
    fill(219, 219, 85);
    ellipse(10, 10, 10, 10);   //star
    ellipse(49, 42, 10, 10);   //star
    ellipse(117, 162, 10, 10);   //star
    ellipse(128, 131, 10, 10);   //star
    ellipse(104, 10, 10, 10);   //star
    ellipse(10, 171, 10, 10);   //star
    ellipse(194, 247, 10, 10);   //star
    ellipse(267, 98, 10, 10);   //star
    ellipse(330, 197, 10, 10);   //star
    ellipse(267, 98, 10, 10);   //star
    ellipse(352, 98, 10, 10);   //star
    ellipse(274, 234, 10, 10);   //star
    ellipse(229, 32, 10, 10);   //star
    ellipse(224, 160, 10, 10);   //star
    ellipse(180, 72, 10, 10);   //star
    ellipse(328, 139, 10, 10);   //star
    ellipse(70, 98, 10, 10);   //star
    ellipse(105, 229, 10, 10);   //star
};







