import "./PlanPage.css";
import { Fragment, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import List from "./ListPlan";
import PlanCard from "./PlanCard";
import UserCard from "./UserCard";
import restService from "../../services/rest.service";
import StatisticUserChart from "./StatisticUserChart";
import UserChart from "./UserChart";

const Plan = () => {
  const { content, currentDate, styles } = useContext(AuthContext);
  const { bg_Search, bg_Form, bg_Input, logo3 } = styles
  const [Users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [chart, setChart] = useState(false);
  
  const UserPlans = () => {
    restService
      .getAllPlan()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleRemove = async(d) => {
    await restService.deletePlan(d);
    UserPlans();
  };
  const byId = (id) => {
    if (!id) return;
    var val = document.querySelector(id);
    return val.innerText;
  };
  function items(userPlans, name, num) {
    const week = parseInt(byId(`#w${num}`));
    return userPlans
      .filter((f) => name === f.user)
      .map(
        (up) =>
          week === up.weekOfYear && (
            <PlanCard
              key={up._id}
              plan={up.plan}
              description={
                <ol
                  className="_desc"
                  dangerouslySetInnerHTML={{
                    __html: BreakLine(up.description),
                  }}
                />
              }
              _id={up._id}
              remove={() => handleRemove(up._id)}
              dynamics={up.user}
              onRefresh={() => UserPlans()}
            />
          )
      );
  };
  function BreakLine(word) {
    let splited = [];
    let txtOrginal = word.split(/(-)/);
    txtOrginal.forEach((v) => {
      if (v !== "-" && v !== "") {
        splited.push(`<li>${v}</li>`);
        return;
      }
    });
    return splited.join("");
  };
  function sum(userPlans, name, currentDate) {
    return userPlans
      .filter((f) => f.user === name && currentDate.woy === f.weekOfYear)
      .reduce((total, plan) => total + plan.workload, 0);
  };
  useEffect(() => {
    UserPlans();
  }, []);
  return (
    <Fragment>
      <div className="_search _fre" style={bg_Search}>
        <form className="_fre _g10" style={bg_Form}>
          <input
            style={bg_Input}
            type="search"
            placeholder={`${content.searchUser} :`}
            className="_ip w-100"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />

          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill={logo3}
            viewBox="0 0 16 16">
            <path
              d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
          </svg>
        </form>
      </div>
      <List>
        {Users.filter((f) =>
          f.name.toLowerCase().includes(query.toLowerCase())
        ).map(({ name, _id, userPlans }) => (
          <List.Row
            title={name}
            key={_id}
            user={
              <UserCard
                username={name}
                nodeID={_id}
                dynamics={name}
                onClickChart={() => setChart(!chart)}
                onCanvas={UserPlans}
                chart={
                  chart ? (
                    <StatisticUserChart
                      available={100 - sum(userPlans, name, currentDate)}
                      workload={sum(userPlans, name, currentDate)}
                    />
                  ) : (
                    <UserChart
                      available={100 - sum(userPlans, name, currentDate)}
                      workload={sum(userPlans, name, currentDate)}
                    />
                  )
                }
              />
            }
            firstWeek={items(userPlans, name, "1")}
            secondWeek={items(userPlans, name, "2")}
            thirdWeek={items(userPlans, name, "3")}
            fourthWeek={items(userPlans, name, "4")}
          />
        ))}
      </List>
    </Fragment>
  );
};
export default Plan;
