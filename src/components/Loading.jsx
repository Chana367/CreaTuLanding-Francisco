import { BlinkBlur } from 'react-loading-indicators';

function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <BlinkBlur color="#ff0000" size="medium" text="Cargando..." textColor="#ff0000"/>
    </div>
  )
}

export default Loading;