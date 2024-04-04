import "./Layout.css";
import Aside from "./Aside";
import Header from "./Header";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import English from "../../persisting/PersistStyleEnglish";
import Arabic from "../../persisting/PersistStyleArabic";
function Layout({ children }) {
  const { useMediaQuery, language } = useContext(AuthContext);
  const mq600 = useMediaQuery("(max-width:775px)");
  return (
    <>
      {language === "en" ? <English /> : <Arabic />}
      <div  className={mq600 ? "_ff" : "_frb"}>
        <div className="_wd">
          <Header />
          <main>{children}</main>
        </div>
        <Aside />
      </div>
    </>
  );
}

export default Layout;
