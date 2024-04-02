import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../context/auth.context";

const StatisticUserChart = ({available, workload}) => {
    const{content,styles, mode}=useContext(AuthContext)
    const { borderChart} = styles
    return (
        <>
    <Helmet>
        <style>
            {
                `._pc {
                position:relative;    
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                border: ${borderChart}; 
                height: 150px;
                width: 175px;
                max-height: 150px;
                max-width: 175px;
                border-radius: 5px;
                margin-top: -5px
            }
            
            ._pc1 {
                margin-top: 50px;
                width: 100px;
                height: 15px;
                border: 1px solid transparent;
            }
            ._pc1::-webkit-progress-bar {
                background-color:${ mode === "light" ? '#6ecfc580': '#cccccc33'} !important;
            }
            ._pc1::-webkit-progress-value {
                background-color:${mode === "light" ? "#006f67": '#90EE90'} !important;
              
            }`
            }
        </style>
        </Helmet>
            <div className="_pc">
                <label htmlFor="wl"
                    className="_fcv h-100 "
                    style={{ gap: "41px" }}>
                    <progress id="wl" className="_pc1" max="100" value={workload}/>
                    <div className="_ff text-center">
                        <span className="fz0" >{content.workload}</span>
                        <span className="fz0"  >{workload}%</span>
                    </div>
                </label>
    
                <label htmlFor="ava"
                    className="_fcv h-100"
                    style={{ gap: "41px" }}
                >
                    <progress
                        id="ava"
                        className="_pc1"
                        max="100"
                        value={available} />
                    <div className="_ff text-center">
                        <span className="fz0"  >{content.availability}</span>
                        <span className="fz0" >{available}%</span>
                    </div>
                </label>
            </div>

    </>
      );
}

export default StatisticUserChart;


