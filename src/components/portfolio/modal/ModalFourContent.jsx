import React from "react";

const ModalFourContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>QWATT</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Project </span>:{" "}
              <span className="ft-wt-600 uppercase">Website</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">QWATT</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Software </span>:{" "}
              <span className="ft-wt-600 uppercase">React, Node.js, REST API</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://qwatt.uz"
                  target="_blank"
                  rel="noreferrer"
                >
                 QWATT
                </a>
              </span>
            </div>
            {/* End .col */}
            <div className="col-12 mb-2">
              <span className="project-label">Problems solved </span>:{" "}
              <span className="ft-wt-300">Helped organize company profiles, service categories, client reviews, and project information to improve transparency and simplify the vendor-selection process. Supported the creation of a user-friendly interface with search, filtering, and company-detail features, enabling users to find suitable technology partners more efficiently. </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
         <img src="img/projects/project-4.jpg" alt="Portolio" />{/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalFourContent;
