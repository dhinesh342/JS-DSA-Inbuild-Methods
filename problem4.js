//find the non repeating smallest letter in the string 
// given str="abcddeeesssaajjii"

let str="abcddeeesssaajjii"

function find(str){
    let myMap=new Map();
    let res=[];
    for(let i=0;i<str.length;i++){
        if(myMap.has(str[i])){
            let val=myMap.get(str[i])+1;
            myMap.set(str[i],val);
        }else{
            myMap.set(str[i],1);
        }
    }
    myMap.forEach((value,key)=>{
        if(value==1){
            res.push(key);
        }

        // console.log(y);
        
    })
    if(res.length==0){
        return null;
    }else{
        res.sort();
        return res[0];
    }
    
    
}

let res=find(str);

console.log(res);