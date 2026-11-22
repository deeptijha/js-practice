/*function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
const counter2 = makeCounter();
console.log(counter2());  
*/
function makeAdder(num){
        return function(i){
        //num=num+i;
        return num+i;
    };

}

const addFive=makeAdder(5);
console.log(addFive(3));
console.log(addFive(10));
const addTen = makeAdder(10);
console.log(addTen(1));
