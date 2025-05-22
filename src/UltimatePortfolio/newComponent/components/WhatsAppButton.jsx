function WhatsAppButton() {
  const phone = "917383615985"; // Your phone number in international format
  const message = "Hello! I'm interested in your services.";
  //   const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundColor: "#25D366",
        color: "white",
        padding: "10px 15px",
        borderRadius: "5px",
        textDecoration: "none",
        display: "inline-block",
      }}
    >
      Chat on WhatsApp
    </a>
  );
}

export default WhatsAppButton;
