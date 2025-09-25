import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FirstStepsApp'
import { MyAwesomeApp } from './MyAwesomeApp'
createRoot(document.getElementById('root')!).render(
  /**
   * El modo estricto nos va a permitir asegurarnos de que la aplicación
   * va a funcionar como debe. Es la manera profesional.
   * Los componentes de React se escriben como etiquetas html
   * autocerradas.
   */
  <StrictMode>
    <FirstStepsApp />
    {/* <MyAwesomeApp /> */}
  </StrictMode>,
)
