function example (){
    let clous =100;
    return function (b, c=true,d=true){
       if(c){
        clous +=b ;
       }else{
        clous -=b ;
       }
       if(d){
           clous +b;
       }else{
           clous = b;
       }
       return clous
    }
}
const clouss=example();

console.log(clouss(100));
console.log(clouss(100));
console.log(clouss(100));
console.log(clouss(100));
console.log(clouss(100));
console.log(clouss(100));
console.log(clouss(100,false));
console.log(clouss(100,false));
console.log(clouss(100,false));
console.log(clouss(100,false));
console.log(clouss(100,true,false));


