/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/



  //full api url including api key
  //"http://api.openweathermap.org/data/2.5/weather?q=0a7b14f5147f5d66e663155b0d5d8bcf
  var city = prompt("Enter Your City:");
  var country = prompt("Enter Your Country:");
  var temp = 0;
   console.log(city);
   console.log(country);
  if (city === "" || country === "") {
      // when user enters a blank space tis alert will appear
      alert("OOPS! You Must Enter A City & A Country!")
  };


  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
  var apiKey = "0a7b14f5147f5d66e663155b0d5d8bcf";
  $.ajax({
    url: weatherUrl+city+","+country+"&appid="+apiKey,

    success: function(r){
       temp=r.main.temp;
       convert();

    },
       error: function(r){
         console.log(r);
       }

  });

  function convert(){
    var temp2 = temp * 9 / 5 - 459.67;
    $('#temperature').html(temp2 + " F");
  }
