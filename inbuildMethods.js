//accenture interview
//Basic JS methods

// reverse
// let arr=[1,2,3,4,5];
//arr.reverse();
// let str="Dhinesh";
// let ans=str.split('').reverse().join('');
// console.log(ans);
// let newarr=arr.map((val)=>{
//     return val=val+1;
// })

// arr.forEach((e,index)=>{
//     arr[index]=e+1;
// })

// console.log(arr);

// let newArr=arr.filter((e)=>e%2==0);
// console.log(newArr);

///flatten function
// function flattenObject(obj,prefix=''){
//     let flattened={};
//     for(let key in obj){
//         if(typeof obj[key]==="object" && obj[key]!==null){
//             let nested=flattenObject(obj[key],`${prefix}${key}.`);
//             flattened={...flattened,...nested};
//         }else{
//             flattened[`${prefix}${key}`]=obj[key];
//         }
//     }
//     return flattened;
// }

// // Example usage:
// const nestedObject = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: 4
//         }
//     },
//     g: 5
// };

// const flattenedObject = flattenObject(nestedObject);
// console.log(flattenedObject);