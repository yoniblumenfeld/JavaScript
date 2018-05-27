console.log(isPalindrome("asdasd"))

function isPalindrome(x) {
    return x.split("").reverse().join("")===x
}