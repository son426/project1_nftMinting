import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
import Loading from "./routes/Loading";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "./redux/actions/user_action";

function Router() {
  const navigate = useNavigate();

  // let dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.user.isLoading);

  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setIsLoggedIn(true);
        navigate("/");
        // 얘를 하면, 로그인에서는 동작이 잘 되는데, 다른페이지에서 새로고침할 시에 전부 메인페이지로 가버림
        // dispatch(setUser(user));
        const uid = user.uid;
      } else {
        setIsLoggedIn(false);
        navigate("/login");
        // dispatch(clearUser());
      }
      setInit(true);
    });
  }, []);

  if (!init) {
    return <Loading />;
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
