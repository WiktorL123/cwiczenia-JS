/*LEETCODE
* 796. Rotate String
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 */

function rotateString(s, goal){
    if (s.length !==goal.length) return false
    let rotated =  s
    for (let i = 0; i<goal.length; i++){
        rotated = rotated.slice(1) +rotated[0]
        if (rotated===goal) return true
    }
    return false
}
console.log(rotateString('abcde', 'bcdea'))
console.log(rotateString('abcde', 'abced'))