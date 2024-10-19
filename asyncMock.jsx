const products = [
  {
    "id": 1,
    "modelo": "Civic",
    "marca": "Honda",
    "año": 2022,
    "descripcion": "Sedan compacto con excelente economía de combustible.",
    "url_imagen": "https://imgs.search.brave.com/61fqLNSIxkrvFeST9Z8kIJgZQHHeNX59eURtygi5YvM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS9BRTk5/RTc3NjBBQURGNEI3/QTMxOTQzODIxNUU2/QjQ5NDY3NTNCNjVF/RkE3MjI4RDcxOUI3/NUU5MUZGMjJCOTNF/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNEMjBI/T0MwMjFCMDIxMDAx/LmpwZw",
    "stock": 10,
    "precio": 22000,
    "category": "autos"
  },
  {
    "id": 2,
    "modelo": "Mustang",
    "marca": "Ford",
    "año": 2021,
    "descripcion": "Deportivo clásico, motor V8, con un estilo icónico.",
    "url_imagen": "https://imgs.search.brave.com/miqVTMhCI57z18JlArKEZ3hlUMb8gUAluI013pgr2h4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS8wNTJE/RDg2QjdERThEQzg5/NzNBMEI5QzhGMTBC/MDRERjY2MEVBNzlG/MzIwQ0MxMTM5NkY0/NkVDRUE1QTlDNURD/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNDODBG/T0MwNTFBMDIxMDAx/LmpwZw",
    "stock": 5,
    "precio": 55000,
    "category": "autos"
  },
  {
    "id": 3,
    "modelo": "Model S",
    "marca": "Tesla",
    "año": 2023,
    "descripcion": "Sedán eléctrico de lujo con autonomía de 600 km.",
    "url_imagen": "https://imgs.search.brave.com/73pQr_mtcnnDKIplN3GtLuD9X9g2L8KH1CJHeIBZjDU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS8yRkIz/QUQzMDI0MzU0QURG/MkQ2OEVGMjMzODRC/MTYxMkU5RUQ2M0Qx/NUVBQ0QzMjk3RTRF/NzZERjM0RUZBMTBF/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNEMTBU/U0MwMjREMDIxMDAx/LmpwZw",
    "stock": 8,
    "precio": 80000,
    "category": "autos"
  },
  {
    "id": 4,
    "modelo": "Wrangler",
    "marca": "Jeep",
    "año": 2022,
    "descripcion": "SUV todoterreno con capacidades off-road excepcionales.",
    "url_imagen": "https://imgs.search.brave.com/CH5xpEbkeSxIcMEnx4c38GXXywKLdRFv5o9KjMlAr-4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hY3Jv/YWR0cmlwLmJsb2Iu/Y29yZS53aW5kb3dz/Lm5ldC9jYXRhbG9n/by1pbWFnZW5lcy9z/L1JUX1ZfZTg0MTM4/NmI2Mzg4NDM4N2E1/Zjk0MGE4ZDM2Yzhl/NTMud2VicA",
    "stock": 3,
    "precio": 40000,
    "category": "camionetas"
  },
  {
    "id": 5,
    "modelo": "Corolla",
    "marca": "Toyota",
    "año": 2021,
    "descripcion": "Compacto confiable, bajo consumo y buen rendimiento.",
    "url_imagen": "https://imgs.search.brave.com/xtikoYwuXfEgI2wX1-3MukgLl5SeVmgOsre4iCHNtwc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS8xRjBF/Nzc1MTZENUU3NzYy/NzhCMzBEMDc4NEQ2/QjBGMEREOTE3QjRB/MkE0Qzk3QkIyMkYw/Q0NCNUNBODIxM0I1/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNEMDBU/T0MwNDFCMDIxMDAx/LmpwZw",
    "stock": 12,
    "precio": 18000,
    "category": "autos"
  },
  {
    "id": 6,
    "modelo": "CBR600RR",
    "marca": "Honda",
    "año": 2020,
    "descripcion": "Moto deportiva de alto rendimiento.",
    "url_imagen": "https://cdn.pixabay.com/photo/2021/11/28/22/24/motorcycle-6831332_960_720.png",
    "stock": 7,
    "precio": 15000,
    "category": "motos"
  },
  {
    "id": 7,
    "modelo": "300SS",
    "marca": "CFMOTO",
    "año": 2024,
    "descripcion": "Moto deportiva de iniciación con un diseño moderno y buen rendimiento.",
    "url_imagen": "https://imgs.search.brave.com/Qmu-Y0ARGtOiflGTuOt6jufeoMIeYH4qfJRVJb2UU70/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMjlj/ODBpMDlreHkyYS5j/bG91ZGZyb250Lm5l/dC9jdXN0b20vbW90/b3JjeWNsZS1tb2Rl/bC12YXJpYW50LXBo/b3RvL3N0YW5kYXJk/L2NmbW90by0zMDBz/ci1waGlsaXBwaW5l/cy1zcG9ydGJpa2Ut/NWY3NDk0ZGQxMDNk/MS5qcGc",
    "stock": 10,
    "precio": 4500,
    "category": "motos"
  },  
  {
    "id": 8,
    "modelo": "Transit",
    "marca": "Ford",
    "año": 2019,
    "descripcion": "Vehículo utilitario para transporte de carga. Ideal para trabajos en construcción y transporte de mercancías en áreas urbanas.",
    "url_imagen": "https://imgs.search.brave.com/UrxKGkkQp9ndvADSWnxaEKR0T3hTog5mcU2be3QBFsY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS9DRDcz/RERENDNEOTczRUY2/RTNBNURFMjIwMjZF/RjE4NTQ2QTg2QTI5/N0JCQjkyQ0Q2NjI3/NEQyN0Q4QkU3NTNF/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNDODBG/T1YzMzFCMDIxMDAx/LmpwZw",
    "stock": 6,
    "precio": 30000,
    "category": "utilitarios"
  },
  {
    "id": 9,
    "modelo": "Sprinter",
    "marca": "Mercedes-Benz",
    "año": 2022,
    "descripcion": "Furgoneta utilitaria con gran capacidad de carga.",
    "url_imagen": "https://imgs.search.brave.com/e_sAO2gmRtru7HxNeeEc1jFV7iK-qc_-i_wHTEEGvHI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS81QkEy/Q0RDQzRBMjAxMTFD/ODAyNzE2RTBGQzEy/MjY0RkVGQzA3OTg2/M0Q2RkVBRjk0MkND/QTBEQkQ0REIzMURG/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNDOTBN/QlYwNDFBMDIxMDAx/XzIuanBn",
    "stock": 5,
    "precio": 35000,
    "category": "utilitarios"
  }
];



export const getProducts = () =>{
  return new Promise((resolve, reject) =>{
    resolve(products)
  })
}

export const getProductById = (productId) => {
  return  new Promise((resolve, reject) =>{
    const product = products.find(product => product.id === parseInt(productId))
    if(product){
      resolve(product)
    } else {
      reject(new Error('Producto no encontrado'))
    }
  })
}

export const getProductsByCategName = (categName) => {
  return  new Promise((resolve, reject) =>{
    if(!categName){
      reject(new Error('Debe proporcionar un nombre de categoría'))
    }else{
      const product = products.filter(product => product.category === categName)
      resolve(product)
    }
  })
}