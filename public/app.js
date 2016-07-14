var myWorker = new Worker("worker.js");

myWorker.onmessage = function(e) {
  var display = document.getElementById('display');
  // var sum = expensiveOp();
  display.innerText = e.data;
}

window.onload = function(){

  var button = document.getElementById('main');
  button.onclick = function(e){
    console.log('I got clicked')
    alert("Clicked")
  }

  myWorker.postMessage([])

  // var display = document.getElementById('display');
  // var sum = expensiveOp();
  // display.innerText = sum;

};


// function expensiveOp(){
//   var i = 0
//   var sum = 50
//   var numberOfIterations = 1000000000
//   while(i < numberOfIterations){
//     sum = Math.sqrt(sum) * 9.123
//     i++
//   }
//   return sum
// }
