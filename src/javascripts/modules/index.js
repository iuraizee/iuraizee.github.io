import { select, selectAll } from 'd3-selection';
import { csv } from 'd3-fetch';

const d3 = { select, selectAll, csv };

const loadProjects = () => {
  d3.csv('projects.csv').then((projects) => {
    const featured_work = d3.select('#projects');

    // parse for featured
    const image = featured_work.selectAll('.block')
      .data(projects.filter((d) => {
        if (d.featured === 'TRUE') {
          return d;
        }
      }))
      .enter().append('div')
      .classed('block', true);

    // set url
    const link = image.append('a')
      .classed('link', true)
      .attr('target', '_blank')
      .attr('href', d => d.url);

    // container for inner content
    const inner = link.append('div')
      .attr('class', 'block-container');

    // images
    inner.append('img')
      .classed('lazyload', true)
      .attr('src', d => `images/placeholder.jpg`)
      .attr('data-src', d => `images/${d.image}`);

    // title
    image.append('span')
      .classed('title', true)
      .text(d => d.title);

    // publication
    image.append('span')
      .classed('publication', true)
      .text(d => d.pub);
  });
}

export { loadProjects as default }
