import "./HomePage.css";
////////////////////////
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Link } from "react-router-dom";
/////////////////////////////////////////////////

const HomePage = () => {
  const { content, mode, styles } = useContext(AuthContext);
  const { border, logo3 } = styles
  return (
    <div className={`_boxes ${mode === "light" ? '_lighthover' : '_darkhover'}`}>

      <Link to="/plan" style={{ border }}>
        <svg fill={logo3} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490" width="50px"
          height="50px">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke={logo3} strokeWidth="2.94">
          </g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <g>
                  <path
                    d="M10,372.5h405c2.602-0.001,5.159-1.016,7.071-2.929l65-65c1.912-1.913,2.904-4.47,2.905-7.071H490v-245 c0-5.522-4.477-10-10-10H10c-5.523,0-10,4.478-10,10v310C0,368.022,4.477,372.5,10,372.5z M425,338.357V307.5h30.858L425,338.357 z M20,62.5h450v225h-55c-5.523,0-10,4.478-10,10v55H20V62.5z">
                  </path>
                  <path
                    d="M350,92.5H250c-5.523,0-10,4.478-10,10v15h-25c-5.523,0-10,4.478-10,10v75h-80v-35h55c5.523,0,10-4.478,10-10v-60 c0-5.522-4.477-10-10-10H60c-5.523,0-10,4.478-10,10v60c0,5.522,4.477,10,10,10h45v45c0,5.522,4.477,10,10,10h90v70 c0,5.522,4.477,10,10,10h25v10c0,5.522,4.477,10,10,10h100c5.523,0,10-4.478,10-10v-50c0-5.522-4.477-10-10-10H250 c-5.523,0-10,4.478-10,10v20h-15v-60h15v10c0,5.522,4.477,10,10,10h100c5.523,0,10-4.478,10-10v-50c0-5.522-4.477-10-10-10H250 c-5.523,0-10,4.478-10,10v20h-15v-65h15v15c0,5.522,4.477,10,10,10h100c5.523,0,10-4.478,10-10v-50 C360,96.978,355.523,92.5,350,92.5z M70,147.5v-40h100v40H70z M260,272.5h80v30h-80V272.5z M260,192.5h80v30h-80V192.5z M340,142.5h-80v-30h80V142.5z">
                  </path>
                  <rect x="50" y="247.5" width="75" height="20"></rect>
                  <rect x="50" y="277.5" width="75" height="20"></rect>
                  <rect x="50" y="307.5" width="130" height="20"></rect>
                  <rect x="135" y="247.5" width="20" height="20"></rect>
                  <rect x="380" y="92.5" width="25" height="20"></rect>
                  <rect x="420" y="92.5" width="25" height="20"></rect>
                  <rect x="380" y="122.5" width="25" height="20"></rect>
                  <rect x="420" y="122.5" width="25" height="20"></rect>
                  <rect x="380" y="152.5" width="25" height="20"></rect>
                  <rect x="420" y="152.5" width="25" height="20"></rect>
                  <rect x="380" y="182.5" width="25" height="20"></rect>
                  <rect x="420" y="182.5" width="25" height="20"></rect>
                  <path
                    d="M483.162,408.013l-60-20c-1.033-0.344-2.1-0.498-3.162-0.498V387.5H10c-5.523,0-10,4.478-10,10v40 c0,5.522,4.477,10,10,10h410h0.001c1.061,0,2.129-0.169,3.161-0.513l60-20c4.083-1.361,6.838-5.183,6.838-9.487 C490,413.196,487.246,409.374,483.162,408.013z M60,427.5H20v-20h40V427.5z M410,427.5H80v-20h330V427.5z M430,423.626v-12.252 l18.377,6.126L430,423.626z">
                  </path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        {content.planning}
      </Link>
      <Link to="/projects" style={{ border }}>

        <svg width="50px" height="50px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="" stroke=""
          strokeWidth="0.00048000000000000007">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke={logo3} strokeWidth="1.44">
            <defs>
              <style>{
                `.a{
            fill: none;
            stroke: ${logo3};
            stroke-linecap: round;
            stroke-linejoin: round;
          }`

              }
              </style>
            </defs>
            <rect className="a" x="5.5" y="26" width="16.5" height="16.5" rx="2"></rect>
            <line className="a" x1="5.5" y1="39.9633" x2="22" y2="39.9633"></line>
            <rect className="a" x="5.5" y="5.5" width="16.5" height="16.5" rx="2"></rect>
            <line className="a" x1="5.5" y1="19.4633" x2="22" y2="19.4633"></line>
            <rect className="a" x="5.5" y="26" width="16.5" height="16.5" rx="2"></rect>
            <line className="a" x1="5.5" y1="39.9633" x2="22" y2="39.9633"></line>
            <rect className="a" x="5.5" y="5.5" width="16.5" height="16.5" rx="2"></rect>
            <line className="a" x1="5.5" y1="19.4633" x2="22" y2="19.4633"></line>
            <rect className="a" x="26" y="5.5" width="16.5" height="16.5" rx="2"></rect>
            <line className="a" x1="26" y1="19.4633" x2="42.5" y2="19.4633"></line>
          </g>
          <g id="SVGRepo_iconCarrier">
            <defs>
              <style>{
                `.a {
            fill: none;
            stroke: ${logo3};
            stroke-linecap: round;
            stroke-linejoin: round;
          }`
              }
              </style>
            </defs>
            <rect className="a" x="5.5" y="26" width="16.5" height="16.5" rx="2"></rect>
            <line className="a" x1="5.5" y1="39.9633" x2="22" y2="39.9633"></line>
            <rect className="a" x="5.5" y="5.5" width="16.5" height="16.5" rx="2"></rect>
            <line className="a" x1="5.5" y1="19.4633" x2="22" y2="19.4633"></line>
            <rect className="a" x="5.5" y="26" width="16.5" height="16.5" rx="2"></rect>
            <line className="a" x1="5.5" y1="39.9633" x2="22" y2="39.9633"></line>
            <rect className="a" x="5.5" y="5.5" width="16.5" height="16.5" rx="2"></rect>
            <line className="a" x1="5.5" y1="19.4633" x2="22" y2="19.4633"></line>
            <rect className="a" x="26" y="5.5" width="16.5" height="16.5" rx="2"></rect>
            <line className="a" x1="26" y1="19.4633" x2="42.5" y2="19.4633"></line>
          </g>
        </svg>
        {content.project}
      </Link>

    </div>
  );
};

export default HomePage;