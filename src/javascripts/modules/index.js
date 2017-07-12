import * as d3 from 'd3';

const loadExample = () => {
  console.log(`
    jQuery: ${$},
    d3: ${d3}
  `);
}

export { loadExample };

const loadProjects = () => {

  d3.csv("projects.csv", function(projects) {

//
  var featured_work = d3.select("#projects");

// parse for featured
  var image = featured_work.selectAll(".block")
      .data(projects.filter(function(d){
        if(d.featured == "TRUE"){
          return d
        }
      }))
      .enter().append("div")
      .classed("block",true)

// set url
  var link = image.append("a")
    .classed("link",true)
    .attr("target", "_blank")
    .attr("href", function(d){ return d.url });

// container for inner content
  var inner = link.append("div")
    .attr("class", "block-container")

// images
  inner.append("img")
    .attr("src", function(d) { return d.image; })
    .attr("class", function(d) { return d.featured + " " + d.image })

// title
    image.append("span")
    .classed("title", true)
    .text(function(d){ return d.title })

// publication
  image.append("span")
    .classed("publication", true)
    .text(function(d){ return d.pub })


// secondary container
  var other_work = d3.select("#other");

// parse for non-featured stories
  var other_image = other_work.selectAll(".block")
      .data(projects.filter(function(d) {
        if(d.featured == "FALSE") {
          return d
        }
      }))
      .enter().append("div")
      .classed("block", true)

  var other_link = other_image.append("a")
      .classed("link",true)
      .attr("target","_blank")
      .attr("href",function(d){return d.url; })

  var other_inner = other_link.append("div")
    .attr("class", "block-container")

  other_inner.append("img")
      .attr("src", function(d) { return d.image; })
      .attr("class", function(d) { return d.featured + " " + d.image})

  other_image.append("span")
      .classed("title", true)
      .text(function(d){ return d.title })

  other_image.append("span")
      .classed("publication", true)
      .text(function(d){ return d.pub })

  });
};

export { loadProjects };
