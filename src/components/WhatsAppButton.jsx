
function WhatsAppButton() {
  return (
    <a href="https://wa.me/5492235110038?text=Hola%20quiero%20mas%20informacion"
       style={{
         backgroundColor: '#25d366',
         color: 'white',
         padding: '10px 20px',
         textDecoration: 'none',
         borderRadius: '5px',
         display: 'inline-block',
         cursor: 'pointer',
       }}
    >
      <span style={{ marginRight: '5px' }}></span>
      Contacta con nosotros en WhatsApp
    </a>
  );
}

export default WhatsAppButton;