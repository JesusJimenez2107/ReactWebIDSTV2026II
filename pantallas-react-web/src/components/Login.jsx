import { useState } from 'react';

export default function Login({ alIniciarSesion, irARegistro }) {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!correo || !password) {
      alert('Ingresa tu correo y contraseña');
      return;
    }
    // Extraemos el nombre antes del @ para mostrarlo en la bienvenida
    const nombreUsuario = correo.split('@')[0];
    alIniciarSesion({ nombre: nombreUsuario, correo });
  };

  return (
    <div style={estilos.tarjeta}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={manejarEnvio} style={estilos.formulario}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          style={estilos.input}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={estilos.input}
        />
        <button type="submit" style={estilos.boton}>Entrar</button>
      </form>
      <p>
        ¿No tienes cuenta?{' '}
        <button onClick={irARegistro} style={estilos.enlace}>Regístrate</button>
      </p>
    </div>
  );
}

const estilos = {
  tarjeta: { maxWidth: '350px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center', fontFamily: 'sans-serif' },
  formulario: { display: 'flex', flexDirection: 'column', gap: '12px' },
  input: { padding: '10px', fontSize: '14px', borderRadius: '4px', border: '1px solid #aaa' },
  boton: { padding: '10px', backgroundColor: '#16a34a', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  enlace: { background: 'none', border: 'none', color: '#16a34a', textDecoration: 'underline', cursor: 'pointer' }
};