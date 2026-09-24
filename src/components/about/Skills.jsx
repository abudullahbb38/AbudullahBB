import React from "react";

const skillsContent = [
  { skillClass: "p25", skillPercent: "25", skillName: "HTML" },
  { skillClass: "p70", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p45", skillPercent: "45", skillName: "REACT" },
  { skillClass: "p65", skillPercent: "65", skillName: "NEXTJS" },
  { skillClass: "p66", skillPercent: "66", skillName: "PYTHON" },
  { skillClass: "p95", skillPercent: "95", skillName: "DJANGO" },
  { skillClass: "p50", skillPercent: "50", skillName: "AI&Automation" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
