import AddDark from "../../svg/Add.svg";
import AddLight from "../../svg/AddLight.svg";
import ChartLight from "../../svg/ChartLight.svg";
import ChartDark from "../../svg/Chart.svg";
import { useContext, useState } from "react";
import OffcanvasPlan from "./OffcanvasPlan";
import { AuthContext } from "../../context/auth.context";

const UserCard = ({
  username,
  nodeID,
  dynamics,
  chart,
  onClickChart,
  onCanvas,
}) => {
  const { mode } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div
        className={`_u_card _frb h-100 ${mode === "light" && "_body_light"}`}
      >
        <div className="mt-1">{chart}</div>
        <div className="_fcb  h-100">
          <p className="fz2">{username}</p>
          <div className="_fre">
            <img
              alt="Change chart"
              src={mode === "light" ? ChartLight : ChartDark}
              onClick={onClickChart}
              className="_HO"
            />
            <img
              id={nodeID}
              onClick={handleShow}
              alt="Add"
              src={mode === "light" ? AddLight : AddDark}
              className="_HO"
            />
          </div>
        </div>
      </div>
      <OffcanvasPlan
        dynamics={dynamics}
        onCanvas={onCanvas}
        handleClose={handleClose}
        show={show}
      />
    </>
  );
};

export default UserCard;
