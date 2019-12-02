// // a memory location that never changes. CAPITOLIZED
// const BASE_URL = "https://zagster-service.herokuapp.com"
// const PI = 3.14159

// // jQuery command. Wait until the web page loads call call fuction whose name is in parentheses
// // function call means run the code
// // $(greeter)


// // //call function add (use it - make it run)
// // add(2,3);
// // // greeter is the function identifier. name is the functions argument (info it need to do its job)
// // function add(num1, num2){
// //     answer = num1 + num2;
// //     console.log("The answer is: " + answer);
// //     return answer;
// // }
// // function greeter(name){
// //     alert("welcome to " + name + "data visualisation")
// // }

// // greeter("Brook West")


// // var person = {name: "Brook", age: 21, car: {model: "Toyota", year: 2011} }
// // console.log ("My name is " + person.name)
// // console.log ("My age is " + person.age)
// // console.log ("My car model is " + person.car.model)

// // if (person.age > 50){
// //     alert("you're old!")
// // }

// // var data = {"2016":[{"9":220},{"10":141},{"11":89},{"12":16}]}
// // var year_list = data[2016]
// // console.log('year list is ' + year_list)



// $(updateView)
//  $(updateGraph)
 
// let years = []
// let months2016 = []
// let months2017 = []
// let months2018 = []


// function updateView() {
//   $.getJSON(BASE_URL + "/rides/count" , updateRideCount)

//   $.when ($.getJSON(BASE_URL + "/ride/count/per_month",perYear),
//   ).then(updateChart);
//   function updateRideCount(data) {
//     numberOfRides = data.count
//     $("h2#rideCount").html(numberOfRides)
//   }
// }


// function perYear(data) {
//     for (var index = 0, month=9; index <=3, month<=12; ++index, ++month){
//         months2016.push(data[2016] [index] [month])
//     }
//     console.log("2016 data by month is easy " + months2016)

// function updateRideCount(data) {
//   numberOfRides = data.count
//   $("h2#rideCount").html(numberOfRides)
// }

// function updateGraph() {
//  var ctx = document.getElementById('myChart').getContext('2d');
//  var chart = new Chart(ctx, {
// // / The type of chart we want to create
// type: 'line',
    
// //         // The data for our dataset
//   data: {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [{
//   label: 'My First dataset',
//   backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgb(255, 99, 132)',
//           data: my_data
//        }]
//    },
    
// //         // Configuration options go here
//       options: {}
//     }); 
//   }
// }

// function perYear(data) {
//   var data2016 = data[2016]
//   console.log(data2016[0][9])
//   my_data.push(data[0][9])
// }

// a constant's value can never change.
const BASE_URL = "https://zagster-service.herokuapp.com"

//call function updateView() after the page loads
$(updateView)


//Arrays to hold data points pulled from JQUERY
var my_data = []

//updateView() function definition
//this function gets JSON data from the web server endpoint /rides/count/per_month and calls the function perYear()
//after the function perYear runs it will call the function updateChart()
function updateView() {
  
  $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear), 
    ).then(updateChart);
}


// This is what your JSON data looks like given the endpoint /rides/count/per_month 
//If you type https://zagster-service.herokuapp.com/rides/count/per_month in your web browser, you'll see this data
// {"2016":[{"9":220},{"10":141},{"11":89},{"12":16}],
// "2017":[{"1":20},{"2":31},{"3":79},{"4":88},{"5":156},{"6":301},{"7":405},{"8":187},{"9":401},{"10":353},{"11":113},{"12":79}],
// "2018":[{"1":94},{"2":83},{"3":154},{"4":1216},{"5":2400},{"6":1756},{"7":2748},{"8":1912},{"9":3648},{"10":2404}]}

// Funtion definition for perYear(data)
// The data argument "data" is your JSON data
// This function extracts information from your JSON data and put it in an array called my_data
function perYear(data) {

    // data2016 = [{"9":220},{"10":141},{"11":89},{"12":16}]
    var data2016 = data[2016]  //extract the information associated with the key "2016" and put this info in a variable called data2016

    //extracting data for each month.We need to  specify which array element and then specify the key before we can get the data for that key
    //So data2016[0][9] means look at the zero-ith array element {"9":220} and extract the data associated the key 9
    //result should be 220 
    console.log(data2016[0][9]) //print daya to the console to make sure we did it right
    my_data.push(data2016[0][9]) //add the data to the my_data array 
    console.log(data2016[1][10])  //looks at the one-ith array element {"10":141} extract data for key 10
    my_data.push(data2016[1][10])  //add the data to the my_data array 
    //keep going to get all data points

   
    //challenge - use a loop to extract the data
    //challenge extract the keys from the JSON data instead of manually typing them into the chart
     
  }
  
// Funtion definition for updateChart()
// This function creates your chart
// Make sure you have a <canvas> element in your index with an id="myChart"
function updateChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['September', 'October'],
            datasets: [{
                label: 'Zagster Number of Rides Per Month in 2016',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                //data: [0, 10, 5, 2, 20, 30, 45]
                data: my_data  //make the chart use your my_data array
            }]
        },

        // Configuration options go here
        options: {}
    });
}