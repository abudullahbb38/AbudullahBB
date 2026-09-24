import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "react-modal";
import ModalOneContent from "./modal/ModalOneContent";
import ModalTwoContent from "./modal/ModalTwoContent";
import ModalThreeContent from "./modal/ModalThreeContent";
import ModalFourContent from "./modal/ModalFourContent";
import ModalFiveContent from "./modal/ModalFiveContent";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }

  return (
    <Tabs>
      <TabList className="portfolio-tab-list">
        <Tab>ALL</Tab>
        <Tab>LOGO</Tab>
        <Tab>VIDEO</Tab>
        <Tab>GRAPHIC DESIGN</Tab>
        <Tab>MOCKUP</Tab>
      </TabList>

      <div className="portfolio-tab-content">
        <TabPanel>
          <ul className="row grid justify-content-center">
            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="0">
              <figure onClick={toggleModalOne}>
                <img src="img/projects/project-1.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">PAY ME</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <ModalOneContent />
                  </div>
                </div>
              </Modal>
            </li>

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
              <figure onClick={toggleModalTwo}>
                <img src="img/projects/project-2.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">CLUTCH</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <ModalTwoContent />
                  </div>
                </div>
              </Modal>
            </li>

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <figure onClick={toggleModalThree}>
                <img src="img/projects/project-3.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Million TV</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <ModalThreeContent />
                  </div>
                </div>
              </Modal>
            </li>

            <li className="direction-reveal" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="0">
              <figure className="direction-reveal__card" onClick={toggleModalFour}>
                <img src="img/projects/project-4.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">QWATT</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <ModalFourContent />
                  </div>
                </div>
              </Modal>
            </li>

            <li className="direction-reveal" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
              <figure className="direction-reveal__card" onClick={toggleModalFive}>
                <img src="img/projects/project-5.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Uzum Nasiya</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFive}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <ModalFiveContent />
                  </div>
                </div>
              </Modal>
            </li>
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">
            <li className="direction-reveal" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="0">
              <figure className="direction-reveal__card" onClick={toggleModalFour}>
                <img src="img/projects/project-4.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">QWATT</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <ModalFourContent />
                  </div>
                </div>
              </Modal>
            </li>

            <li className="direction-reveal" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
              <figure className="direction-reveal__card" onClick={toggleModalFive}>
                <img src="img/projects/project-5.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Saas App Project</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFive}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <ModalFiveContent />
                  </div>
                </div>
              </Modal>
            </li>
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">
            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
              <figure onClick={toggleModalTwo}>
                <img src="img/projects/project-2.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Youtube Project</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <ModalTwoContent />
                  </div>
                </div>
              </Modal>
            </li>

            <li className="direction-reveal" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="0">
              <figure className="direction-reveal__card" onClick={toggleModalFour}>
                <img src="img/projects/project-4.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Local Video Project</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <ModalFourContent />
                  </div>
                </div>
              </Modal>
            </li>
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">
            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="0">
              <figure onClick={toggleModalThree}>
                <img src="img/projects/project-3.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Graphic Design Project</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <ModalThreeContent />
                  </div>
                </div>
              </Modal>
            </li>

            <li className="direction-reveal" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
              <figure className="direction-reveal__card" onClick={toggleModalFive}>
                <img src="img/projects/project-5.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Brand Project</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFive}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <ModalFiveContent />
                  </div>
                </div>
              </Modal>
            </li>
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">
            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="0">
              <figure onClick={toggleModalOne}>
                <img src="img/projects/project-1.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Mockup Project</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <ModalOneContent />
                  </div>
                </div>
              </Modal>
            </li>

            <li className="direction-reveal" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
              <figure className="direction-reveal__card" onClick={toggleModalFour}>
                <img src="img/projects/project-4.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">QWATT Mockup</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>

                  <div className="box_inner portfolio">
                    <ModalFourContent />
                  </div>
                </div>
              </Modal>
            </li>
          </ul>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Portfolio;
