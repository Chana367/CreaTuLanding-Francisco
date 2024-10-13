const products = [
  {
    "id": 1,
    "modelo": "Civic",
    "marca": "Honda",
    "año": 2022,
    "descripcion": "Sedan compacto con excelente economía de combustible.",
    "url_imagen": "https://imgs.search.brave.com/61fqLNSIxkrvFeST9Z8kIJgZQHHeNX59eURtygi5YvM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS9BRTk5/RTc3NjBBQURGNEI3/QTMxOTQzODIxNUU2/QjQ5NDY3NTNCNjVF/RkE3MjI4RDcxOUI3/NUU5MUZGMjJCOTNF/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNEMjBI/T0MwMjFCMDIxMDAx/LmpwZw"
  },
  {
    "id": 2,
    "modelo": "Mustang",
    "marca": "Ford",
    "año": 2021,
    "descripcion": "Deportivo clásico, motor V8, con un estilo icónico.",
    "url_imagen": "https://imgs.search.brave.com/miqVTMhCI57z18JlArKEZ3hlUMb8gUAluI013pgr2h4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS8wNTJE/RDg2QjdERThEQzg5/NzNBMEI5QzhGMTBC/MDRERjY2MEVBNzlG/MzIwQ0MxMTM5NkY0/NkVDRUE1QTlDNURD/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNDODBG/T0MwNTFBMDIxMDAx/LmpwZw"
  },
  {
    "id": 3,
    "modelo": "Model S",
    "marca": "Tesla",
    "año": 2023,
    "descripcion": "Sedán eléctrico de lujo con autonomía de 600 km.",
    "url_imagen": "https://imgs.search.brave.com/73pQr_mtcnnDKIplN3GtLuD9X9g2L8KH1CJHeIBZjDU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS8yRkIz/QUQzMDI0MzU0QURG/MkQ2OEVGMjMzODRC/MTYxMkU5RUQ2M0Qx/NUVBQ0QzMjk3RTRF/NzZERjM0RUZBMTBF/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNEMTBU/U0MwMjREMDIxMDAx/LmpwZw"
  },
  {
    "id": 4,
    "modelo": "Wrangler",
    "marca": "Jeep",
    "año": 2022,
    "descripcion": "SUV todoterreno con capacidades off-road excepcionales.",
    "url_imagen": "https://imgs.search.brave.com/CH5xpEbkeSxIcMEnx4c38GXXywKLdRFv5o9KjMlAr-4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hY3Jv/YWR0cmlwLmJsb2Iu/Y29yZS53aW5kb3dz/Lm5ldC9jYXRhbG9n/by1pbWFnZW5lcy9z/L1JUX1ZfZTg0MTM4/NmI2Mzg4NDM4N2E1/Zjk0MGE4ZDM2Yzhl/NTMud2VicA"
  },
  {
    "id": 5,
    "modelo": "Corolla",
    "marca": "Toyota",
    "año": 2021,
    "descripcion": "Compacto confiable, bajo consumo y buen rendimiento.",
    "url_imagen": "https://imgs.search.brave.com/xtikoYwuXfEgI2wX1-3MukgLl5SeVmgOsre4iCHNtwc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS8xRjBF/Nzc1MTZENUU3NzYy/NzhCMzBEMDc4NEQ2/QjBGMEREOTE3QjRB/MkE0Qzk3QkIyMkYw/Q0NCNUNBODIxM0I1/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNEMDBU/T0MwNDFCMDIxMDAx/LmpwZw"
  }
]


export const getProducts = () =>{
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve(products)
    }, 500)
  })
}

export const getProductByID = (productId) => {
  return  new Promise((resolve, reject) =>{
    setTimeout(()=>{
      const product = products.find(product => product.id === productId)
      if(product){
        resolve(product)
      } else {
        reject(new Error('Producto no encontrado'))
      }
    }, 500)
  })
}