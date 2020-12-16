google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Wheat', 11],
          ['Bajra', 2],
          ['Rice',  2],
          ['Corn', 2],
          ['Seed',    7]
        ]);

        var options = {
          title: 'Crops Activity'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }