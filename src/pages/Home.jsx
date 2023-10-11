import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { LinkedIn, Email, GitHub } from "@mui/icons-material";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hello! My name is Christian</h2>
        <div className="prompt">
          <p>A software engineer residing in the Philippines, for any help and concerns please see my details.</p>
          <LinkedIn />
          <Email />
          <GitHub />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <Card className="list">
          <ListGroup variant="flush">
            <ListGroup.Item className="item">
              <h2>Web Development</h2>
              <span>HTML, CSS, Javascript, PHP, ReactJS, MongooseJS, ExpressJS, NodeJS and Bootstrap</span>
            </ListGroup.Item>
            <ListGroup.Item className="item">
              <h2>Programming and Scripting Languages</h2>
              <span>C/C++, Java, C#, .NET, Bash, Powershell and VBA</span>
            </ListGroup.Item>
            <ListGroup.Item className="item">
              <h2>Database</h2>
              <span>MongoDB, MS Access and MySQL</span>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
}

export default Home;
