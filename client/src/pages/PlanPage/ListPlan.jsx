import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import WeekHeader from "./WeekHeader";

const List = ({ children }) => {
  const { mode } = useContext(AuthContext);

  return (
    <section
      className={`_ls-plan `}>
      <WeekHeader />
      {children}
    </section>
  );
};
const Row = ({ title, user, firstWeek, secondWeek, thirdWeek, fourthWeek }) => {
  const { currentDate, styles } = useContext(AuthContext);
  const { week } = currentDate;
  const { listPlan, logo3 } = styles;

  let cw = week === "05" ? "01" : week;
  return (
    <details className="_row" style={listPlan}>
      <summary>
        <p>{title}</p>
        <div>
          <svg
            width="17px"
            height="23px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill={logo3}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                fill={logo3}
              ></path>
            </g>
          </svg>
          <svg
            width="17px"
            height="23px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill={logo3}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z"
                fill={logo3}
              ></path>
            </g>
          </svg>
        </div>
      </summary>
      <ul className={`mt-3 mb-3`}>
        <li style={{ width: "20%" }} className="user-item">
          {user}
        </li>
        <li style={{ width: "20%" }} className={`w${cw}i01`}>
          {firstWeek}
        </li>
        <li style={{ width: "20%" }} className={`w${cw}i02`}>
          {secondWeek}
        </li>
        <li style={{ width: "20%" }} className={`w${cw}i03`}>
          {thirdWeek}
        </li>
        <li style={{ width: "20%" }} className={`w${cw}i04`}>
          {fourthWeek}
        </li>
      </ul>
    </details>
  );
};
List.Row = Row;
export default List;
