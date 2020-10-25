function calculate() {
    // creates array named a
    var a = []
    //creates array named b
    var b = []
    //for loop - iterations = 0, as long as iteration is less than or equal 10
    //increase iterations by 1 until it becomes greater than 10
    for (i = 0; i <= 10; i++) {
        //assigns random number values between 0 and 1 for 
        //each iteration in arrays a and b
        a[i] = Math.random();
        b[i] = Math.random();
        //in the console, display the values for a and b for each iteration
        console.log(a);
        console.log(b);
    }

    updateTable(a, b);
    distance(a, b);
}

function updateTable(a, b) {
    var dataTable = document.getElementById(
      'data');
  
    dataTable.innerHTML = '';
  
    //Header row
    var row = dataTable.insertRow(0);
    var timeCell = row.insertCell(0);
    var aCell = row.insertCell(1);
    var bCell = row.insertCell(2);
  
    timeCell.innerHTML = 'i';
    aCell.innerHTML = 'a[i]';
    bCell.innerHTML = 'b[i]';
  
    //Insert data
    for (var i = 0; i < a.length; i++) {
        var row = dataTable.insertRow(-1);
        var timeCell = row.insertCell(0);
        var aCell = row.insertCell(1);
        var bCell = row.insertCell(2);
  
        timeCell.innerHTML = i;
        aCell.innerHTML = a[i];
        bCell.innerHTML = b[i];
    }
  }

function distance (a, b) {
    var distance = document.getElementById('distances');
    var sum = 0;
    for (i = 0; i< a.length; i++) {
        sum = a[i]-b[i] ** 2;
    }
     c = a.length + sum - 1;
     e = Math.sqrt(c);
     distanceAnswer = e / a.length;

     if (distanceAnswer < 0) {
         return distance.innerHTML = `The distance was less than 0. Please try again.`;
     }
     else {
        return distance.innerHTML = `The distance in distance between array a and b is ${distanceAnswer}`;
     }
    // console.log(sum)
}