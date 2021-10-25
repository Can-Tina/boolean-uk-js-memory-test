const nums = []
const plays = prompt("How many numbers would you like to play with?")
console.log(plays)
function nth(n){return["st","nd","rd"][((n+90)%100-10)%10-1]||"th"}
let guess = []
let correctCount = 0

function memoryTest(numPlays) {
    for (let i = 0; i < numPlays; i++) {
        nums[i] = Math.random() * (100 - 1) + 1;
        nums[i] = nums[i].toFixed(0);
    };
    console.log(nums)
    alert("Your numbers are " + nums)
    alert("Please wait 15 seconds")
};

function numberAsk() {
    for (let i = 0; i < nums.length; i++) {
        guess[i] = prompt("What is the " + (i+1) + nth(i+1) + " number")
    };
    for (let i = 0; i < nums.length; i++) {
        if (guess[i] === nums[i]) {
            correctCount++
        };
    };3
    
    alert("you got " + correctCount + " out of " + nums.length + " correct")    
};6


memoryTest(plays)
setTimeout(numberAsk, 15000)