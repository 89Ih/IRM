import Modal from "react-bootstrap/Modal";
import Steps from "./Steps";
import PreparationPhase from "./Phases/FirstPhase/PreparationPhase";
import ECOSystem from "./Phases/SecondPhase/EcosystemPhase";

const Fullscreen = ({ show, onHide }) => {
  return (
    <Modal show={show} fullscreen={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Steps title={"Preparation"} actuell={2}>
            <PreparationPhase/>
        </Steps>
        <Steps title={"Ecosystem"} actuell={3} >
          <ECOSystem/>
        </Steps>
        <Steps title={"Development"} actuell={4} />
        <Steps title={"Testing"} actuell={5} />
        <Steps title={"Deployment"} actuell={6} />
        <Steps title={"Post-Deployment"} actuell={7} />
        <Steps title={"Maintenance "} actuell={8} />
      </Modal.Body>
    </Modal>
  );
};

export default Fullscreen;
