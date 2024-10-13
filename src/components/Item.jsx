import { width } from "@fortawesome/free-solid-svg-icons/faCartShopping"

const Item = ({id,modelo, marca, año, descripcion, url_imagen}) => {
  return (
    <div className="card mb-3" style={{width: "18rem", padding: "10px"}}>
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img src={url_imagen} className="card-img-top img-fluid" style={{ height: "100%", width: "100%", objectFit: "contain"}} alt="..." />
      </div>
      <div className="card-body" style={{ width: "18rem" }}>
      <h5 className="card-title">{marca} - {año} - {modelo}</h5>
        <p className="card-text">{descripcion}</p>
        <a href="#" className="btn btn-primary">Ver detalle</a>
      </div>
    </div>
  )
}

export default Item