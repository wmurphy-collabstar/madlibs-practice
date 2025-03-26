//Declare and initialize variables for words replaced in pirate story

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