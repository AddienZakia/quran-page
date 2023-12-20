import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";

function Request_url(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get(url).then((res) => {
          setData(res.data.data);
        });
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
}

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen space-y-5">
      <AiOutlineLoading3Quarters className="text-6xl font-bold text-sky-500 animate-spin" />
      <p className="text-2xl font-semibold">Loading...</p>
    </div>
  );
}

export { Request_url, Loading };
