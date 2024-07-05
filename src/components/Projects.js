import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const projects_all = [
  {
    title: "Gym ",
    startDate: "2021",
    description:
      "Gym is dedicated to transforming lives through comprehensive fitness programs, providing top-tier gym training and body sculpting services.",
    images: [
      "images/gym/gymo.gif",
      "images/gym/1.jpg",
      "images/gym/2.jpg",
      "imagesgym/gym3.mp4",
    ],
    url: "",
    technologies: [
      {
        class: "devicon-react-original",
        name: "React",
      },
      {
        class: "devicon-javascript-plain",
        name: "JavaScript",
      },
      {
        class: "devicon-reactrouter-plain",
        name: "React Router",
      },
      {
        class: "devicon-sass-plain",
        name: "scss",
      },
      {
        class: "devicon-openapi-plain",
        name: "Api",
      },
    ],
  },
  {
    title: "Marvel   ",
    startDate: "2021",
    description:
      " Created a Marvel comic library which can be searched by Characters and navigate Marvel's database and extract information of every Marvel character, I hope which will very helpful for a Marvel-Fan .React , SCSS, Vite js , API to fetch data from Marvel Database , which is responsive layout and adapts to different screen sizes and devices. ",
    images: ["images/marvel/m.gif"],
    url: "https://comic-marvl.netlify.app/",
    technologies: [
      {
        class: "devicon-react-plain",
        name: "React",
      },
      {
        class: "devicon-openapi-plain",
        name: "API",
      },
      {
        class: "devicon-gatsby-plain-wordmark",
        name: "Gatsby",
      },
      {
        class: "devicon-tailwindcss-plain",
        name: "Tailwind",
      },
    ],
  },
];

const Projects = () => {
  const [deps, setDeps] = useState({});
  const [detailsModalShow, setDetailsModalShow] = useState(false);

  let ModalShow = (data) => {
    setDeps(data);
    setDetailsModalShow(true);
  };

  let ModalClose = () => {
    setDetailsModalShow(false);
  };

  var project_list = projects_all.map(function (p) {
    return (
      <div
        className="col-sm-12 col-md col-lg-4 "
        key={p.title}
        style={{ cursor: "pointer" }}
      >
        <span className="portfolio-item d-block">
          <div className="foto" onClick={() => ModalShow(p)}>
            <div>
              <img
                src={p.images[0]}
                alt="images"
                height="auto"
                width="100%"
                style={{
                  marginBottom: 0,
                  paddingBottom: 0,
                  position: "relative",
                }}
              />
              <span className="project-date">{p.startDate}</span>
              <br />
              <p className="project-title-settings mt-3">{p.title}</p>
            </div>
          </div>
        </span>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <div className="col-md-12 container h-10">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>Projects</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto h-25">{project_list}</div>
        </div>
        <ProjectDetails
          show={detailsModalShow}
          onHide={ModalClose}
          data={deps}
        />
        <h2>More to come....🚀🚀</h2>
      </div>
    </section>
  );
};

export default Projects;
