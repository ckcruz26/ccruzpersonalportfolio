import React from "react";
import { Button } from 'react-bootstrap';

function ExperienceItem({ image, name }) {
  return (
    <div className="expItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
      <Button className="detailButton">More Details</Button>
    </div>
  );
}

export default ExperienceItem;
