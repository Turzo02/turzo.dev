import React from "react";
import { projects } from "../data/projects";
import { useParams } from "react-router";

const PDE = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  console.log(project);
  
  return (
    <div>
      <h1>{project.title}</h1>
    </div>
  );
};

export default PDE;
