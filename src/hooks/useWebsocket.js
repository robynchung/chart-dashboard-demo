import { useEffect, useState } from "react";
import { api } from "../constants";

export default function useWebsocket() {
  const [ws, setWs] = useState(null);
  const [isPaused] = useState(false);
  const [wsMessage, setWsMessage] = useState(null);

  useEffect(() => {
    const wsClient = new WebSocket(api.ws);

    wsClient.onopen = () => {
      console.log("ws opened");
      setWs(wsClient);
    };
    wsClient.onclose = () => console.log("ws closed");

    return () => {
      wsClient.close();
    };
  }, []);

  useEffect(() => {
    if (!ws) return;

    ws.onmessage = e => {
      if (isPaused) return;
      const message = JSON.parse(e.data);

      setWsMessage(message);
    };
  }, [isPaused, ws]);

  return wsMessage;
}
