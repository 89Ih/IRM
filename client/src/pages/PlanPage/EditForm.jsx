import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import React from "react";
import Modal from "react-bootstrap/Modal";
const EditForm = (props) => {
  const { content, currentDate } = useContext(AuthContext);
  const {
    handleClose,
    show,
    onSubmit,
    plan,
    onChangePlan,
    description,
    onChangeDescription,
    owner,
    onChangeOwner,
    priority,
    weekOfYear,
    onChangeWeekOfYear,
    onChangePriority,
    workload,
    onChangeWorkload,
    workloadOptions,
    weekOptions,
    year,
    month,
    dynamics,
    creater,
    onClickClose,
    onRefresh,
  } = props;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{content.editPlan}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmit}>
          <div>
            <div className="mb-3">
              <input
                type="text"
                className={`form-control ${plan === "" ? "v-be" : ""}`}
                placeholder={`${content.plan} :`}
                value={plan}
                onChange={onChangePlan}
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
                onChange={onChangeDescription}
              ></textarea>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder={`${content.owner} :`}
                value={owner}
                onChange={onChangeOwner}
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
                  onChange={onChangePriority}
                >
                 
                  <option value="Low">{content.low}</option>
                  <option defaultValue="Normal">{content.normal}</option>
                  <option value="High">{content.high}</option>
                </select>
              </div>
              <div className="input-group  mb-3">
                <span className="input-group-text _dsyOpt">
                  {" "}
                  {content.weekOfYear}
                </span>
                <select
                  className={`form-control`}
                  value={weekOfYear}
                  onChange={onChangeWeekOfYear}
                >
                  <option  defaultValue="selected">...</option>
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
                  className={`form-control ${
                    workload === "" || workload === "..." ? "v-be" : ""
                  }`}
                  value={workload}
                  onChange={onChangeWorkload}
                >
                  <option key={0} defaultValue="selected" >...</option>
                  {workloadOptions?.map(({opt }) => (
                    <option key={`opt${opt}`} value={opt}>
                      {opt}%
                    </option>
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
              type="button"
              className="btn border mb-1"
              onClick={onClickClose}
            >
              {content.close}
            </button>
            <button
              type="submit"
              className="btn border mb-1 HG"
              onClick={onRefresh}
            >
              <span  onClick={onRefresh}>
                {content.saveChanges}
              </span>
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditForm;
