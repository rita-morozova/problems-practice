// Given two positive integers, find out if the two numbers have the same frequency of digits
// Should be O(n)
// sameFrequency(182,281) -> true
// sameFrequency(222,22) -> false

function sameFrequency(num1, num2){
    let strNum1 = num1.toString()
    let strNum2 = num2.toString()

    if(strNum1.length !== strNum2.length) return false

    let countNum1 = new Map()
    let countNum2 = new Map()

    for(const digit of strNum2){
        countNum1.set(digit, countNum1.get(digit) + 1 || 1)
    }

    for(const digit of strNum2){
        countNum1.set(digit, countNum1.get(digit) + 1 || 1)
    }

    for(let key in countNum1){
        if(countNum1[key] !== countNum2[key]) return false
    }

    return true
}