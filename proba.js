
function asd (a,b, ...args) {
    console.log(a,b, args);
    
  }
  
  asd(1,3)
  asd(1,3,2)
  asd()

const count = 2;

  switch(count) {
    case 1: 
    console.log('Hello 1');
    break;

    case 2: 
    console.log('Hello 2');
    break;

    default: 
    console.log('Hello');
       
  }

  function getName (count) {
    switch(true){

        
        default: return 'Many'
        case count < 2:
            return 'ss'
    }
  }


  const user = { 
    name: 'Zhenya',
    username: 'Hella',
    age: 14,
  }


  const print = () => {
    console.log(`Welcome ${user.name}  ${user.age} YOUR nickname is ${user.username}`);
    
  }

  print();

const salary = [1000, 2000, 2500,4000,5500]
const word = ['Apple' , 'Sunday' , 'banana']

console.log(salary, word);


salary[1] = 5000;
salary[5] = 32000;
salary[salary.length] = 320002
salary.push(200000, 100, 10000)


console.log(
   caluculate(add, 1+2)

);


function caluculate ( operation, a,b ) {
   return operation(a,b)
}


function add (a,b){
  return a+b;
}

function subtrac (a,b){
  return a-b;
}