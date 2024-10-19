import ItemCount from "./ItemCount"

const ItemDetail = (props) => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6">
                <img className="card-img-top mb-5 mb-md-0" src={props.url_imagen} alt="..." />
              </div>
              <div className="col-md-6">
                  <div className="small mb-1">{props.marca}</div>
                  <h1 className="display-5 fw-bolder">{props.modelo}</h1>
                  <div className="fs-5 mb-5">
                    <span>${props.precio ? props.precio.toLocaleString('es-ES') : 'Precio no disponible'}</span>
                  </div>
                  <p className="lead">{props.descripcion}</p>
                  <div className="d-flex">
                    <ItemCount stock={props.stock} initial={1} onAdd={(cant) => console.log("Cantidad Agregada: ", cant)}/>
                  </div>
              </div>
          </div>
      </div>
    </section>
  )

}

export default ItemDetail