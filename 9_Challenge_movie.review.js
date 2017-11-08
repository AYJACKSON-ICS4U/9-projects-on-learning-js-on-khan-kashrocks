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
textSize(20);
text(movies[0].title, 200, 50);
textSize(15);
text(movies[0].review, 200, 75);

textSize(20);
text(movies[1].title, 200, 100);
textSize(15);
text(movies[1].review, 200, 125);
