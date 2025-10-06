
const createBarChart = (data) => {
    const svg = d3.select(".responsive-svg-container")
        .append("svg")
        .attr("viewBox", "0 0 1200 400") // temporary; we’ll adjust layout soon
        .style("border", "1px solid black"); // dev-only border so we see the canvas
    svg
        .selectAll("rect")
        .data(data)
        .join("rect");
};
