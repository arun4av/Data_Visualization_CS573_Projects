//Function call to draw the lines
function draw_line(state_id, value, item)
{
	canvas.remove();
	//Access data from the CSV file
	d3.csv("crime.csv", function(error,data_all)
	{
		data = 
		data_all.filter(function(d)
		{
		return d.State==state_id;
		})

		if (value==true)
		{
		var values = [state_id]

		for(i=0;i<data.length;i++)
		{
			values.push(+data[i].Violent_Crime_rate)
		}

		data_ma.push(values)

		var year=['x']

		for(i=0;i<data.length;i++)
		{
			year.push(+data[i].year)
		}
		chart = c3.generate({
			 size: {
				height: 540,
				width: 1280
			},
			 legend: {
				position: 'right'
			},
			data: {
				bindto: '#chart',
			 x: 'x',
				columns: [
				year,
				data_ma[0]
					
				],
				type: 'spline',
				colors: {
					"Rhode Island": "#e74c3c",
					"South Dakota": "#f1c40f",
					"Vermont": "#2ecc71",
					"Iowa": "#3498db",
					"Nebraska": "#7f8c8d",
					"North Dakota": "#7FFF00",
					"New Hampshire": "#FAEBD7",
					"Wisconsin": "#00FFFF",
					"Connecticut": "#7FFFD4",
					"Utah": "#D2691E",
					"Maine": "#00FFFF",
					"Minnesota": "#FBB917",
					"Massachusetts": "#FFEBCD",
					"Washington": "#806517",
					"Oregon": "#FF2400",
					"Montana": "#FCDFFF",
					"Hawaii": "#C6AEC7",
					"Idaho": "#ffff00",
					"Pennsylvania": "#008080",
					"Kansas": "#B22222",
					"New Jersey": "#808000",
					"Colorado": "#BA55D3",
					"Indiana": "#FFEBCD",
					"West Virginia": "#A52A2A",
					"Ohio": "#FF6347",
					"California": "#191970",
					"New York": "#D2B48C",
					"Wyoming": "#CD853F",
					"Michigan": "#DAA520",
					"Missouri": "#006400",
					"Oklahoma": "#6A5ACD",
					"Arizona": "#2F4F4F",
					"New Mexico": "#B0E0E6",
					"Illinois": "#20B2AA",
					"Kentucky": "#FFA07A",
					"Maryland": "#8FBC8F",
					"Arkansas": "#00FFFF",
					"Tennessee": "#1E90FF",
					"Virginia": "#FFF5EE",
					"Delaware": "#FFFAFA",
					"Texas": "#BC8F8F",
					"North Carolina": "#FFF8DC",
					"Mississippi": "#800000",
					"Louisiana": "#696969",
					"Florida": "#A0522D",
					"Nevada": "#7CFC00",
					"Alabama": "#5F9EA0",
					"Georgia": "#DC143C",
					"South Carolina": "#FFD700",
					"Alaska": "#F0E68C",
					"Nevada": "#87CEFA",
					"Columbia": "Red"
				},

				color: function (color) {
					return  color;
				}
			},		
			  grid: {
				x: {
					show: true
				},
				y: {
					show: true
				}
			},
			axis : {
				x : {
					label: 'Years',
					
				},
				y: {
					label: 'Crime Rate'
				}
						
					
				},
				
				tooltip: {
				format: {
					title: function (d) { return "State(s)"+" "+"Rate(s)"; },
				}
			}				
		});

		for(i=1;i<data_ma.length;i++)
		{

		chart.load({
			columns: [
			data_ma[i]
			]
			});	
		}
		}
		else
		{			
			chart.unload({
				ids:state_id
			});
			for(i=0;i<data_ma.length;i++)
			{
			if(state_id==data_ma[i][0])
				{
					data_ma.splice(i,1)
				}
			}
		}
	})
}
