import "./PlanPage.css";
import restService from "../../services/rest.service";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import EditForm from "./EditForm";

const PlanCard = ({ plan, description, _id, remove, dynamics, onRefresh }) => {
  const { content } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    retrievePlan();
    setShow(true);
  };
  const [workloadOptions, setWorkloadOptions] = useState();
  const [weekOptions] = useState(Array.from({ length: 52 }, (_, i) => i + 1));
  const { user, currentDate, mode, styles } = useContext(AuthContext);

  const { toolbar , logo3} = styles

  const [planData, setPlanData] = useState({
    plan: "",
    description: "",
    owner: "",
    workload: "",
    priority: "",
    weekOfYear: "",
    year: currentDate.year,
    month: currentDate.month,
    creater: user?.name,
  });
  const retrievePlan = () => {
    restService
      .getPlan(_id)
      .then((res) => {
        const { description, plan, owner, workload, priority, weekOfYear } =
          res.data.planByid;
        setPlanData({
          ...planData,
          description,
          plan,
          owner,
          workload,
          priority,
          weekOfYear,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleUpdate = async (event) => {
    event.preventDefault();
    const requestBody = { ...planData };
    restService.updatePlan(_id, requestBody);
    handleClose();
  };
  const handleChange = (event, field) => {
    setPlanData({ ...planData, [field]: event.target.value });
  };
  /////(*_*)\\\\\
  async function getOpt() {
    let opts = [];
    let arr = Array.from({ length: 10 }, (_, i) => ({ opt: (i + 1) * 10 }));
    setWorkloadOptions(arr);
    if (!dynamics && dynamics === "") {
      return setWorkloadOptions(arr);
    }
    const obj = {
      user: dynamics,
      weekOfYear: planData.weekOfYear,
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
          if (v.opt + totalAmountSold <= 100) { return { opt: v.opt }; }
        })); opts = filteredArr.filter((option) => option !==
          undefined);
      return setWorkloadOptions(opts);
    }
  }
  const handleWOY = (event) => {
    handleChange(event, "weekOfYear");
    getOpt();
  };
  useEffect(() => {
    retrievePlan();
    getOpt();
  }, []);
  ////
  return (
    <details className={`_p_card mb-2 ${mode === "light" && "_body_light"}`}>
      <summary>{plan}</summary>
      <div>
        <div className="_fre" style={toolbar}>
          <button type="button" onClick={handleShow} className="_btn-default _H_icon" data-toggle="tooltip" data-placement="bottom"
            title={content.editPlan}>
            <svg width="25px" height="25px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M17.7 5.12758L19.266 6.37458C19.4172 6.51691 19.5025 6.71571 19.5013 6.92339C19.5002 7.13106 19.4128 7.32892 19.26 7.46958L18.07 8.89358L14.021 13.7226C13.9501 13.8037 13.8558 13.8607 13.751 13.8856L11.651 14.3616C11.3755 14.3754 11.1356 14.1751 11.1 13.9016V11.7436C11.1071 11.6395 11.149 11.5409 11.219 11.4636L15.193 6.97058L16.557 5.34158C16.8268 4.98786 17.3204 4.89545 17.7 5.12758Z"
                  stroke={logo3} strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M12.033 7.61865C12.4472 7.61865 12.783 7.28287 12.783 6.86865C12.783 6.45444 12.4472 6.11865 12.033 6.11865V7.61865ZM9.23301 6.86865V6.11865L9.23121 6.11865L9.23301 6.86865ZM5.50001 10.6187H6.25001L6.25001 10.617L5.50001 10.6187ZM5.50001 16.2437L6.25001 16.2453V16.2437H5.50001ZM9.23301 19.9937L9.23121 20.7437H9.23301V19.9937ZM14.833 19.9937V20.7437L14.8348 20.7437L14.833 19.9937ZM18.566 16.2437H17.816L17.816 16.2453L18.566 16.2437ZM19.316 12.4937C19.316 12.0794 18.9802 11.7437 18.566 11.7437C18.1518 11.7437 17.816 12.0794 17.816 12.4937H19.316ZM15.8863 6.68446C15.7282 6.30159 15.2897 6.11934 14.9068 6.2774C14.5239 6.43546 14.3417 6.87397 14.4998 7.25684L15.8863 6.68446ZM18.2319 9.62197C18.6363 9.53257 18.8917 9.13222 18.8023 8.72777C18.7129 8.32332 18.3126 8.06792 17.9081 8.15733L18.2319 9.62197ZM8.30001 16.4317C7.8858 16.4317 7.55001 16.7674 7.55001 17.1817C7.55001 17.5959 7.8858 17.9317 8.30001 17.9317V16.4317ZM15.767 17.9317C16.1812 17.9317 16.517 17.5959 16.517 17.1817C16.517 16.7674 16.1812 16.4317 15.767 16.4317V17.9317ZM12.033 6.11865H9.23301V7.61865H12.033V6.11865ZM9.23121 6.11865C6.75081 6.12461 4.7447 8.13986 4.75001 10.6203L6.25001 10.617C6.24647 8.96492 7.58269 7.62262 9.23481 7.61865L9.23121 6.11865ZM4.75001 10.6187V16.2437H6.25001V10.6187H4.75001ZM4.75001 16.242C4.7447 18.7224 6.75081 20.7377 9.23121 20.7437L9.23481 19.2437C7.58269 19.2397 6.24647 17.8974 6.25001 16.2453L4.75001 16.242ZM9.23301 20.7437H14.833V19.2437H9.23301V20.7437ZM14.8348 20.7437C17.3152 20.7377 19.3213 18.7224 19.316 16.242L17.816 16.2453C17.8195 17.8974 16.4833 19.2397 14.8312 19.2437L14.8348 20.7437ZM19.316 16.2437V12.4937H17.816V16.2437H19.316ZM14.4998 7.25684C14.6947 7.72897 15.0923 8.39815 15.6866 8.91521C16.2944 9.44412 17.1679 9.85718 18.2319 9.62197L17.9081 8.15733C17.4431 8.26012 17.0391 8.10369 16.6712 7.7836C16.2897 7.45165 16.0134 6.99233 15.8863 6.68446L14.4998 7.25684ZM8.30001 17.9317H15.767V16.4317H8.30001V17.9317Z"
                  fill={logo3}></path>
              </g>
            </svg>

          </button>
          <button className="_btn-default _H_icon" data-toggle="tooltip" data-placement="bottom" title={content.clone}>
          <svg fill={logo3} width="25px" height="25px" viewBox="-2.56 -2.56 37.12 37.12"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M 5 5 L 5 6 L 5 21 L 5 22 L 6 22 L 9 22 L 9 20 L 7 20 L 7 7 L 20 7 L 20 9 L 22 9 L 22 6 L 22 5 L 21 5 L 6 5 L 5 5 z M 10 10 L 10 11 L 10 26 L 10 27 L 11 27 L 26 27 L 27 27 L 27 26 L 27 11 L 27 10 L 26 10 L 11 10 L 10 10 z M 12 12 L 25 12 L 25 25 L 12 25 L 12 12 z">
                </path>
              </g>
            </svg>
          </button>
          <button  className="_btn-default _H_icon" onClick={remove} data-toggle="tooltip"
            data-placement="bottom" title={content.removePlan}>
            <svg width="25px" height="25px" viewBox="0 0 1024 1024" className="icon" version="1.1"
              xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M667.8 362.1H304V830c0 28.2 23 51 51.3 51h312.4c28.4 0 51.4-22.8 51.4-51V362.2h-51.3z"
                  fill={ mode === 'light'? "#6ecfc51a" :"#CCCCCC"}>
                </path>
                <path
                  d="M750.3 295.2c0-8.9-7.6-16.1-17-16.1H289.9c-9.4 0-17 7.2-17 16.1v50.9c0 8.9 7.6 16.1 17 16.1h443.4c9.4 0 17-7.2 17-16.1v-50.9z"
                  fill={ mode === 'light'?"#6ecfc51a":"#CCCCCC"}></path>
                <path
                  d="M733.3 258.3H626.6V196c0-11.5-9.3-20.8-20.8-20.8H419.1c-11.5 0-20.8 9.3-20.8 20.8v62.3H289.9c-20.8 0-37.7 16.5-37.7 36.8V346c0 18.1 13.5 33.1 31.1 36.2V830c0 39.6 32.3 71.8 72.1 71.8h312.4c39.8 0 72.1-32.2 72.1-71.8V382.2c17.7-3.1 31.1-18.1 31.1-36.2v-50.9c0.1-20.2-16.9-36.8-37.7-36.8z m-293.5-41.5h145.3v41.5H439.8v-41.5z m-146.2 83.1H729.5v41.5H293.6v-41.5z m404.8 530.2c0 16.7-13.7 30.3-30.6 30.3H355.4c-16.9 0-30.6-13.6-30.6-30.3V382.9h373.6v447.2z"
                  fill={mode === "dark" ? "#211F1E" : "#033d39"}></path>
                <path
                  d="M511.6 798.9c11.5 0 20.8-9.3 20.8-20.8V466.8c0-11.5-9.3-20.8-20.8-20.8s-20.8 9.3-20.8 20.8v311.4c0 11.4 9.3 20.7 20.8 20.7zM407.8 798.9c11.5 0 20.8-9.3 20.8-20.8V466.8c0-11.5-9.3-20.8-20.8-20.8s-20.8 9.3-20.8 20.8v311.4c0.1 11.4 9.4 20.7 20.8 20.7zM615.4 799.6c11.5 0 20.8-9.3 20.8-20.8V467.4c0-11.5-9.3-20.8-20.8-20.8s-20.8 9.3-20.8 20.8v311.4c0 11.5 9.3 20.8 20.8 20.8z"
                  fill={mode === "dark" ? "#211F1E" : "#033d39"}></path>
              </g>
            </svg>
          </button>
        </div>
        <article>{description}</article>
      </div>
      
      <EditForm handleClose={handleClose} show={show} onSubmit={handleUpdate} plan={planData.plan} onChangePlan={(event) =>
        handleChange(event, "plan")}
        description={planData.description}
        onChangeDescription={(event) => handleChange(event, "description")}
        owner={planData.owner}
        onChangeOwner={(event) => handleChange(event, "owner")}
        priority={planData.priority}
        weekOfYear={planData.weekOfYear}
        onChangeWeekOfYear={handleWOY}
        onChangePriority={(event) => handleChange(event, "priority")}
        workload={planData.workload}
        onChangeWorkload={(event) => handleChange(event, "workload")}
        workloadOptions={workloadOptions}
        weekOptions={weekOptions}
        year={planData.year}
        month={planData.month}
        dynamics={dynamics}
        creater={planData.creater}
        onClickClose={handleClose}
        onRefresh={onRefresh}
      />
    </details>
  );
};

export default PlanCard;