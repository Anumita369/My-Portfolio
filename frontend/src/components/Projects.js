import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Screenshot 2025-07-25 230056.png";
import projImg2 from "../assets/img/Premuim_Screenshot 2025-07-25 230616.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Portfolio Making",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Premium Online Store Project",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "MERN Stack Project",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Built APIs ",
      description: "API Development",
      imgUrl: projImg3,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>With a creative drive for impactful web experiences, I have developed a range of projects including elegant portfolios, polished premium store sites, and robust MERN stack applications. My portfolio sites showcase personal branding with refined design, while the premium store projects highlight seamless e-commerce functionality and a user-friendly shopping journey. Leveraging the full power of the MERN stack, I craft dynamic, scalable apps that unite modern front-end interfaces with secure, efficient backends—demonstrating my ability to deliver high-quality solutions across the spectrum of web development.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
