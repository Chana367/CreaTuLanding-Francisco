import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center row">
        <div className=" col-md-6">
          <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt=""
                className="img-fluid" />
        </div>
        <div className=" col-md-6 mt-5">
            <p className="fs-3"> <span className="text-danger">Opps!</span> Página no encontrada.</p>
            <p className="lead">
              La página que estás buscando no existe.
            </p>
            <Link as={Link} to='/' className="btn btn-primary">Volver al inicio</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound;