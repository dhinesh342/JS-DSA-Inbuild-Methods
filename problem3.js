
// check palindrome

let myString = "Malayalam is a language with lot of tongue twisters and my mam excels in all level";

let arr=myString.split(' ');

let res=[];

function checkPalindrome(word){
    let myWord=word.toLowerCase();
    if(myWord.split('').reverse().join('')===word.toLowerCase()){
        return true;
    }else{
        return false;
    }
}

for(let i=0;i<arr.length;i++){
    if(checkPalindrome(arr[i])){
        res.push(arr[i]);
    }
}

console.log(res);