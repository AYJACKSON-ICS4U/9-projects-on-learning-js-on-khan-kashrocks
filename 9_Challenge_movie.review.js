var movies = [
    {
        title: "Puff the Magic Dragon",
        review: "Best movie ever!!"
    }, 
    {
        title: "HOW TO TRAIN YOUR DRAGON",
        review: "GREATEST movie ever!!"   
    }
];

fill(84, 140, 209);
textAlign(CENTER, CENTER);

for (var x = 0; x < movies.length; x++){
    textSize(20);
    text(movies[x].title, 200, 50 + (x*50));
    textSize(15);
    text(movies[x].review, 200, 75 + (x*50));
}

