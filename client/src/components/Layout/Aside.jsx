import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function Aside() {
  const {
    isLoggedIn,
    logOutUser,
    useMediaQuery,
    language,
    changeTheme,
    mode,
    callChangeDirection,
    styles
  } = useContext(AuthContext);
  const mq = useMediaQuery("(max-width:775px)");
  const { bg_Aside } = styles
  return (
    <aside className={mq ? "_frb " : "_fcb "} style={bg_Aside}>
      <div className="p-1">
        <Link to="/" className="nav-link _borderBottom ">
          <svg width="28px" height="28px" viewBox="-3.12 -3.12 30.24 30.24" fill="none" xmlns="http://www.w3.org/2000/svg"
            stroke="#333333" strokeWidth="0.072">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M21.4498 10.275L11.9998 3.1875L2.5498 10.275L2.9998 11.625H3.7498V20.25H20.2498V11.625H20.9998L21.4498 10.275ZM5.2498 18.75V10.125L11.9998 5.0625L18.7498 10.125V18.75H14.9999V14.3333L14.2499 13.5833H9.74988L8.99988 14.3333V18.75H5.2498ZM10.4999 18.75H13.4999V15.0833H10.4999V18.75Z"
                fill=" #CCCCCC"></path>
            </g>
          </svg>
        </Link>
      </div>

  { !mq ?    <div className={"_ff"}>

        <button className="_btn_language" onClick={callChangeDirection} style={{ color: '#CCCCCC' }}>
          {language === "en" ? "Ar" : "En"}
        </button>


          <button className="_btn-default  _borderTop" onClick={changeTheme}>
            {mode === "light" ? <svg width="25px" height="25px" viewBox="0 0 24.00 24.00" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.10">
              </g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                  stroke="#CCCCCC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
              :
              <svg width="25px" height="25px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.576">
                </g>
                <g id="SVGRepo_iconCarrier">
                  <g clipPath="url(#a)" stroke="#CCCCCC" strokeWidth="1.5" strokeMiterlimit="10">
                    <path
                      d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05"
                      strokeLinecap="round"></path>
                    <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#CCCCCC" fillOpacity=".16"></path>
                    <path d="M12 19v4M12 1v4" strokeLinecap="round"></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#ffffff" d="M0 0h24v24H0z"></path>
                    </clipPath>
                  </defs>
                </g>
              </svg>
            }
          </button>
    
        {!isLoggedIn ? (
          <div>
            <Link to="/login" className="_borderTop">
              <svg className="mt-2" width="22.5px" height="30px" viewBox="0 -0.5 25 25" fill="none"
                xmlns="http://www.w3.org/2000/svg" stroke=" #333333" strokeWidth="0.025">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M11.75 9.874C11.75 10.2882 12.0858 10.624 12.5 10.624C12.9142 10.624 13.25 10.2882 13.25 9.874H11.75ZM13.25 4C13.25 3.58579 12.9142 3.25 12.5 3.25C12.0858 3.25 11.75 3.58579 11.75 4H13.25ZM9.81082 6.66156C10.1878 6.48991 10.3542 6.04515 10.1826 5.66818C10.0109 5.29121 9.56615 5.12478 9.18918 5.29644L9.81082 6.66156ZM5.5 12.16L4.7499 12.1561L4.75005 12.1687L5.5 12.16ZM12.5 19L12.5086 18.25C12.5029 18.25 12.4971 18.25 12.4914 18.25L12.5 19ZM19.5 12.16L20.2501 12.1687L20.25 12.1561L19.5 12.16ZM15.8108 5.29644C15.4338 5.12478 14.9891 5.29121 14.8174 5.66818C14.6458 6.04515 14.8122 6.48991 15.1892 6.66156L15.8108 5.29644ZM13.25 9.874V4H11.75V9.874H13.25ZM9.18918 5.29644C6.49843 6.52171 4.7655 9.19951 4.75001 12.1561L6.24999 12.1639C6.26242 9.79237 7.65246 7.6444 9.81082 6.66156L9.18918 5.29644ZM4.75005 12.1687C4.79935 16.4046 8.27278 19.7986 12.5086 19.75L12.4914 18.25C9.08384 18.2892 6.28961 15.5588 6.24995 12.1513L4.75005 12.1687ZM12.4914 19.75C16.7272 19.7986 20.2007 16.4046 20.2499 12.1687L18.7501 12.1513C18.7104 15.5588 15.9162 18.2892 12.5086 18.25L12.4914 19.75ZM20.25 12.1561C20.2345 9.19951 18.5016 6.52171 15.8108 5.29644L15.1892 6.66156C17.3475 7.6444 18.7376 9.79237 18.75 12.1639L20.25 12.1561Z"
                    fill=" #CCCCCC"></path>
                </g>
              </svg>
            </Link>
          </div>
        ) : (
          <div >
            <div className="_borderTop">
              <Link to="/profile">

                <svg className="mt-1" width="22.5px" height="25px" viewBox="0 0 24.00 24.00" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                      stroke="#CCCCCC" strokeWidth="1.32" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                </svg>
              </Link>
            </div>
            <div className="_borderTop">

              <button className="_btn-default" onClick={logOutUser}>
                <svg className="_hoverdLogout" width="22.5px" height="30px" viewBox="0 -0.5 25 25" fill="none"
                  xmlns="http://www.w3.org/2000/svg" stroke=" #333333" strokeWidth="0.025">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M11.75 9.874C11.75 10.2882 12.0858 10.624 12.5 10.624C12.9142 10.624 13.25 10.2882 13.25 9.874H11.75ZM13.25 4C13.25 3.58579 12.9142 3.25 12.5 3.25C12.0858 3.25 11.75 3.58579 11.75 4H13.25ZM9.81082 6.66156C10.1878 6.48991 10.3542 6.04515 10.1826 5.66818C10.0109 5.29121 9.56615 5.12478 9.18918 5.29644L9.81082 6.66156ZM5.5 12.16L4.7499 12.1561L4.75005 12.1687L5.5 12.16ZM12.5 19L12.5086 18.25C12.5029 18.25 12.4971 18.25 12.4914 18.25L12.5 19ZM19.5 12.16L20.2501 12.1687L20.25 12.1561L19.5 12.16ZM15.8108 5.29644C15.4338 5.12478 14.9891 5.29121 14.8174 5.66818C14.6458 6.04515 14.8122 6.48991 15.1892 6.66156L15.8108 5.29644ZM13.25 9.874V4H11.75V9.874H13.25ZM9.18918 5.29644C6.49843 6.52171 4.7655 9.19951 4.75001 12.1561L6.24999 12.1639C6.26242 9.79237 7.65246 7.6444 9.81082 6.66156L9.18918 5.29644ZM4.75005 12.1687C4.79935 16.4046 8.27278 19.7986 12.5086 19.75L12.4914 18.25C9.08384 18.2892 6.28961 15.5588 6.24995 12.1513L4.75005 12.1687ZM12.4914 19.75C16.7272 19.7986 20.2007 16.4046 20.2499 12.1687L18.7501 12.1513C18.7104 15.5588 15.9162 18.2892 12.5086 18.25L12.4914 19.75ZM20.25 12.1561C20.2345 9.19951 18.5016 6.52171 15.8108 5.29644L15.1892 6.66156C17.3475 7.6444 18.7376 9.79237 18.75 12.1639L20.25 12.1561Z"
                      fill=" #CCCCCC"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        )}

      </div>
     : <DropdownButton
          as={ButtonGroup}
          key={'up'}
          id={`dropdown-button-drop-up`}
          drop={"up"}
          variant="#CCCCCC"
          // title={`Drop up`}
          >
          <Dropdown.Item eventKey="1">
            <Link onClick={callChangeDirection} className="fz3 nav-link ">
            {language === "en" ? "Arabic" : "English"}
            </Link>
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
          <Link  className="nav-link _borderTop fz3 "  onClick={changeTheme}>
            Change Theme
        </Link>
          </Dropdown.Item>

        { !isLoggedIn ? <Dropdown.Item eventKey="3">
            <Link to="/login" className="_borderTop fz3 nav-link">
              Log in
            </Link>
          </Dropdown.Item>
          :  <>
          <Dropdown.Item eventKey="4">
          <Link to="/profile"className="fz3 nav-link"> Profile</Link>
          </Dropdown.Item>
          <Dropdown.Item eventKey="5">
              <Link  onClick={logOutUser}className="fz3 nav-link">
                Log out
              </Link>
          </Dropdown.Item>
          </>
          }
      </DropdownButton>}
    </aside>
  );
}

export default Aside;