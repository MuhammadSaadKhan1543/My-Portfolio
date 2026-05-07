import { useEffect, useState } from "react";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/contact", {
        headers: {
          "Authorization": token
        }
      });

      const data = await res.json();
      setMessages(data);
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <h1>Messages</h1>
     {messages.map((msg) => (
  <div
    key={msg._id}
    style={{
      border: "1px solid #333",
      padding: "15px",
      marginBottom: "10px",
      borderRadius: "8px"
    }}
  >
    <h3>{msg.name}</h3>
    <p><strong>Email:</strong> {msg.email}</p>
    <p><strong>Subject:</strong> {msg.subject}</p>
    <p>{msg.message}</p>
  </div>
))}
    </div>
  );
}