import { select, selectAll } from 'd3-selection'
import { csv } from 'd3-fetch'

const d3 = { select, selectAll, csv }

const loadProjects = () => {

  d3.csv('projects.csv').then(function(projects) {

  var featured_work = d3.select('#projects')

// parse for featured
  var image = featured_work.selectAll('.block')
      .data(projects.filter(function(d){
        if(d.featured == 'TRUE'){
          return d
        }
      }))
      .enter().append('div')
      .classed('block',true)

// set url
  var link = image.append('a')
    .classed('link',true)
    .attr('target', '_blank')
    .attr('href', function(d){ return d.url })

// container for inner content
  var inner = link.append('div')
    .attr('class', 'block-container')

// images
  inner.append('img')
    .attr('src', function(d) { return 'images/' + d.image })
    .attr('class', function(d) { return d.featured + ' ' + d.image })

// title
    image.append('span')
    .classed('title', true)
    .text(function(d){ return d.title })

// publication
  image.append('span')
    .classed('publication', true)
    .text(function(d){ return d.pub })

  })
}

export { loadProjects }
