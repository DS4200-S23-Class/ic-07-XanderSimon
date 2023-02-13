const FRAME_HEIGHT = 400;
const FRAME_WIDTH = 400;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};
const VIS_HEIGHT = (FRAME_HEIGHT - (MARGINS.top + MARGINS.bottom));
const VIS_WIDTH = (FRAME_WIDTH - (MARGINS.left + MARGINS.right));

const DATA = [55000, 48000, 27000, 66000, 90000];
const MAX_Y = d3.max(DATA, (d) => {return d;})
const Y_SCALE = d3.scaleLinear()
  .domain([0, MAX_Y*1.1])
  .range([0, VIS_HEIGHT])

// creating the frame
const FRAME1 = 
  d3.select("#vis1")
    .append("svg")
      .attr("height", FRAME_HEIGHT)
      .attr("width", FRAME_WIDTH)
      .attr("class", "frame");


// adding the data points
FRAME1.selectAll("points")
  .data(DATA)
  .enter()
  .append("circle")
    .attr("cx", 10 + MARGINS.left)
    .attr("cy", (d) => {
      return (Y_SCALE(d) + MARGINS.bottom);})
    .attr("r", 5)
    .attr("class", "point");

// creating axis
FRAME1.append("g")
  .attr("transform", "translate(" + MARGINS.left + "," + MARGINS.top + ")")
  .call(d3.axisLeft(Y_SCALE).ticks(5))
