import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../constants";

export default function useChartData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

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
  return { data, loading };
}
