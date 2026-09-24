import React from "react";

const educationContent = [
  {
    year: "2019-2021",
    degree: "MSc in software Engineering",
    institute: "TASHKENT UNIVERSITY OF INFORMATION TECHNOLOGIES",
    details: "",
  },
  {
    year: "2015-2019",
    degree: "BSc in software Engineering",
    institute: "TASHKENT UNIVERSITY OF INFORMATION TECHNOLOGIES",
    details: "",
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          {val.details && <p className="open-sans-font">{val.details}</p>}
        </li>
      ))}
    </ul>
  );
};

export default Education;
