import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Videtorrium from "../../Assets/Projects/Videtorrium.JPG";
import Unlock from "../../Assets/Projects/Unlock.JPG";
import GrowYourPaisa from "../../Assets/Projects/growyourpaisa.png"
import Loopin from "../../Assets/Projects/loopin.jpg";
import Touchstone from "../../Assets/Projects/touchstone.png";
import Research from "../../Assets/Projects/kmeans.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Touchstone}
              isBlog={false}
              title="Touchstone - Teleco Cloud Testing Suite"
              description="Touchstone, stands as a remarkable offering, serving as an invaluable tool for NFVI benchmarking, certification, and validation. I migrated complete project from very older version of Angular to React."
              link="https://voereir.com/touchstone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GrowYourPaisa}
              isBlog={false}
              title="Grow Your Paisa"
              description="I created Grow Your Paisa, a user-friendly platform for managing finances and exploring investment opportunities. Users can set financial goals and make informed decisions about their money. With Grow Your Paisa, taking control of your financial future is simple and accessible."
              link="https://www.growyourpaisa.in/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Loopin}
              isBlog={false}
              title="Loopin"
              description="Loopin is a calendar-based productivity platform that transforms your calendar into a centralized workspace for managing your day."
              link="https://www.linkedin.com/company/loopinhq/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Videtorrium}
              isBlog={false}
              title="Videtorrium"
              description="Videtorrium is known to host series of live talk shows and seminars for College students . I was responsible for building GUI in React.js and making it mobile-optimized using media queries."
              link="https://www.videtorrium.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Unlock}
              isBlog={false}
              title="Unlock.fit"
              description="Unlock.fit uses the most advanced DNA Testing to personalize nutrition and training for their clients. We have onboarded companies like JCB, Siemens, RCB, KKR, etc till now. I was responsible for building GUI in React.js along with other team members. "
              link="https://www.unlock.fit/"
            />
          </Col>

        </Row>
        <h1 className="project-heading">
          My <strong className="purple">Research Paper </strong>
        </h1>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={Research}
              link="https://journal.ijresm.com/index.php/ijresm/article/view/707"
              title="K-Means Clustering Algorithm"
              site=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
