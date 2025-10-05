import { useState } from "react";
import emailjs from "emailjs-com";

export const useContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | ""; message: string }>({
    type: "",
    message: "",
  });

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Por favor, completa todos los campos." });
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({ type: "error", message: "Introduce un correo electrónico válido." });
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        "service_1nb657g",
        "template_aciu372",
        formData,
        "p7eJncdwR71DakFrd"
      );

      setStatus({ type: "success", message: "¡Mensaje enviado correctamente!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Hubo un error al enviar el mensaje. Intenta nuevamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  return { formData, setFormData, handleSubmit, loading, status };
};
