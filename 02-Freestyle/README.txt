# Assignment 2 - Freestyle Visualization

Link             : http://arunvodc.github.io/02-Freestyle/Analyzing_Monthly_Expense.html
File Type        :  MD (Markdown Document)
File Name        :  README
File Reference   :  Analyzing_Monthly_Expense.html
Author           :  Arun Vadivel

Purpose of the File:
********************

This is a JavaScript D3.js file created for Visualizing my monthly expense for August 2015 and figure out which spending to be reduced in order to have savings from next month.

Data and Transformations:
*************************

The dataset is based on my recordings of my expenditures over the month of August.
Some unnecessary information from the data was cleansed, manually.

Visual Encodings:
*****************
The design presents three 3 charts:
1. Bar chart for Merchants: Dataset form the csv file. This chart display various expenditures and from which account the money was spent.
2. Bar chart for Payment Method: Calculated from the csv based on the payment type and presented payment method wise expenditure.
3. Pie chart for Payment Split: This chart that shows the percentage of expenditure based on different payment methods.
4. Lines (thin lines) to track the dollars in numbers with respect to different bars.

Technical Achievements:
***********************

1. Freestyle.html is developed using 540 lines of code in JavaScript with D3.js.
2. Two bar charts are presented and one pie chart is shown in the visualization using Arc and Path functions present in D3.js.
3. Rectangles and Lines are also used in the visualization.
4. For loops are used to avoid code duplicated and provide more modularity ot the code.
5. Math functions are used to round of numbers.
6. Data is segregated using advanced calculations and by comparisons using "if" command. These segregated data are stored in various variables.
7. Dynamic data are used in two levels and calculated based and stored based on the segregated data mentioned in the previous line.
8. Changing the position of the charts can be done just by changing two variables (x, y) since the entire code is developed by keeping modularity in mind.

Design Achievements:
********************

1. The visualization presents the charts in a pleasing manner to the eyes and the color usage is consistent (Bluish appearance), without affecting the data differentiation.
2. The visualization clearly prints the purpose and the observation to the user.
3. Testing was conducted with 5 different users without prior knowledge about the chart. The average time to understand the visualization was 4 seconds.
4. Observation is presents in bring red font for being catchy.
5. Thin lines are shown in the chart to track the dollars in numbers with respect to different bars.
6. The chart are placed in precise order to help the user to read and analyze the data in less time.
7. Using three different chars clearly tells the story of my expenditure for the previous month.

References:
***********
https://www.youtube.com/watch?v=2S1AbEWX85o
https://www.youtube.com/watch?v=kMCnzUE07QA
https://www.youtube.com/watch?v=n9kKdbzCiLI
http://www.d3noob.org/2012/12/getting-data.html
https://github.com/mbostock/d3/wiki/SVG-Shapes
https://www.dashingd3js.com/data-structures-d3js-accepts

[This is a link](http://arunvodc.github.io/02-Freestyle/Analyzing_Monthly_Expense.html) to Analyzing_Monthly_Expense.html (hint: edit this).
