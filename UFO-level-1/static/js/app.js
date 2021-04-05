// from data.js
var tableData = data;

// Select the buttom
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers
button.on("click",runEnter);
form.on("submit", runEnter);

//Complete the event handler function for the form
function runEnter(){

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element to get the raw HTML node
    var inputElement = d3.select("#datetime")
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // Console out to check if input value is getting correct values
    console.log(inputValue);
    console.log(tableData);
    // Filter data based on input
    var filteredData = tableData.filter(data => data.datetime === inputValue);
    // Console out to check filter is pulled correctly
    console.log(filteredData);


    // Build Table
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody")
    // Clear table before rendering for clean start
    tbody.html("");
    var trow;
    // Iterate through each ufo sighting from filteredData
    filteredData.forEach((data) => {
        trow = tbody.append("tr");
        trow.append("td").text(data.datetime);
        trow.append("td").text(data.city);
        trow.append("td").text(data.state);
        trow.append("td").text(data.country);
        trow.append("td").text(data.shape);
        trow.append("td").text(data.durationMinutes);
        trow.append("td").text(data.comments);

    })
}
