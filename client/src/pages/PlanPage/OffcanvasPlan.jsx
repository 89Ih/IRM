import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth.context";
import restService from "../../services/rest.service";
import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";



function OffcanvasPlan ({ dynamics, onCanvas, handleClose, show }){
  const [workloadOptions, setWorkloadOptions] = useState([]);
  const [weekOptions] = useState(Array.from({ length: 52 }, (_, i) => i + 1));
  const { user, currentDate, content } = useContext(AuthContext);
  const [plan, setPlan] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState("");
  const [workload, setWorkload] = useState("");
  const [priority, setPriority] = useState("");
  const [year] = useState(currentDate.year);
  const [month] = useState(currentDate.month);
  const [creater] = useState(user?.name);
  const [weekOfYear, setWeekOfYear] = useState(0);

  const handleReset = () => {
    handleClose();
    setPlan("");
    setDescription("");
    setOwner("");
    setPriority("");
    setWorkload("");
    setWeekOfYear("");
  };
  async function getOpt() {
    let opts = [];
    let arr = Array.from({ length: 10 }, (_, i) => ({ opt: (i + 1) * 10 }));
    setWorkloadOptions(arr);
    if (!dynamics && dynamics === "") {
      return setWorkloadOptions(arr);
    }
    const obj = {
      user: dynamics,
      weekOfYear: weekOfYear,
    };
    const encodedObj = encodeURIComponent(JSON.stringify(obj));
    const res = await restService.getTotalAmountWorkload(encodedObj);
    const { data } = res;

    if (data.length === 0) {
      return setWorkloadOptions(arr);
    } else {
      const { totalAmountSold } = await res.data[0];
      const filteredArr = await Promise.all(
        arr.map(async (v) => {
          if (v.opt + totalAmountSold <= 100) {
            return { opt: v.opt };
          }
        })
      );
      opts = filteredArr.filter((option) => option !== undefined);
      return setWorkloadOptions(opts);
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestBody = {
      plan,
      description,
      owner,
      priority,
      year,
      month,
      user: dynamics,
      createdBy: creater,
      workload,
      weekOfYear,
    };

    restService
      .createPlan(requestBody)
      .then(() => {
        handleReset();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleWeekOfYear = (event) => {
    setWeekOfYear(event.target.value);
    getOpt();
  };

  useEffect(() => {

    getOpt()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dynamics, weekOfYear, priority, plan]);

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{content.createNewPlan}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column justify-content-between h-100"
        >
          <div>
            <div className="mb-3">
              <input
                type="text"
                className={`form-control ${plan === "" ? "v-be" : ""}`}
                placeholder={`${content.plan} :`}
                value={plan}
                onChange={(event) => setPlan(event.target.value)}
                maxLength="18"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder={`${content.description} :`}
                rows="3"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder={`${content.owner} :`}
                value={owner}
                onChange={(event) => setOwner(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <div className="input-group mb-3">
                <span className="input-group-text _dsyOpt">
                  {content.priorit}
                </span>

                <select
                  className={`form-control ${
                    priority === "" || priority === "..." ? "v-be" : ""
                  }`}
                  value={priority}
                  onChange={(event) => setPriority(event.target.value)}
                >
                  <option defaultValue="selected">...</option>
                  <option value="Low">{content.low}</option>
                  <option value="Normal">{content.normal}</option>
                  <option value="High">{content.high}</option>
                </select>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text _dsyOpt">
                  {" "}
                  {content.weekOfYear}
                </span>
                <select
                  className={`form-control`}
                  value={weekOfYear}
                  onChange={(event) => handleWeekOfYear(event)}
                >
                  <option defaultValue="selected">...</option>
                  {weekOptions
                    .filter(
                      (f) => f <= currentDate.woy + 3 && f >= currentDate.woy
                    )
                    ?.map((o) => (
                      <option key={`woy${o}`} value={o}>
                        {o}
                      </option>
                    ))}
                </select>
              </div>
              <div className="input-group mb-3">
           
                <span className="input-group-text _dsyOpt">
                  {content.workload} :
                </span>
                <select
                  className={`form-control  ${
                    workload === "" || workload === "..." ? "v-be" : ""
                  }`}
                  value={workload}
                  onChange={(event) => setWorkload(event.target.value)}
                >
                  <option defaultValue="selected">...</option>
                  {workloadOptions?.map(({ opt }) => (
                    <option key={`opt${opt}`} value={opt}>{opt}%</option>
                  ))}
                </select>
               
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text _dsyOpt">
                  {content.year} :
                </span>
                <input
                  type="text"
                  className="form-control text-center"
                  value={year}
                  disabled
                />
                <span className="input-group-text _dsyOpt">
                  {content.month} :
                </span>
                <input
                  type="text"
                  className="form-control text-center"
                  value={month}
                  disabled
                />
              </div>
              <div className="input-group mb-3 ">
                <span className="input-group-text _dsyOpt">
                  {content.assigned} :
                </span>
                <input
                  type="text"
                  className="form-control text-center"
                  value={dynamics}
                  disabled
                />
                <span className="input-group-text _dsyOpt">
                  {content.created} :
                </span>
                <input
                  type="text"
                  className="form-control text-center"
                  value={creater}
                  disabled
                />
              </div>
            </div>
          </div>
          <div
            className="p-2 d-flex flex-row justify-content-end align-items-end"
            style={{ gap: "7px" }}
          >
            <button
              onClick={handleReset}
              type="button"
              className="btn border mb-1"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              {content.close}
            </button>
            <button
              type="submit"
              onClick={onCanvas}
              className="btn border mb-1 HG"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <span onClick={onCanvas}>{content.submit}</span>
            </button>
          </div>
        </form>
      </Offcanvas.Body>
    </Offcanvas>
  );
};


export default OffcanvasPlan;
