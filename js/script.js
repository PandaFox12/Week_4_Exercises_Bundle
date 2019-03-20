/*
Pascal Vos
1422537vos
20-03-2019
*/

// ------------------------------------------------------------------------------------------------------------------------------

// Exercise 15 Sorting and trimming arrays
var btn_Exercise_15 = document.getElementById("sorting_And_Trimming_Array");
btn_Exercise_15.addEventListener("click", sorting_And_Trimming_Array);

var currentArray = [300, 20, 60, 100, 400, 130, 270, 290, 30, 450, 50];
var tempArray = [];

function sorting_And_Trimming_Array()
{  
    for (i = 0; i < currentArray.length; i++) 
    {  
        for (j = 0; j < currentArray.length; j++) 
        { 
            if (currentArray[j] < currentArray[j + 1]) 
            {
                tempArray = currentArray[j];
                currentArray[j] = currentArray[j + 1];
                currentArray[j + 1] = tempArray;
            }
        }
    }
    //Removes the highest number
    currentArray.pop();
    //Removes the slowest number
    currentArray.shift();
    console.log("------------------------------------------------------------------------------------------------------------------------------")
    console.log("Exercise 15 Sorting and trimming arrays")
    console.log(currentArray)
}

// Exercise 16 Mapping arrays
var btn_Exercise_16 = document.getElementById("array_To_Map");
btn_Exercise_16.addEventListener("click", map_Method_Values);

function map_Method_Values()
{
    var method_Array = [1,2,3,4,5,6,7,8,9,10]
    console.log("------------------------------------------------------------------------------------------------------------------------------")
    console.log("Exercise 16 Mapping arrays")
    console.log("Before")
    console.table(method_Array)
    const method_Map = method_Array.map(x => x * 4);
    console.log("After")
    console.table(method_Map)
}

// Exercise 17a Resizing paragraphs in d3
var btn_Exercise_17a = document.getElementById("resizing_Paragraphs_In_D3");
btn_Exercise_17a.addEventListener("click", resize_Paragraphs_d3);

var sizes = [4, 8, 15, 16, 23, 42];
function resize_Paragraphs_d3()
{
    for(i = 0; i < 6; i++)
    {  
        d3.select("#paragraphs").selectAll("p")
        .data(sizes)
        .style("font-size", function(d) 
        { 
            return d + "px"; 
        });
    }
}

// Exercise 17b No paragraphs in d3
var btn_Exercise_17b = document.getElementById("no_Paragraphs_In_D3");
btn_Exercise_17b.addEventListener("click", no_Paragraphs_In_D3);

var sizes = [4, 8, 15, 16, 23, 42];
function no_Paragraphs_In_D3()
{
    for(i = 0; i < 6; i++)
    {
        var div = document.getElementById("placeholder_Paragraphs");
        var paragraph = document.createElement("p");       
        var text = document.createTextNode("17b Paragraph " + (i + 1));      
        paragraph.appendChild(text);                               
        div.appendChild(paragraph);  
        d3.select("#placeholder_Paragraphs").selectAll("p")
        .data(sizes)
        .style("font-size", function(d) 
        { 
            return d + "px"; 
        });
    }
}

// Exercise 18 The matrix in a table in D3
var btn_Exercise_18 = document.getElementById("generated_Matrix_Table");
btn_Exercise_18.addEventListener("click", generated_Matrix_Table);

function generated_Matrix_Table()
{
    var matrix = 
    [
        [11975,  5871, 8916, 2868],
        [ 1951, 10048, 2060, 6171],
        [ 8010, 16145, 8090, 8045],
        [ 1013,   990,  940, 6907]
    ];

    var table = d3.select('body')
    .append('table')
    .style('border-collapse', 'collapse')
    .style('border', '2px black solid')
    .style('margin-left', ' auto')
    .style('margin-right', ' auto');
    var	tbody = table.append('tbody');

    var tr = d3.select("tbody")
    .selectAll("tr")
    .data(matrix)
    .enter().append("tr")
    .on("mouseover", function() 
      {
          d3.select(this).style('background-color', 'pink');
      })

    var td = tr.selectAll("td")
    .data(function(d, i) 
    { 
        return Object.values(d);
    })
    .enter().append("td")
    .style('border-collapse', 'collapse')
    .style('border', '2px black solid')
    .text(function(d)
    { 
        return d; 
    })
    .on("mouseover", function() 
    {
        d3.select(this).style('background-color', 'purple');
    })
}

// Exercise 19 Growing circles in d3
var btn_Exercise_19 = document.getElementById("generated_Growing_Circles");
btn_Exercise_19.addEventListener("click", generated_Growing_Circles);

function generated_Growing_Circles()
{
    var myData = [1,2,3,4,5];
    var svg = d3.select("svg");
    var circles = svg.selectAll("placeholder_circles")
    .data(myData)
    .enter().append("circle")

    circles.attr("cx", myData => myData * 25)
    .attr("cy", myData => myData * 25)
    .attr("r", 25)
    .attr("fill", function(myData) 
    {
        if (myData % 2 === 0) 
        {
            return "red"
        }
        else
        {
            return "green" 
        };
    })
}

// Exercise 25 City data with squares and circles
var btn_Exercise_25 = document.getElementById("generated_Map_SVG_Rect_Circle");
btn_Exercise_25.addEventListener("click", generated_Map_SVG_Rect_Circle);
function generated_Map_SVG_Rect_Circle()
{
    d3.select("body").append("svg")
    .attr("id", "map_SVG")
    .attr("width", 640)
    .attr("height", 360)
    .attr("viewBox", "0 0 800 400")

    for(var i = 0; i < cities.length; i++)
    {
        let positionX = (cities[i].longitude + 180) * 2;
        let positionY = (90 - cities[i].latitude) * 2;
        create_Map_Circle(positionX, positionY);
    }

    document.getElementById("SVG_Map_Square").style.visibility="visible";
    document.getElementById("SVG_Map_Circle").style.visibility="visible";
}

var btn_Exercise_25Square = document.getElementById("SVG_Map_Square");
btn_Exercise_25Square.addEventListener("click", SVG_Map_Square);

function SVG_Map_Square()
{
    var svg = d3.select("#map_SVG").transition();
    svg.selectAll("circle")
    .attr("width", "3")
    .attr("height", "3")
    .attr("fill", "red");
}

var btn_Exercise_25Circle = document.getElementById("SVG_Map_Circle");
btn_Exercise_25Circle.addEventListener("click", SVG_Map_Circle);

function SVG_Map_Circle()
{
    var svg = d3.select("#map_SVG").transition();
    svg.selectAll("circle")
    .attr("r", 2)
    .attr("fill", "orange");
}

function create_Map_Circle(positionX, positionY)
{
    var map_SVG = document.getElementById("map_SVG");
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", positionX);
    circle.setAttribute("cy", positionY);
    circle.setAttribute("r", 2);
    map_SVG.appendChild(circle);
}