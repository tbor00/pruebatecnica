import axios from "axios";
import React from "react";
import "../styles/form.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class Formulario extends React.Component {
  state = { name: [], errors: {} };

  componentDidMount() {
    const url = "https://restcountries.eu/rest/v2/all";

    axios
      .get(url)
      .then((response) => {
        this.setState({ name: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  Validacion = (e) => {
    function Erro() {
      MySwal.fire({
        title: "Cometiste un error, llena el formulario devuelta!",
        icon: "error",
      });
    }

    function Clean() {
      e.target.name.value = "";
      e.target.lastname.value = "";
      e.target.dni.value = "";
    }

    function Congrats() {
      MySwal.fire({
        title: "Formulario enviado con exito",
        icon: "success",
      });
    }

    const MySwal = withReactContent(Swal);
    let Name = e.target.name.value;
    let Lastname = e.target.lastname.value;
    let Dni = e.target.dni.value;
    e.preventDefault();

    if (Name.length > 3 && Lastname.length > 3 && Dni.length > 4) {
      if (Name.length !== "" && Lastname.length !== "" && Dni.length !== "") {
        Clean();
        Congrats();
      }
    } else {
      Clean();
      Erro();
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <form onSubmit={this.Validacion} name="formulario">
            <div className="row">
              <div className="col">
                <label className="parrafo">
                  Nombre <span className="danger">*</span>{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                />

                <label className="parrafo mt-5">
                  Seleccione un país
                  <span className="danger">*</span>
                </label>
                <select name="" className=" form-control" id="country" required>
                  {this.state.name.slice(0, 20).map((countries, i) => (
                    <option
                      className="form-control"
                      key={i}
                      value={countries.id}
                    >
                      {countries.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col">
                <label className="parrafo">
                  Apellido <span className="danger">*</span>
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  required
                />

                <label className="mt-5 parrafo">
                  Numero de DNI <span className="danger">*</span>
                </label>
                <input type="text" className="form-control" id="dni" required />
              </div>
            </div>
            <input type="submit" className="btn btn-primary" value="Enviar" />
            <Link to="/">
              <button type="submit" className="btn btn-danger m-5">
                Cancelar
              </button>
            </Link>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Formulario;
