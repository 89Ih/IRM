import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";
const SignupPage = () => {
    const { content, useMediaQuery } = useContext(AuthContext);
    const mq600 = useMediaQuery("(max-width:600px)");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const reqBody = {
        email,
        password,
        name: username,
    };
    function handleSubmit() {
        authService
            .signup(reqBody)
            .then((res) => { console.log(res); })
            .catch((err) => {
                console.error(err);
            });
    }
    return (
        <div className="d-flex flex-column justify-content-center align-items-center w-100">
            <h2>Sign up</h2>
            <form
                onSubmit={handleSubmit}
                className={`d-flex flex-column ${mq600 ? "w-75" : "w-50"}`}
            >
                <label htmlFor="username" className="mb-3">
                    Username :
                    <input
                        type="text"
                        id="username"
                        className="form-control"
                        required
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </label>
                <label htmlFor="mail" className="mb-3">
                    E-Mail :
                    <input
                        type="email"
                        id="mail"
                        className="form-control"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
                <label htmlFor="pass" className="mb-3">
                    Password :
                    <input
                        type="password"
                        id="pass"
                        className="form-control"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <button 
                className="btn btn-dark border" 
                type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SignupPage;
