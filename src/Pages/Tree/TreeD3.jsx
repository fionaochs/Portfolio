import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useResizeObserver } from './d3Hooks';
import './Tree.css';
import data from './flare.json';

export const TreeD3 = () => {
  const ref = useRef();  
  
  useEffect(() => {
    renderFunction();
  }, []);
  const dimensions = useResizeObserver(ref);
  
  const renderFunction = () => {
    const { width, height } = dimensions || ref.current.getBoundingClientRect();
    console.log(data);

  const svg = d3.select(ref.current),
      // width = +svg.attr("width"),
      // height = +svg.attr("height"),
      g = svg.append("g").attr("transform", "translate(" + (width / 2 - 15) + "," + (height / 2 + 25) + ")");

      

  const stratify = d3.stratify()
      .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

  const tree = d3.cluster()
      .size([360, 390])
      .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });


    const root = tree(stratify(data)
        .sort(function(a, b) { return (a.height - b.height) || a.id.localeCompare(b.id); }));

    const link = g.selectAll(".link")
      .data(root.descendants().slice(1))
      .enter().append("path")
        .attr("class", "link")
        .attr("d", function(d) {
          return "M" + project(d.x, d.y)
              + "C" + project(d.x, (d.y + d.parent.y) / 2)
              + " " + project(d.parent.x, (d.y + d.parent.y) / 2)
              + " " + project(d.parent.x, d.parent.y);
        });

    const node = g.selectAll(".node")
      .data(root.descendants())
      .enter().append("g")
        .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
        .attr("transform", function(d) { return "translate(" + project(d.x, d.y) + ")"; });

    node.append("circle")
        .attr("r", 2.5);

    node.append("text")
        .attr("dy", ".31em")
        .attr("x", function(d) { return d.x < 180 === !d.children ? 6 : -6; })
        .style("text-anchor", function(d) { return d.x < 180 === !d.children ? "start" : "end"; })
        .attr("transform", function(d) { return "rotate(" + (d.x < 180 ? d.x - 90 : d.x + 90) + ")"; })
        .text(function(d) { return d.id.substring(d.id.lastIndexOf(".") + 1); });

  function project(x, y) {
    const angle = (x - 90) / 180 * Math.PI, radius = y;
    return [radius * Math.cos(angle), radius * Math.sin(angle)];
  }

  function mouseovered(active) {
      return function(d) {
        d3.select(this).classed("label--active", active);
        d3.select(d.linkExtensionNode).classed("link-extension--active", active).raise();
        do d3.select(d.linkNode).classed("link--active", active).raise();
        while (d = d.parent);
      };
    }
};
return (
  <svg id="svg" ref={ref} className="graph" width="100%" height="auto" />
)
}