import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Abudullah" },
  { meta: "last name", metaInfo: "Basil" },
  { meta: "Age", metaInfo: "29 Years" },
  { meta: "Nationality", metaInfo: "Uzbek" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Uzbekistan" },
  { meta: "Email", metaInfo: "abudullahbb38@gmail.com" },
  { meta: "langages", metaInfo: "English, Japanese" },
  { meta: "Experience", metaInfo: "5+ Years" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
