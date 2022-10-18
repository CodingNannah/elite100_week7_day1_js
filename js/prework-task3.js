// Task 3 - Coding Questions

/* Question 1
Write a function to print "hello_USERNAME!" USERNAME is the input of the function. The first line of the code has been defined as below.

    def hello_name(user_name):
    username_cap = user_name.upper() # to make name ALL CAPS
    print("Hello, " + username_cap + "!")
*/
let userName = 'Henry'
let userNameFrench = 'Henri'
let userNameSpan = "Enrique"

const hello = `Hello, ${userName.toUpperCase()}!`;
const bonJour = `Bon jour, ${userName.toUpperCase()}!`;
const hola = `¡Hola, ${userName.toUpperCase()}!`;


console.log(hello);
console.log(bonJour);

                
/*Question 2
Write a function, first_odds that prints the odd numbers from 1-100 and returns nothing

    def first_odds():
    for num in range (1, 101, 2):
        print(num)
*/
// function firstOdds(){
//     for(let i=1; i<100; i+=2){
//         return i
// }}
function firstOdds(){
    let i = 1;
    let arr = [];
    while (i <= 100){
        arr.push(i);
        i += 2;
    };
    return arr;
}
// console.log(firstOdds())


/*Question 3
Write a function, max_num_in_list to return the max number of a given list.

def max_num_in_list(a_list):
    max = a_list[0] 
    for num in a_list:
        if num > max:
            max = num
    return max
# print(max) # to see it & test if it's working!
#input:
print(max_num_in_list([1, 7, 12, 5, 365, 14, 6, 18])) #passing in the list
*/

let anArr = [1, 7, 12, 5, 365, 14, 6, 18];
function maxNumNArr(anArr){
    return Math.max(...anArr);
};
// console.log(maxNumNArr(anArr))
            

/*Question 4
Write a function to return if the given year is a leap year. 
A leap year is divisible by 4, but not divisible by 100, 
unless it is also divisible by 400. The return should be boolean Type (true/false).

    def is_leap_year(a_year):
    if a_year % 4 == 0 and a_year % 100 != 0:
        return True
#   elif year % 400 == 0:
#         return True   
        # this is unnecessary: div by 4 covers div by 400!
    else:
        return False
*/

function isLeapYear(year){
    // flip the year == 0 for js
    if ((0 == year % 4) && (0 != year % 100)){;
        return true;
    }else if (0 == year % 400){
        return true;
    }else{
        return false;
        }
}

// console.log(isLeapYear(1927)) //false
// console.log(isLeapYear(1968)) //true
// console.log(isLeapYear(1989)) //false
// console.log(isLeapYear(2000)) //true
// console.log(isLeapYear(2020)) //true
         

/*Question 5
Write a function to check to see if all numbers in list are consecutive numbers. 
For example, [2,3,4,5,6,7] are consecutive numbers, but [1,2,4,5] are not 
consecutive numbers. The return should be boolean Type.

def is_consecutive(a_list):
    for i in range(len(a_list)-1): 
        if a_list[i] + 1 == a_list[i+1]:
            return True  
        else:
            return False
*/

function isConsec(thisArr){
    for(let i=0; i<thisArr.length-1; i++){
        if (thisArr[i]+1 != thisArr[i+1]){
            return false
        } 
    }return true
};

// console.log(consec([2,3,4,5,6,7]))
// console.log(consec([1,2,4,5]))
// console.log(consec([1,2,4,5,7,9]))

