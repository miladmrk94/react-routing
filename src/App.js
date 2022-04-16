import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import allPages from "../src/Layout/Routes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {allPages.map((i) => {
            return <Route key={i.path} {...i} />;
          })}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
