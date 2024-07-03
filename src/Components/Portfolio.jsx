/* eslint-disable prettier/prettier */
/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop"; 

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Product Listing page 🎉",
    description:
      "I have Buit this project For The Assignment Project Given where i have to use mock Api like Fake Store API which use to get Data from Api and using it I have created a Product list their price content details images and their ratings",
    url: "https://sarbajitacharjee.github.io/Product-listing-Next.js-/",
  },
  {
    title: "Simple-bootstrap-website 🗺️",
    description:
      "Contributed Bootsrap note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://sarbajitacharjee.github.io/Simple-bootstrap-website-practice/",
  },
  {
    title: "My Previous Portfolio 🧑‍🏭",
    description:
      "Created My first Trial Portfolio For Development ... Currently I am Working on my react Personal Portfolio",
    url: "https://sarbajitacharjee.github.io/Portfolio/",
  },
  {
    title: "My Blogsite 📖",
    description:
      "Here I Convert my Experience into blogs for the beginner Developers ",
    url: "https://buzzbyte.hashnode.dev/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
