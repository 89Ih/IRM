import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";

const Header = () => {
  const { currentDate, useMediaQuery, styles } = useContext(AuthContext);
  const mq600 = useMediaQuery("(max-width:600px)");
  const { backgroundColor, borderBottom, color, logo1, logo2, logo3 } = styles; 

  return (
    <header className="p-2" style={{ backgroundColor, borderBottom }}>
      <div className=" _frb">
        <div className="_fr  p-2">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="70px"
            height="70px"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.384"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <defs>
                <style>
                  {` .cls-1 {
                  fill:${logo1};
                }
                .cls-2 {
                  fill: ${logo2};
                }
                .cls-3 {
                  fill:${logo3};
                }
                `}
                </style>
              </defs>
              <title>Icon_24px_DataFusion_Color</title>
              <g data-name="Product Icons">
                <path
                  className="cls-1"
                  d="M6,8h4V4H3A1,1,0,0,0,2,5V21a1,1,0,0,0,.28.68L6,18Z"
                ></path>
                <path
                  className="cls-2"
                  d="M16,18l3.72,3.72A1,1,0,0,0,20,21V14H16Z"
                ></path>
                <path
                  className="cls-3"
                  d="M21.71,2.28,18,6h0v4h4V3A1,1,0,0,0,21.71,2.28Z"
                ></path>
                <path
                  className="cls-1"
                  d="M18,6l3.72-3.72A1,1,0,0,0,21,2H14V6Z"
                ></path>
                <polygon
                  className="cls-3"
                  points="2 22 6 18 16 18 20 22 2 22"
                ></polygon>
              </g>
            </g>
          </svg>
          <h1 style={{ color }}>IRM</h1>
        </div>
        <div className={"_fr _pr0"} style={{ gap: "3.5px" }}>
          <p className={mq600 ? "fz2" : "fz6"}>
            {currentDate.date}
            {"/"}
          </p>

          <p className={mq600 ? "fz2" : "fz6"}>
            {currentDate.month}
            {"/"}
          </p>
          <p className={mq600 ? "fz2" : "fz6"}>{currentDate.year}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
