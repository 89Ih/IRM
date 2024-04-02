import { useContext } from "react";
import "./PlanPage.css";
import { Helmet } from 'react-helmet-async';
import { AuthContext } from "../../context/auth.context";

const UserChart = ({available ,workload}) => {
const {content, styles }=useContext(AuthContext)
const { borderChart,bg_chart,backgroundColor,bg_gradient, bg_avaliable ,bg_workload }= styles
return (
<>
    <Helmet>
        <style>
            {
                ` ._c {
                    width: 150px;
                    height: 150px;
                    border:${borderChart};
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color:${bg_chart} !important;
                    background: ${bg_gradient};
                    background-repeat: no-repeat;
                    margin-top: -5px;
                   
                }

                ._cc {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    width: 110px;
                    height: 110px;
                    background-color: ${backgroundColor};
                    border:${borderChart};
                    border-radius: 50%;
                    // z-index: 1;
                    gap: 5px;
                }

                ._cc>div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    height: 35px;
                }

                ._cc>div>div>p {
                    font-size: 12px;
                    font-weight: 500;
                    text-align: center;
                    transform:translateY(2.5px)

                }

                ._cc>div>div>span {
                    width: 10px;
                    height: 10px;
                    border-radius: 25%;
                    background: #ffff00;
                    margin-bottom: 13.5px;
                }

                ._cc>div>span {
                    text-align: center !important;
                }


                `
            }
        </style>
    </Helmet>
    <div className="_c" style={{backgroundSize:` 100% ${workload}%`}}>
        <div className="_cc">
            <div>
                <div className="_frs" style={{ gap: "5px" }}>
                    <span style={bg_workload}></span>
                    <p>{content.workload}</p>
                </div>
                <span className="fz2">
                    {<span>{workload}%</span>}
                </span>
            </div>

            <div>
                <div className="_frs" style={{ gap: "5px" }}>
                    <span style={bg_avaliable}></span>
                    <p>{content.availability}</p>
                </div>
                <span className="fz2">
                    {available}%
                </span>
            </div>
        </div>
    </div>
</>
);
}

export default UserChart;