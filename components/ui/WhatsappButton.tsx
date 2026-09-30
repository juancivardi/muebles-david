type WhatsAppButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

const phoneNumber = "542216438679";

export default function WhatsAppButton({
  children = "Consultar por WhatsApp",
  className = "",
}: WhatsAppButtonProps) {
  const message = encodeURIComponent(
    "Hola! Quisiera consultar por un mueble a medida"
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}