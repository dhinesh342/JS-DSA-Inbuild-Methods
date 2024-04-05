//reverse arrary
let arr = ['A', 'H', 'P', 'L', 'A'];

let len=arr.length;

for(let i=0;i<len/2;i++){
    [arr[i],arr[len-1-i]]=[arr[len-1-i],arr[i]];
}

console.log(arr);