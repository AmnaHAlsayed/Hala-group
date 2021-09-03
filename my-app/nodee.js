

const fs=require('fs');

const userName= 'Naya';

fs.writeFile('user_daTA.txt','Name'+userName,(err)=>{
if (err){
    console.log(err);
return;
}
console.log("the Name is wrotr");}
);
