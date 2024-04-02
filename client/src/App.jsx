import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import Plan from "./pages/PlanPage/Plan";
import Setting from "./pages/Setting/Setting";
import Layout from "./components/Layout/Layout";
import { HelmetProvider } from "react-helmet-async";
import Projects from "./pages/Projects/Projects";

function App() {
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plan"
              element={
                <IsPrivate>
                  <Plan />
                </IsPrivate>

              } />

            <Route path="/projects"
              element={
                <IsPrivate>
                  <Projects/>
                </IsPrivate>

              } />


     
            <Route path="/setting" element={<Setting />} />
            <Route
              path="/profile"
              element={
                <IsPrivate>
                  <ProfilePage />
                </IsPrivate>
              }
            />

            <Route
              path="/signup"
              element={
                <IsAnon>
                  <SignupPage />
                </IsAnon>
              }
            />
            <Route
              path="/login"
              element={
                <IsAnon>
                  <LoginPage />
                </IsAnon>
              }
            />
          </Routes>
        </Layout>
      </HelmetProvider>
    </>
  );
}

export default App;
