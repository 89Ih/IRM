import { useContext, useState } from "react";
import "./Login.css";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";

const LoginPage = () => {
  const { content ,storeToken,authenticateUser } = useContext(AuthContext);

  const [email, seEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMSG, setErrorMSG] = useState(undefined);

  const handleSubmit=(e)=> {
    e.preventDefault();
    var data ={
      email,
      password,
    }
    authService
      .login(data)
      .then((res) => {
        console.log(res);
        storeToken(res.data.authToken);
        authenticateUser();
      })
      .catch((err) => {
        console.error(err);
        setErrorMSG(err.response.data.message)
      });
  }
  return (
    <div className="_ff w-100 p-5">
      <form className="_ff _form_login" onSubmit={handleSubmit}>
        <h1>{content.login}</h1>
        <input
          type="text"
          placeholder={`${content.email} :`}
          className="_ipt"
          value={email}
          onChange={(event) => seEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder={`${content.password} :`}
          className="_ipt"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" className="_btn">
          {content.signin}
        </button>
        <p>{errorMSG}</p>
      </form>
    </div>
  );
};
// admin@mail.com
export default LoginPage;
