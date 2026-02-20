import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

// Enable Pusher debug logging
Pusher.logToConsole = true;

const echo = new Echo({
  broadcaster: "pusher",
  key: import.meta.env.VITE_PUSHER_APP_KEY,
  cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
  forceTLS: false,
  encrypted: false,
});

console.log("Echo initialized with Pusher:", {
  key: import.meta.env.VITE_PUSHER_APP_KEY,
  cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
});

export default echo;
