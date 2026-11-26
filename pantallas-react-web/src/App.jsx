import { useState } from 'react';
import Registro from './components/Registro';
import Login from './components/Login';
import Bienvenida from './components/Bienvenida';

export default function App() {
  const [pantallaActual, setPantallaActual] = useState('login'); // 'login' | 'registro' | 'bienvenida'
  const [usuario, setUsuario] = useState(null);

  const manejarAcceso = (datosUsuario) => {
    setUsuario(datosUsuario);
    setPantallaActual('bienvenida');
  };

  const manejarSalida = () => {
    setUsuario(null);
    setPantallaActual('login');
  };

  return (
    <div>
      {pantallaActual === 'login' && (
        <Login
          alIniciarSesion={manejarAcceso}
          irARegistro={() => setPantallaActual('registro')}
        />
      )}

      {pantallaActual === 'registro' && (
        <Registro
          alRegistrar={manejarAcceso}
          irALogin={() => setPantallaActual('login')}
        />
      )}

      {pantallaActual === 'bienvenida' && usuario && (
        <Bienvenida
          usuario={usuario}
          cerrarSesion={manejarSalida}
        />
      )}
    </div>
  );
}