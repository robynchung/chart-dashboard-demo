import React, { useEffect, useState } from "react";
import axios from "axios";
import Menu from "./components/Menu/Menu";
import LineChart from "./components/LineChartSection/LineChartContainer";
import Websocket from "./components/WebsocketSection/WebsocketContainer";
import useWebsoocket from "./hooks/useWebsocket";
import { api } from "./constants";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const wsMessage = useWebsoocket();

  console.log(wsMessage);

  useEffect(() => {
    setLoading(true);

    axios
      .get(api.chart)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => alert(error));
  }, []);

  return (
    <div className="container">
      <Menu />
      <div className="section-container">
        {!loading && data && <LineChart data={data} />}
        <div className="section-sub-container ">
          <Websocket />
          <Websocket />
        </div>
      </div>
    </div>
  );
}

export default App;
