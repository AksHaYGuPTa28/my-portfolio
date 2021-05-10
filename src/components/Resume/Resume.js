import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/Akshaygupta_Webdeveloper.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Web Developer @ Videtorrium "
              date="July 2020 - Present"
              content={[
                "Build product GUI in React.js and conduct user surveys for understanding user experience(UX).",
                "Identify optimized solutions to build the product with lean coding to keep the app lightweight.",
                "Worked on the various project including Unlock.fit (https://www.unlock.fit/), Videtorrium's landing page (https://www.videtorrium.com/).",
                "Currently working on Aspire Sports project of UK sports firm.",
                "Exposure to deployment in Heroku, Cpanel, Vercel and Netlify and web build tools, such as NPM, Yarn, etc.",
              ]}
            />
            <Resumecontent
              title="Web Developer @ Anthem IT Solutions "
              date="May 2020 - July 2020"
              content={[
                "Created their fully functional astrology portal (http://divyadishadarshan.com) in HTML5, CSS3, Bootstrap and mobile-optimized using media queries. ",
                "Built an exhaustive appointment booking module using advanced Js and Bootstrap.",
              ]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Won gold medal at university technical zonal fest.",
                "Organized many extra co-curricular programs and fest for my college.",
                "Won many Inter College and National level hackathons- Kec Hack 2019 (1st rank), Sharda Hackathon(2nd rank).",
                "Campus Ambassador of IEEE KEC Student Chapter, Tech-gig, Ken42 EdTech Pvt. Ltd.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Krishna Engineering College, Ghaziabad [ AKTU , Lucknow ] "
              date="2017 - Present"
              content={[]}
            />
            <Resumecontent
              title="12TH BOARD [ Little Flower Public School , Delhi ]"
              date="2015 - 2017"
              content={[]}
            />
            <Resumecontent
              title="10TH BOARD [ Little Flower Public School , Delhi ] "
              date="2005 - 2015"
              content={[]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Tech Head of IEEE Kec Student Chapter"
              content={[
                "Having experience in conducting multiple events in my college which were related to coding, technical aptitude that encompassed managing and directing the events.",
                "Successfully managed the gathering of more than 250 students in various events with a team comprising of 10 members.",
              ]}
            />
            <Resumecontent
              title="Indian Road Safety Campaign"
              content={[
                "This event was organized by Ministry of Road Transport and Highways.",
                "Contributed in developing the frontend end of the website using Bootstrap and Javascript.",
              ]}
            />
            <Resumecontent
              title="KEC - Model United Nations"
              content={[
                "Professionally managed more than 100 participants from various colleges who belong to different states of India.",
                "Managed the treasury, promotions, facilities for the event.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
