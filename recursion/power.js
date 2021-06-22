// Write a function called power which accepts a base and an exponent. This function should return
// the power of base to the exponent. This function should mimic the functionality of Math.pow()
// Do not worry about negative bases and exponents

// power(2,0) // 1
// power(2,2) // 4

function power(base, exp){
    if (exp === 0) return 1
    return base * power(base, exp - 1)
}