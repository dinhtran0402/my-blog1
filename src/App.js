import { Container } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/index";
import RouteUrl from "./components/routeURL/routeURL";

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Header></Header>
          <RouteUrl></RouteUrl>
        </Container>
      </div>
    </Router>
  );
}

export default App;
