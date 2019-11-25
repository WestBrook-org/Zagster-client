// a memory location that never changes. CAPITOLIZED
const BASE_URL = "https://zagster-service.herokuapp.com"
const PI = 3.14159

// jQuery command. Wait until the web page loads call call fuction whose name is in parentheses
// function call means run the code
// $(greeter)


// //call function add (use it - make it run)
// add(2,3);
// // greeter is the function identifier. name is the functions argument (info it need to do its job)
// function add(num1, num2){
//     answer = num1 + num2;
//     console.log("The answer is: " + answer);
//     return answer;
// }
// function greeter(name){
//     alert("welcome to " + name + "data visualisation")
// }

// greeter("Brook West")


// var person = {name: "Brook", age: 21, car: {model: "Toyota", year: 2011} }
// console.log ("My name is " + person.name)
// console.log ("My age is " + person.age)
// console.log ("My car model is " + person.car.model)

// if (person.age > 50){
//     alert("you're old!")
// }

// var data = {"2016":[{"9":220},{"10":141},{"11":89},{"12":16}]}
// var year_list = data[2016]
// console.log('year list is ' + year_list)



// $(updateView)
//  $(updateGraph)
 
let years = []
let months2016 = []
let months2017 = []
let months2018 = []


function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)

  $.when ($.getJSON(BASE_URL + "/ride/count/per_month",perYear),
  ).then(updateChart);
  function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
  }
}


function perYear(data) {
    for (var index = 0, month=9; index <=3, month<=12; ++index, ++month){
        months2016.push(data[2016] [index] [month])
    }
    console.log("2016 data by month is easy " + months2016)

function updateRideCount(data) {
  numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
}

// function updateGraph() {
//     var ctx = document.getElementById('myChart').getContext('2d');
//     var chart = new Chart(ctx, {
//         // The type of chart we want to create
//         type: 'line',
    
//         // The data for our dataset
//         data: {
//             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//             datasets: [{
//                 label: 'My First dataset',
//                 backgroundColor: 'rgb(255, 99, 132)',
//                 borderColor: 'rgb(255, 99, 132)',
//                 data: [0, 10, 5, 2, 20, 30, 45]
//             }]
//         },
    
//         // Configuration options go here
//         options: {}
//       }); 
//     }
}
