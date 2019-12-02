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
   
   function perYear(data) {
   
   
       var data2018 = data[2018] 
   
      
       console.log(data2018[0][1])
       my_data.push(data2018[0][1])
       console.log(data2018[1][2]) 
       my_data.push(data2018[1][2])
       console.log(data2018[2][3]) 
       my_data.push(data2018[2][3])
       console.log(data2018[3][4]) 
       my_data.push(data2018[3][4])
       console.log(data2018[4][5]) 
       my_data.push(data2018[4][5])
       console.log(data2018[5][6]) 
       my_data.push(data2018[5][6])
       console.log(data2018[6][7]) 
       my_data.push(data2018[6][7])
       console.log(data2018[7][8]) 
       my_data.push(data2018[7][8])
       console.log(data2018[8][9]) 
       my_data.push(data2018[8][9])
       console.log(data2018[9][10]) 
       my_data.push(data2018[9][10])
     
        
     }
   
   function updateChart() {
       var ctx = document.getElementById('myChart').getContext('2d');
       var chart = new Chart(ctx, {
           // The type of chart we want to create
           type: 'doughnut',
   
           // The data for our dataset
           data: {
               labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October'],
               datasets: [{
                   label: 'Zagster Number of Rides Per Month in 2018',
                   backgroundColor: 'rgb(128, 0, 128)',
                   borderColor: 'rgb(245, 245, 245)',
                   //data: [0, 10, 5, 2, 20, 30, 45]
                   data: my_data  //make the chart use your my_data array
               }]
           },
   
           // Configuration options go here
           options: {}
       });
   }