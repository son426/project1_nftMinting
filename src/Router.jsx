import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Main from "./routes/Main";
import Collection from "./routes/Collection";
import MyCollections from "./routes/MyCollections";
import MyCollection from "./routes/MyCollection";
import Minting from "./routes/Minting";
import ProjectDetail from "./routes/ProjectDetail";
import Projects from "./routes/Projects";
import Practice from "./routes/Practice";
import Login from "./routes/Login";
import Register from "./routes/Register";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "./redux/actions/user_action";

function Router() {
  const navigate = useNavigate();

  // navigate("/accounts/login");
  //history.push("/accounts/login");
  let dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        // history.push("/");
        navigate("/");
        console.log("유저다.");
        dispatch(setUser(user));
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // history.push("/login")
        navigate("/login");
        console.log("유저아니다.");
        dispatch(clearUser());
        // User is signed out
        // ...
      }
    });
  }, []);

  if (isLoading) {
    return <div>...loading</div>;
  } else {
    return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/minting" element={<Minting />} />
        <Route path="/mycollections/:imgId" element={<MyCollection />} />
        <Route path="/collection/:imgId" element={<Collection />} />
        <Route path="/mycollections" element={<MyCollections />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }
}

export default Router;
