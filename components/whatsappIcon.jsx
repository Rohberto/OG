const WhatsAppIcon = () => {
    return (
      <a
        href="https://wa.me/16155560346"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Logo"
          width="50"
          height="50"
          style={{ transition: "transform 0.3s ease-in-out" }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        />
      </a>
    );
  };
  
  export default WhatsAppIcon;
  