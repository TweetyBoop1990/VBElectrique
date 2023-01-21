import React, { Component } from "react";
import Masonry from 'react-masonry-css';

let id = 0;
const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = projects.image;

      return (
        <div key={id++}>
            <img alt={projects.title} src={projectImage} />
        </div>
      );
    }).sort(() => Math.random() - 0.5);

    return (
      <section id="portfolio" className="light">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {projects}
        </Masonry>
      </section>
    );
  }
}

export default Portfolio;
