//Initialize variables
var data_full;
var state_id;
var data;
var path;
var valueline;
var xAxis;
var yAxis;
var svg;
var x1_domain;
var x2_domain;
var y1_domain;
var y2_domain;
var margin = {top: 200, right: 80, bottom: 30, left: 200},
    width = 1280//1600 - margin.left - margin.right,
    height = 540//700 - margin.top - margin.bottom;

var x;
var y;
var parseDate = d3.time.format("%Y").parse;
//Collect data from the source

svg = d3.select("#chart1")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + (margin.left+150) + "," + (margin.top-10) + ")");

g = svg.append("g")
	
	
	x = d3.scale.linear().range([0, width]);
	y = d3.scale.linear().range([height, 0]);

//Call axes		
var xAxis = d3.svg.axis().scale(x)
			.orient("bottom").ticks(20).tickFormat(d3.format("d"));
 
var yAxis = d3.svg.axis().scale(y)
			.orient("left").ticks(10);

	    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
		 .attr("transform", 
              "translate(" + (margin.left-500) + "," + (margin.top-420) + ")")
		.selectAll("text")
            .style("fill", "black")
			.style("font-size","14px")
			.style("font-family","Verdana")
			.attr("dx", "-.5em");
		
    svg.append("g")
        .attr("class", "x axis")
		.attr("transform", "rotate(90)")
        .attr("transform", "translate(0," + height-50 + ")")
        .call(xAxis)
		.selectAll("text")
            .style("fill", "black")
			.style("font-size","14px")
			.style("font-family","Verdana")
			.attr("dy", "1.2em")	
console.log("he")
var g;
//Call the axis for the first time
//call_svg("flag");
//Creating svg and axes

	




