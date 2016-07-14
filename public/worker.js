onmessage = function(e) {
  // console.log('Message received from main script');
  // var workerResult = 'Result: ' + (e.data[0]);
  // console.log('Posting message back to main script');
  var result = expensiveOp()
  postMessage(result);
}


function expensiveOp(){
  var i = 0
  var sum = 50
  var numberOfIterations = 1000000000
  while(i < numberOfIterations){
    sum = Math.sqrt(sum) * 9.123
    i++
  }
  return sum
}
