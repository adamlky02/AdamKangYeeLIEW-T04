// t04-5-bars.js
const createBarChart = (data) => {
    const svg = d3.select(".responsive-svg-container")
        .append("svg")
        .attr("viewBox", "0 0 1200 400")
        .style("border", "1px solid black");

    // bind data → create one <rect> per row
    svg.selectAll("rect")
        .data(data)
        .join("rect");
};

