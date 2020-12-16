var randomData = function() {
    return Math.round(Math.random() * 90) + 10
  };
  
  var dataBar = {
    labels: ["Mumbai ", "Assam", "Bihar", "Goa", "Haryana", "Punjab", "Sikkim", "Gujrat", "Odisha", "Ladakh"],
    datasets: [{
      fillColor: "#990099",
      data: [randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData()]
    }]
  }
  
  var index = 11;
  var ctx = document.getElementById("barchart").getContext("2d");
  var dataBarHasil = new Chart(ctx).Bar(dataBar, {
    responsive: true,
    barValueSpacing: 3
  });
  
  