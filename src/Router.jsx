import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./routes/Main";
import Collections from "./routes/Collections";
import Collection from "./routes/Collection";
import MyCollection from "./routes/MyCollection";
import Sellers from "./routes/Sellers";
import Seller from "./routes/Seller";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/seller">
          <Seller />
        </Route>
        <Route path="/sellers">
          <Sellers />
        </Route>
        <Route path="/collection">
          <Collection />
        </Route>
        <Route path="/mycollection">
          <MyCollection />
        </Route>
        <Route path="/collections">
          <Collections />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
