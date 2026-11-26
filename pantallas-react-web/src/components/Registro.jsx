import { useState } from 'react';

export default function Registro({ alRegistrar, irALogin }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!nombre || !correo || !password) {
      alert('Por favor completa todos los campos');
      return;
    }
    alRegistrar({ nombre, correo });
  };

  return (
    <div style={estilos.tarjeta}>
      <h2>Crear Cuenta</h2>
      <form onSubmit={manejarEnvio} style={estilos.formulario}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={estilos.input}
        />
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
        <button type="submit" style={estilos.boton}>Registrarse</button>
      </form>
      <p>
        ¿Ya tienes cuenta?{' '}
        <button onClick={irALogin} style={estilos.enlace}>Inicia sesión</button>
      </p>
    </div>
  );
}

const estilos = {
  tarjeta: { maxWidth: '350px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center', fontFamily: 'sans-serif' },
  formulario: { display: 'flex', flexDirection: 'column', gap: '12px' },
  input: { padding: '10px', fontSize: '14px', borderRadius: '4px', border: '1px solid #aaa' },
  boton: { padding: '10px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  enlace: { background: 'none', border: 'none', color: '#2563eb', textDecoration: 'underline', cursor: 'pointer' }
};