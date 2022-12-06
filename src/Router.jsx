import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./routes/Main";
import Collections from "./routes/Collections";
import Collection from "./routes/Collection";
import MyCollections from "./routes/MyCollections";
import MyCollection from "./routes/MyCollection";
import Minting from "./routes/Minting";
import ProjectDetail from "./routes/ProjectDetail";
import Projects from "./routes/Projects";
import Practice from "./routes/Practice";
import Login from "./routes/Login";
import Register from "./routes/Register";

function Router() {
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

export default Router;
