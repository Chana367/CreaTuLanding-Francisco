import { Link } from "react-router-dom"

const Item = ({id,modelo, marca, año, descripcion, url_imagen}) => {
  return (
    <div className="card mb-3" style={{width: "18rem", padding: "10px", minHeight: "430px", margin:"auto"}}>
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img src={url_imagen} className="card-img-top img-fluid" style={{ height: "100%", width: "100%", objectFit: "contain"}} alt="..." />
      </div>
      <div className="card-body" style={{ width: "18rem" }}>
      <h5 className="card-title">{marca} - {año} - {modelo}</h5>
        <p className="card-text">{descripcion}</p>
        <Link to={`/vehicle/${id}`} className="btn btn-primary">Ver detalle</Link>
      </div>
    </div>
  )
}

export default Item