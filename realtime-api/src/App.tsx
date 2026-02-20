import { useEffect, useState } from "react";
import echo from "./echo";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log("Subscribing to public-notification channel");
    
    const channel = echo.channel("public-notification");
    
    channel.listen("frontend.notification", (e) => {
      console.log("Notification received:", e);
      setMessages(prev => [...prev, e.message]);
    });

    channel.subscribed(() => {
      console.log("Successfully subscribed to public-notification");
    });

    channel.error((error) => {
      console.error("Channel error:", error);
    });

    return () => {
      console.log("Leaving public-notification channel");
      echo.leave("public-notification");
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Real-Time Notifications</h2>
      <p>Status: {messages.length > 0 ? '✅ Receiving' : '❌ Waiting...'}</p>

      {messages.map((msg, i) => (
        <p key={i}>🔔 {msg}</p>
      ))}
    </div>
  );
}

export default App;
