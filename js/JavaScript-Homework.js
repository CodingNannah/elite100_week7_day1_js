//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

var dogString = "Hello Max, my name is Dog, and I have purple eyes!";
var dogNames = ["Max","HAS","PuRple","dog"];

function matchNames(dogString, dogNames){
    var dogString = dogString.toLowerCase();
    var dogNames = dogNames.toString();
    var dogNames = dogNames.toLowerCase();
    for (i=0; i<dogNames.length; i++){
        if (dogString.includes(dogNames)){
            return "Matched dog name"
        }else{
            return "No Matches"
        }
    }
};

console.log(matchNames(dogString, dogNames))

                // const string = "hello world";
                // const subString = "world";

                // console.log(string.includes(subString));

                // if(string.includes(subString)){
                // // SOME CODE
                // }
                // if(str.indexOf(str2) >= 0) {
                //     ...
                // }

                // if (str.includes(str2)) {

                // }


//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]


function replaceEvens(givenArr){
    for (i=0; i<givenArr.length; i++){
        i % 2 == 0 ? givenArr.splice(i, 1, "even index") : givenArr[i]
    }
    return givenArr
}
console.log(replaceEvens(givenArr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
