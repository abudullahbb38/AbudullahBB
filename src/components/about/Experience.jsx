import React from "react";

const experienceContent = [
  {
    year: "2025 - Present",
    position: "Full Stack Developer",
    compnayName: "",
    details: `Currently working as a full stack developer, building and maintaining modern web applications.`,
  },
  {
    year: "2023 - 2025",
    position: "Backend Developer",
    compnayName: "",
    details: `Worked on server-side logic, APIs, and application architecture for scalable systems.`,
  },
  {
    year: "2021 - 2023",
    position: "Frontend Developer",
    compnayName: "",
    details: `Developed responsive and user-focused interfaces using modern frontend technologies.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
