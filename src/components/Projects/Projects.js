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
              title="Chat Fusion"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with ReactJS, NodeJS, MongoDB, ExpressJS and Socket.io."
              ghLink="https://github.com/Coderninja23/ChatFusion"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="KidneyGuardian-Disease Predictor"
              description="Implemented a web application which is able to predict whether a person is suffering from a chronic kidney disease with 98% accuracy."
              ghLink="https://github.com/Coderninja23/Kidney-Disease-Predictor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Horizon-6"
              description=" Implemented a game using graphics.h library of C programming language. Utilized the concept of coordinate
              system in terms of pixels, and data storage to provide best user experience."
              ghLink="https://github.com/Coderninja23/PDS-Project--Obstacle-dodging-game-Forza-Horizon---6-"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
