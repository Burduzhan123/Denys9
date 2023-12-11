//function reverseStr(str){
//    return str.split("").reverse() .join("");
//}

//console.log(reverseStr("Hello world"));

//function isPalindrome(str) {
//    strReverse = str.split('').reverse().join('');
//    if (strReverse == str) {
//        return 'yes';
 //   } else {
//        return 'no';
 //   }
//}

//test = isPalindrome('12321');

//console.log(test);

function findGCD (a, b) {
	if (b > a) return findGCD(b, a);
	if (!b) return a;
	return findGCD(b, a % b);
}
console.log(findGCD(10, 25));