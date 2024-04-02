import Timeline from "./Timeline";
import projectPlanning from "../../../../svg/projectPlanning.svg";
import { useState, useRef, useEffect } from "react";
import restService from "../../../../services/rest.service";
import dataJSON from "./localdata.json";
import TableDropdown from "./Table";
import team from "../../../../svg/team.svg";
import techSVG from "../../../../svg/tech.svg";
import envSVG from "../../../../svg/Env.svg";
import methSVG from "../../../../svg/Methology.svg";
import Design from "../../../../svg/Design.svg"
/////////////-\\\\\\\\\\\\\\\\\

function PreparationPhase() {
  const inputRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [tech, setTech] = useState([]);
  const [selectUsers, setSelectUsers] = useState([]);
  const [VCS] = useState(dataJSON[0]);
  const [DM, setDM] = useState("");
  const [opened, setOpened] = useState(false);
  const [preview, setPreview] = useState([]);

  const handleRemove = (event, arr, fn) => {
    const filterd = arr.filter((f) => {
      return f !== event.target.id;
    });
    fn(filterd);
  };
  const handleSelcetedUsers = (e) => {
    let v = e.target.value;
    !selectUsers.includes(v) && setSelectUsers([...selectUsers, v]);
  };
  const handleSelectedItems = (e) => {
    let targetChildOne = e.target.parentNode;
    let txt = targetChildOne.firstChild.innerText;
    setDM(txt);
    setOpened(false);
  };
  const handleImage = (e) => {
    let srcImg = URL.createObjectURL(e.target.files[0]);

    console.log(srcImg);

    setPreview([...preview, { src: srcImg }]);
  };
  const handleSetTech = () => {
    let val = inputRef.current.value;
    if (!tech.includes(val)) {
      setTech((prev) => [...prev, val]);
    }
  };
  useEffect(() => {
    const retrevieUsers = async () => {
      const res = await restService.getAllPlan();
      setUsers(res.data);
    };
    retrevieUsers();
  }, [selectUsers]);
  return (
    <Timeline>
      <Timeline.Childline title={"Project Planning"} src={projectPlanning}>
        <div className="mb-3">
          <label htmlFor="bn" className="fz2 mb-1">
            {" "}
            Define the requirements, scope, and objectives of the project.
          </label>
          <textarea
            id="bn"
            className="form-control"
            rows={5}
            placeholder="business needs :"
          ></textarea>
        </div>
      </Timeline.Childline>
      <Timeline.Childline title={"Technology Stack Selection"} src={techSVG}>
        <div className="mb-3">
          <label htmlFor="dd" className="fz2 mb-1">
            Choose the appropriate technologies for front-end, back-end, and
            database.
          </label>
          <div >
            <div className="_frs _g5">
              {tech.map((a) => (
                <button
                  className="btn border mb-2  btn-x"
                  key={a}
                  id={a}
                  onClick={(event) => handleRemove(event, tech, setTech)}
                >
                  {a}
                </button>
              ))}
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="tech"
                ref={inputRef}
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />

              <button
                type="button"
                className="input-group-text"
                onClick={handleSetTech}
              >
                add
              </button>
            </div>
          </div>
        </div>
      </Timeline.Childline>
      <Timeline.Childline title={"Team"} src={team}>
        <div className="mb-3">
          <label htmlFor="dd" className="fz2 mb-1">
            Assemble a team including developers, designers, and any other
            necessary roles.
          </label>
          <h5>
            {selectUsers.map((a) => (
              <button
                className="btn border m-1  btn-x"
                key={a}
                id={a}
                onClick={(event) =>
                  handleRemove(event, selectUsers, setSelectUsers)
                }
              >
                {a}
              </button>
            ))}
          </h5>
          <select
            multiple
            className="form-control _mlp_select"
            value={selectUsers}
            onChange={handleSelcetedUsers}
          >
            <option defaultValue="selected" disabled>
              ...
            </option>
            {users.map((u) => (
              <option className="fz3" key={u._id} value={u.name}>
                {u.name}
              </option>
            ))}
          </select>
        </div>
      </Timeline.Childline>
      <Timeline.Childline  title={"Environment Setup"} src={envSVG}>
        <div className="mb-3">
          <label htmlFor="dd" className="fz2 mb-1">
            Configure development environments, version control systems, and
            communication tools.
          </label>
          <select id="dd" className="form-control">
            <option className="fz3" defaultValue="selected">
              ...
            </option>
            {VCS.versioncotrol.map((v) => (
              <option className="fz3" key={v.id}>
                {v.vcs}
              </option>
            ))}
          </select>
        </div>
      </Timeline.Childline>
      <Timeline.Childline title={"Define Development Methodology"}src={methSVG}>
        <div className="mb-3">
          <label htmlFor="dd" className="fz2 mb-1">
            {" "}
            Choose an appropriate development methodology such as Agile, Scrum,
            or Kanban.
          </label>
          <TableDropdown
            opened={opened}
            setOpened={() => setOpened(!opened)}
            value={DM}
            onChange={(e) => setDM(e.traget.value)}
            th1={"Development Methodology"}
            th2={"Avail"}
            th3={"ID"}
          >
            {VCS.developmentMethodology.map((v) => (
              <TableDropdown.Body
                key={v.id}
                td1={v.dm}
                td2={v.avail}
                td3={v.id}
                handleSelectedItems={(e) => handleSelectedItems(e)}
              />
            ))}
          </TableDropdown>
        </div>
      </Timeline.Childline>
      <Timeline.Childline title={" Initial Architecture Design"} src={Design}>
        <div className="mb-3" id="_upload">
          <label htmlFor="dd" className="fz2 mb-1">
            Outline the high-level architecture of the application including
            components and interactions.
          </label>
          <input
            type="file"
            className="_ipt_file"
            accept="image/png, image/jpeg"
            onChange={(e) => handleImage(e)}
          />
          <div className="w-100 _fr _g7 mt-3">
            {preview &&
              preview?.map((a) => (
                <img
                  src={a.src}
                  alt="Preview "
                  width={25}
                  height={25}
                  className="border rounded"
                  style={{ objectFit: "contain" }}
                />
              ))}
          </div>
        </div>
      </Timeline.Childline>
    </Timeline>
  );
}

export default PreparationPhase;




