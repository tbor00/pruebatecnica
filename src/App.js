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
    <React.Fragment>
    	<Sidebar/>
        <Home/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
