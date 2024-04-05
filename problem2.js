//find the indexes which on sum gives target

let numArray = [2,7,1,11,15,4,3,9];
let target = 10;

function find(arr){
    let res=[];
    let myMap=new Map();
    for(let i=0;i<arr.length;i++){
        let rem=target-arr[i];
        if(myMap.has(rem)){
            res.push([myMap.get(rem),i]);
        }else{
            myMap.set(arr[i],i);
        }
    }

    return res;
}

let ans=find(numArray);

console.log(ans);