import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import "./PlanPage.css";
const WeekHeader = () => {
  const { currentDate, content, mode, styles } = useContext(AuthContext);
  const {currentWeek} = content
  const { borderBottom, borderTop,backgroundColor } = styles;
  const { woy, week } = currentDate;
  const [weeks, setWeeks] = useState([]);
  let cw = week === "05" ? "01" : week;
  useEffect(() => {
    const getWeekData = (weekNum, weekLabel) => ({
      weekNum,
      weekLabel,
    });

    switch (week) {
      case "01":
        setWeeks([
          getWeekData(woy, content.currentWeek),
          getWeekData(woy + 1, content.nextWeek),
          getWeekData(woy + 2, ""),
          getWeekData(woy + 3, ""),
        ]);
        break;
      case "02":
        setWeeks([
          getWeekData(woy - 1, content.lastWeek),
          getWeekData(woy, content.currentWeek),
          getWeekData(woy + 1, content.nextWeek),
          getWeekData(woy + 2, ""),
        ]);
        break;
      case "03":
        setWeeks([
          getWeekData(woy - 2, ""),
          getWeekData(woy - 1, content.lastWeek),
          getWeekData(woy, content.currentWeek),
          getWeekData(woy + 1, content.nextWeek),
        ]);
        break;
      case "04":
        setWeeks([
          getWeekData(woy + 1, content.nextWeek),
          getWeekData(woy - 2, ""),
          getWeekData(woy - 1, content.lastWeek),
          getWeekData(woy, content.currentWeek),
        ]);
        break;
      default:
        setWeeks([
          getWeekData(woy, content.currentWeek),
          getWeekData(woy + 1, content.nextWeek),
          getWeekData(woy + 2, ""),
          getWeekData(woy + 3, ""),
        ]);
        break;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [woy, week,content.currentWeek]);

  return (
    <ul style={{ borderBottom, borderTop,backgroundColor }}>
      <li className="fz18 user-item">{content.user}</li>
      {weeks.map(({ weekNum, weekLabel }, index) => (
        <li key={`week-${index}`} className={`w${cw}i0${index + 1}`}>
          <div className="_fr _g5 fz18">
            <span className="_fr">
              {content.week} <span id={`w${index + 1}`}>{weekNum}</span>
            </span>
            <em className="fz1">
              <u
                style={{
                  color:
                    weekLabel === currentWeek &&
                    `${mode !== "dark" ? "#006f67" : "#90EE90"}`,
                }}
              >
                {weekLabel}
              </u>
            </em>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default WeekHeader;
