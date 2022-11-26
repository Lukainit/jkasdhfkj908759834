

function bullshitForGit (a, b){

    let someMasive = [],
        someText = ['html', 'css', 'js'];

    console.log(someText[0]); 

    let str = '';
    let number = 8; 

    for(let i = 0; i < number; i++){
        for(let k = 1; k < i; k++){
            str += "*"
        }
        str += '\n'
    };

    console.log(str);

    function calc(a, b){
        return a + b 
    }; 

    console.log(calc(2,4)); 

};

let frontEnd = ['Alex', 'Nazar']; 


let storeName = 'Levada';

let storeDescription = {
    budget: 10000, 
    employees: ['Nazar', 'Masha', 'Liza'],
    products: {
        iphone: '1200$',
        macbook: '1800$'
    },
    open: true

};

let a = [];

a.push(1,2,'ff', false);

console.log(a[2]);

console.log(storeDescription.employees[0,2]);



let points = [
    {х: 0, у: 0}, {х: 1, у: 1};
]    


let poinst = [
    {x: 0, y: 2},
    {x: 1, y: 2}
];

console.log(poinst[0]['y']);


let count = 0; 



count++; 
count--; 
count += 1;
count -= 5;

console.log(count)

let x = 2, y = 3



console.log(x === y);
console.log(x !== y);
console.log(x < y);
console.log(x > y);

console.log("b" < "a"); 

function plusl(x) { 
    return x + 1;
}; 

plusl(y);

console.log('arr' + " - obj"); 

let incr = 10,
    decr = 20;
    
console.log(incr--);
console.log(decr++);

console.log(2*4 === 8);
console.log(2,2)

const isCheked = true,
      isClose = !true, 
      isOpen = true

console.log(isCheked && isClose && isOpen);



const isCheked = !true,
      someDetails = true

console.log(isCheked && someDetails


