export default function Bienvenida({ usuario, cerrarSesion }) {
  return (
    <div style={estilos.tarjeta}>
      <h2>¡Bienvenido, {usuario.nombre}!</h2>
      <p>Has iniciado sesión correctamente con:</p>
      <p><strong>{usuario.correo}</strong></p>
      <button onClick={cerrarSesion} style={estilos.boton}>Cerrar Sesión</button>
    </div>
  );
}

const estilos = {
  tarjeta: { maxWidth: '350px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center', fontFamily: 'sans-serif' },
  boton: { marginTop: '15px', padding: '10px 20px', backgroundColor: '#dc2626', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }
};