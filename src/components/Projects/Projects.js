import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Videtorrium from "../../Assets/Projects/Videtorrium.JPG";
import OP from "../../Assets/Projects/OP.JPG";
import Photographer from "../../Assets/Projects/Photographer.JPG";
import Divya from "../../Assets/Projects/Divya.JPG";
import Unlock from "../../Assets/Projects/Unlock.JPG";


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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Divya}
              isBlog={false}
              title="Astrology Website"
              description="This is a fully functional astrology portal created for astrologer A.R. Bamola in which user can check their daily horoscope and check the other services provided by A.R. Bamola. I created this website from scratch using Bootstrap and Javascript."
              link="http://divyadishadarshan.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OP}
              isBlog={false}
              title="OP Gamer - Social Media Paradise for gamers"
              description="This website is like a social media platform for all gamers to share their views on the latest gaming news and the latest game launch. I developed the frontend for this website in Bootstrap, Javascript."
              link="https://akshaygupta28.github.io/OPgamer.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Photographer}
              isBlog={false}
              title="Portfolio Website for photographers"
              description="This was my first web project in basic Bootstrap and Javascript which I had built for a photographer, where he could showcase his photography work and manage his portfolio ."
              link="https://akshaygupta28.github.io/Photographer/"
            />
          </Col>
        </Row>
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
