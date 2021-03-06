import React from 'react';
import { select, selectAll } from 'd3-selection';
import { csv } from 'd3-fetch';
import * as moment from 'moment';
import '../App.scss';

const d3 = { select, selectAll, csv };

// Add window.fetch support to Node
if (typeof fetch !== 'function') {
  global.fetch = require('node-fetch');
}

const dev = process.env.NODE_ENV !== 'production';
export const server = dev ? 'http://localhost:3000' : 'https://irfanuraizee.com';


const Work = () => {

  csv('projects.csv').then((projects) => {
    const featuredWork = d3.select('#projects');

    // parse for featured
    const image = featuredWork.selectAll('.block')
      // eslint-disable-next-line array-callback-return
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
    inner.append('div')
      .classed('img-wrapper', true)
      .style('background-image', d => `url('./img/${d.image}')`);

    // title
    link.append('span')
      .classed('title', true)
      .text(d => d.title);

    // publication
    link.append('span')
      .classed('publication', true)
      .text(d => `${d.pub} | ${moment(d.date).format('MMMM D, YYYY')}`);
  })
  .catch(function(err){
    console.error(err);
  });

  return (
    <div className="container">
      <div id="projects"></div>
    </div>
  );
}

export default Work;
