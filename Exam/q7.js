// Description: Write a function 'decToBin' which takes a decimal number and returns its binary.

// Constraints: Nil

// Sample Input: 45

// Sample Output: 101101

// Test Cases: Input#1: 86

// Output#1:
// 1010110


// Input#2:
// 3672

// Output#2:
// 111001011000

function decToBin(num){
    let bin = 0;
    let rem, i = 1, step = 1;
    while (num != 0) {
        rem = num % 2;
        num = parseInt(num / 2);
        bin = bin + rem * i;
        i = i * 10;
    } 
    return bin;
}

let num=process.argv[2];
let ans=decToBin(num);
console.log(ans);


