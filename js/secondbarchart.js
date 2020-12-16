var randomdata = function() {
    return Math.round(Math.random() * 90) + 10
  };
  
  var dataBar = {
      labels: ["Mumbai ", "Assam", "Bihar", "Goa", "Haryana", "Punjab", "Sikkim", "Gujrat", "Odisha", "Ladakh"],
    datasets: [{
      fillColor: "#007bff",
      data: [randomdata(), randomdata(), randomdata(), randomdata(), randomdata(), randomdata(), randomdata(), randomdata(), randomdata(), randomdata()]
    }]
  }
  
  var index = 11;
  var ctx = document.getElementById("secondbarchart").getContext("2d");
  var dataBarHasil = new Chart(ctx).Bar(dataBar, {
    responsive: true,
    barValueSpacing: 3
  });
  
 