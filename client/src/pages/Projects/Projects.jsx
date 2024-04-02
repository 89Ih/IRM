import "./Projects.css";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import listProjects from "../../svg/ListProjects.svg";
import createProject from "../../svg/createProject.svg";
import { useState } from "react";
import Fullscreen from "./fullScreen";
import { currentStep } from "./Steps";

const Projects = () => {
  const { content } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    currentStep(1);
    setShow(true);
  };



  return (
    <Fragment>
      <div className="_boxes">
        <Link to="/projects">
          <img src={listProjects} alt="All Projects" />
          {/* {content.project} */}
          List of Projects
        </Link>
        <button className="_button" type="button" onClick={handleShow} disabled>
          <img src={createProject} alt="setting" />
          {/* {content.setting} */}
          Create Project
        </button>
      </div>
 
   
      <Fullscreen show={show} onHide={() => setShow(false)} />
    </Fragment>
  );
};

export default Projects;