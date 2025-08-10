import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import BrainBuzz from "../../Assets/Projects/BrainBuzz.png";
import UserManagement from "../../Assets/Projects/UserManagementSystem.png";
import payHive from "../../Assets/Projects/PayHive.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with Spring Boot,Web Sockets, MySQL, and React. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/panidharpsv000/ChatApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BrainBuzz}
              isBlog={false}
              title="BrainBuzz"
              description="The Quiz App is a web-based platform where users can take quizzes and compete on a real-time leaderboard. Built with Spring Boot, React, and MySQL, it offers secure authentication,and instant scoring. Designed for a smooth and responsive experience."
              ghLink="https://github.com/panidharpsv000/QuizApplication"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UserManagement}
              isBlog={false}
              title="UserManagementSystem"
              description="The User Management App is a web-based platform for efficiently handling user accounts. Built with Spring Boot, React, and MySQL, it provides secure authentication, and profile management.It streamlines user administration for both developers and end-users."
              ghLink="https://github.com/panidharpsv000/UserManagement"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={payHive}
              isBlog={false}
              title="payHive"
              description="The Payment Integration App enables secure and seamless online transactions for web applications. Built with Spring Boot, React, and MySQL, it supports multiple payment methods, transaction tracking, and real-time payment status updates. Designed for scalability and ease of use."
              ghLink="https://github.com/panidharpsv000/PaymentIntegration"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
