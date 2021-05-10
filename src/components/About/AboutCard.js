import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akshay Gupta </span>
            from <span className="purple"> Delhi, India.</span>
            <br />I am pursuing B.Tech in Computer Science and Engineering from
            Krishna Engineering College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Playing and Watching
              Cricket
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Listening Music
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Excursion
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
