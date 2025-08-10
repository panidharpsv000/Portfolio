import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Venkata Siva Panidhar Pothula </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />
            I am currently pursuing my B.Tech in Computer Science and Engineering at VIIT.
            <br />
            I’m a Full Stack Java Developer proficient in building web applications using Java and Spring Boot. I’ve worked on 
developing backend services, integrating databases, and creating responsive frontends. I’m also familiar with APIs, 
authentication, and deployment tools like Docker and Postman.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime,Web Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Panidhar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
