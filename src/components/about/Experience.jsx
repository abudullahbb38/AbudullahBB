import React from "react";

const experienceContent = [
  {
    year: "2023-present",
    position: "Udevs",
    compnayName: "",
    details: `• Shipped multiple full-stack features end-to-end, integrating REST APIs and partnering with backend and design teams across several sprints to ship functional UI features on schedule and reduce UI-related bugs.
• Wrote maintainable, component-based, reusable code adopted across multiple projects, cutting future development time on similar features and quickly ramping up on new tools in a fast-paced Agile environment.`,
  },
  {
    year: "2021-2023",
    position: "Colibrisoft",
    compnayName: "",
    details: `Built and deployed 10+ client-facing web applications, developing 50+ reusable React components using Tailwind CSS for responsive, cross-browser-compatible interfaces.`,
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
