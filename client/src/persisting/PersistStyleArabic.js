import { Helmet } from "react-helmet-async";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

const Arabic = () => {
const {mode}= useContext(AuthContext)
return (
<Helmet>
<link  rel="stylesheet" href="ar.module.css" />
  <style>
    {
      `@import url("https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap");
      html{
        direction: rtl !important;
        backgroundColor:${mode === "dark" && '#212529'} !important;
      }
      body {
        font-family: "Noto Kufi Arabic", sans-serif !important;
        font-optical-sizing: auto;
        font-style: normal;
      
      }
      aside {
        left: 0;
      }
      /* User Chart */
      ._cc > div > div {
        padding-right: 15px;
      }
      ._cc > div > span {
        padding-right: 20px;
        transform: translateY(-18px);
      }
      /* Statistic user chart */
      ._pc1 {
        rotate: 90deg;
      }
      
      input {
        font-size: 13px !important;
      }
      `
    }
  </style>
</Helmet>
);
};

export default Arabic;