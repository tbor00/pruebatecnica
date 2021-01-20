import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/footer.js";
import Clients from "./pages/clients.js";
import Admin from "./pages/admin.js";
import Form from "./pages/formulario.js";
import Sidebar from "./components/sidebar.js";



function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/formulario" component={Form} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
