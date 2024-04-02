import { Helmet } from "react-helmet-async";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
const English = () => {
const {mode}= useContext(AuthContext)
return (
<Helmet>
<link  rel="stylesheet" href="en.module.css" />
  <style>
    {
      ` 
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

      html {
        direction: ltr !important;
        backgroundColor:${mode === "dark" && '#212529'} !important;
      }

      body {
        font-family: "Montserrat", sans-serif !important;
      }

      aside {
        right: 0;
      }

      /* User Chart */
      ._cc>div>div {
        padding-left: 15px;

      }

      ._cc>div>span {
        padding-left: 20px;
        transform: translateY(-18px);
      }

      /* Statistic user chart */
      ._pc1 {
        rotate: 270deg;
      }

      `
    }
  </style>
</Helmet>
);
};

export default English;