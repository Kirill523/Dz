class People {
   constructor(value){
       this.name=value.name
       this.surname=value.surname
   }
   get getFullName(){
    return this.name+' '+this.surname+'-'
   }
}
class Worker extends People {
    constructor(value){
        super(value)
        this.rate=value.rate
        this.day=value.day
    }
    get getSalary(){
        return this.rate*this.day
    }
 }
const worker= new Worker({
    name:'Aleksey',
    surname:'Sidorov',
    rate:1500,
    day:15
})
console.log(worker.getFullName,`Заработная плата сотрудника:${worker.getSalary}`)
const worker2=new Worker({
    name:'Maxim',
    surname:'Veselov',
    rate:3000,
    day:25
})
console.log(worker2.getFullName,`Заработная плата сотрудника:${worker2.getSalary}`)
const worker3=new Worker({
    rate:1000,
    day:20,
    name:'Ivan',
    surname:'Petrov'
})
console.log(worker3.getFullName,`Заработная плата сотрудника:${worker3.getSalary}`)

