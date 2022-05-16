//Задание 1
const array=[2,5,1,2,6,5,8,7,6,3,1];
console.log(array);
const array1=array.filter((item,index) =>{
    return array.indexOf(item)===index
})
console.log(array1)
//Задание 2
const arr=[1,2,3,4]
const arr1=[1,2,3,4]
const arr2=[1,3,4,6]
const arr3=[1,2,3,4,5]
function arrays(a,b){
if(a.join(',')===b.join(',')){
    console.log(true)
}else{console.log(false)}
}
arrays(arr,arr1)
arrays(arr,arr2)
arrays(arr,arr3)
//Задание3
const arr4=[1,2,5,7,5,10];
const arr5=[1,2,3,8,6,10];
let arr6 = arr4.filter(function(item) {return arr5.indexOf(item) !== -1; }); 
console.log(arr6);




