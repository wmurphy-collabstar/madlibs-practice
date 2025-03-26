//Declare and initialize variables for words replaced in pirate story

const isItBright = true; //Silly version: false;
const firstSentence = {
    kindOfObject: "pirate", //Silly version: "rustic",
    object: "ship", //Silly version: "car",
    name: "Black Pearl" //Silly version: "Jumpy Cadillac",
};
const noun1 = firstSentence.kindOfObject;
const noun2 = firstSentence.object;
const nameForObject = firstSentence.name;

const thirdSentence = {
    adjectiveForObject: "mysterious", //Silly version: "organic",
    object: "chest", //Silly version: "manchego",
    action: "floating" //Silly version: "flying",
}
const adjective1 = thirdSentence.adjectiveForObject;
const noun3 = thirdSentence.object;
const verbEndingWithIng = thirdSentence.action;
const verbEndingWithEd = "opened"; //Silly version: "devoured";

const num1 = 5;
const operator = "spaghetti";
const num2 = 5;
let result = ""

//Figure out result based on kind of operation outputted. If the operands are not valid numbers, or the operator isn't valid, the result ends up being a funny response
if (operator === "x"){
    result = num1 * num2 || "multiplied gibberish";
}else if (operator === "/"){
    result = num1 / num2 || "divided gibberish";
}else if (operator === "+"){
    result = num1 + num2 || "added gibberish";
}else if (operator === "-"){
    result = num1 - num2 || "subtracted gibberish";
}else {
    result = "the meaning of life";
}

//Madlibs story with variables for added words, and styling for each styled word so that it can be focused and hovered over. Also, so that it is obvious which words can change and which can't
let story = `
One <span tabindex="0" class="added-word">${isItBright ? "bright" : "gloomy"}</span> morning, I set sail on a <span tabindex="0" class="added-word">${noun1}</span> <span tabindex="0" class="added-word">${noun2}</span> named The <span tabindex="0" class="added-word">${nameForObject}</span>. 
The endless sea stretched endlessly before us. 
Just then, we spotted a <span tabindex="0" class="added-word">${adjective1}</span> <span tabindex="0" class="added-word">${noun3}</span> <span tabindex="0" class="added-word">${verbEndingWithIng}</span> in the water. 
'Could it be treasure?' the captain exclaimed. 
We hauled it aboard and <span tabindex="0" class="added-word">${verbEndingWithEd}</span> it. 
Did you know <span tabindex="0" class="added-word">${num1}</span> <span tabindex="0" class="added-word">${operator}</span> <span tabindex="0" class="added-word">${num2}</span> equals <span tabindex="0" class="added-word">${result}</span>? 
Incredible, right?
`;