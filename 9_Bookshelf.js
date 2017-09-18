var book = [
    {
        title: "Mamamia",
        author: "Dancing queen",
        colour: color(17, 186, 37),
        recomend: false
    },
    {
        title: "Percy Jackson",
        author: "Floppy Joe",
        colour: color(115, 112, 27),
        recomend: true
    },
    {
        title: "Holes",
        author: "Samachar",
        colour: color(173, 123, 123),
        recomend: true
    },
    {
        title: "The Judge",
        author: "The lawyer",
        colour: color(98, 98, 163),
        recomend: false
    },
    {
        title: "Lord of the Flies",
        author: "William Golding",
        colour: color(146, 148, 113),
        recomend: true
    },
    {
        title: "School tutorial",
        author: "Teacher",
        colour: color(54, 34, 14),
        recomend: false
    },
    
];


var numOfShelves = book.length / 3;

for (var shelf = 0; shelf < numOfShelves; shelf++){

    fill(173, 117, 33);
    rect(0, 120 * shelf + 120, width, 18);
    for (var i = (3 * shelf); i < 3 * shelf + 3; i++){
        
        fill(book[i].colour);
        rect(140 * (i - 3 * shelf) + 10, 120 * shelf + 20, 105, 100);
        
        fill(201, 157, 201);
        text(book[i].title, 140 * (i - 3 * shelf) + 15, 119 * shelf + 29, 100, 100);
        text(book[i].author, 140 * (i - 3 * shelf) + 15, 120 * shelf + 60, 100, 100);
        
        if (book[i].recomend === true){
            text("Reccomend", 140 * (i - 3 * shelf) + 15, 120 * shelf + 90, 70, 100);
        } else{
            text("Do not read!", 140 * (i - 3 * shelf) + 15, 120 * shelf + 90, 100, 100);
        }
        
    }   
}
