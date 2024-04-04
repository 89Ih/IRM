import { useContext, useState } from "react";
import "./Login.css";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";
import Spinner from "../../components/Loading/spinner";


const LoginPage = () => {
  const { content ,storeToken,authenticateUser, styles,mode } = useContext(AuthContext);
  const {border}=styles 
  const [spinned, setSpinned] = useState(false);
  const [email, seEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMSG, setErrorMSG] = useState(undefined);

  const handleSubmit=(e)=> {
    setSpinned(true)  
    e.preventDefault();
    var data ={
      email,
      password,
    }
    authService
      .login(data)
      .then((res) => {

         storeToken(res.data.authToken);
         authenticateUser();
         setSpinned(false)
      })
      .catch((err) => {
        console.error(err);
        setErrorMSG(err.response.data.message)
        setSpinned(false)
      });
  }
  return (
    <div className="_ff w-100 p-5">

      <form className="_ff _form_login" onSubmit={handleSubmit}>

        <h1>{content.login}</h1>
        <input
          type="text"
          placeholder={`${content.email} :`}
          style={{ border }}
          value={email}
          autoComplete="username"
          onChange={(event) => seEmail(event.target.value)}
          className={`${mode === "light" ? "_ipt_light" : "_ipt_dark"}`}
        />
        <input
          type="password"
          placeholder={`${content.password} :`}
          className={`${mode === "light" ? "_ipt_light" : "_ipt_dark"}`}
          style={{ border }}
          value={password}
          autoComplete="current-password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          type="submit"
          className={`${mode === "light" ? "_btn_light" : "_btn_dark"}`}
        >
          {content.signin}
        </button>
         {spinned === true && <Spinner/>}
        <p>{errorMSG}</p>
      </form>
    </div>
  );
};

export default LoginPage;
