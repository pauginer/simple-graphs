//Adjust metricName and options:
google.load('visualization', '1', {packages: ['corechart']});
google.setOnLoadCallback(function() {
	var metricName = "published-articles";
	var options = {
    	width: 1000,
    	height: 563,
    	hAxis: {
  			title: 'Time'
    	},
    	vAxis: {
    		title: 'Published articles'
    		}
    	};

  $.getJSON(metricName + '.json', function(json) {
  	console.debug(json);
    var data = new google.visualization.DataTable(json);
	var chart = new google.visualization.LineChart(document.getElementById(metricName));
    chart.draw(data, options);
    
  });

});