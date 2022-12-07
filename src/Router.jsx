import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
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
  const history = useHistory();
  // navigate("/accounts/login"); 대신에
  //history.push("/accounts/login");
  let dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        // history.push("/");
        window.href = "/";
        console.log("유저다.");
        dispatch(setUser(user));
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // history.push("/login");
        window.href = "/login";
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
      <BrowserRouter>
        <Switch>
          <Route path="/practice">
            <Practice />
          </Route>
          <Route path="/minting">
            <Minting />
          </Route>
          <Route path="/mycollections/:imgId">
            <MyCollection />
          </Route>
          <Route path="/collection/:imgId">
            <Collection />
          </Route>
          <Route path="/mycollections">
            <MyCollections />
          </Route>
          <Route path="/projects/:projectId">
            <ProjectDetail />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
