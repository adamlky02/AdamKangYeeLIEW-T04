// t04-5-bars.js
const createBarChart = (data) => {
    const svg = d3.select(".responsive-svg-container")
        .append("svg")
        .attr("viewBox", "0 0 1200 400")
        .style("border", "1px solid black");

    const barHeight = 16;
    const barSpacing = 4; // gap between bars

    svg.selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", d => `bar bar-${d.count}`)
        .attr("width", d => d.count)
        .attr("height", barHeight)
        .attr("x", 0) // start at left
        .attr("y", (d, i) => i * (barHeight + barSpacing)) // offset each bar
        .attr("fill", "steelblue"); // optional color;
};

