
//defines object
var stuff = {
    title: "salad",                     //parameters of object
    servings: 7,
    ingredients: ["lettuce", "carrot", "broccoli"]
};

fill(26, 26, 26);       //makes color of tects
textSize(20);
text(stuff.title, 10, 23);
text("Serves: " + stuff.servings, 10, 55);
text("Ingredients: " + stuff.ingredients, 10, 85);
