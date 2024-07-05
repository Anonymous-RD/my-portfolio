import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

var experience = [
  {
    company: "Ok Life care",
    title: "DATABASE ANALYST",
    years: "Apr 2021 - Sept 2022",
    mainTech: [],
    technologies: ["DataBase", ""],
  },
  {
    company: "MSME CTTC",
    title: " Intern",
    years: "2022 - 2023",
    mainTech: [],
    technologies: ["HTML", "CSS", "JavaScript", "bootstrap"],
  },
  {
    company: "MSME CTTC",
    title: "Software Engineer",
    years: "2023 - present",
    mainTech: [""],
    technologies: [
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "C",
      "CPP",
      "Java",
      "JDBC",
      "AWT",
      "JSP",
      "JSON",
      "Spring-Boot",
      "Hibernate",
      "Mysql",
      "SQL",
      "Oracle",
      "Django",
      "SQLite",
    ],
  },
];

var work = experience.map(function (work, i) {
  const technologies = work.technologies;
  const mainTechnologies = work.mainTech;

  var mainTech = mainTechnologies.map((technology, i) => {
    return (
      <Badge pill className="main-badge mr-2 mb-2 bg" key={i}>
        {technology}
      </Badge>
    );
  });
  var tech = technologies.map((technology, i) => {
    return (
      <Badge pill className="experience-badge mr-2 mb-2" key={i}>
        {technology}
      </Badge>
    );
  });
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={work.years}
      iconStyle={{
        background: "#4f90ae",
        color: "#fff",
        textAlign: "center",
      }}
      icon={<i className="fas fa-school experience-icon"></i>}
      key={i}
    >
      <div style={{ textAlign: "left", marginBottom: "4px" }}>{mainTech}</div>

      <h3
        className="vertical-timeline-element-title"
        style={{ textAlign: "left" }}
      >
        {work.title}
      </h3>
      <h4
        className="vertical-timeline-element-subtitle"
        style={{ textAlign: "left" }}
      >
        {work.company}
      </h4>
      <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
    </VerticalTimelineElement>
  );
});

const ExpTimeline = () => {
  return (
    <section id="resume" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span className="text-black" style={{ textAlign: "center" }}>
              EXPERIENCE
            </span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {work}
          <VerticalTimelineElement
            iconStyle={{
              background: "#4f90ae",
              color: "#fff",
              textAlign: "center",
            }}
            icon={
              <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
            }
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExpTimeline;
