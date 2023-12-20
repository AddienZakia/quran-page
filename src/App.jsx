import { useState } from "react";
import "./styles/output.css";

import List from "./components/List";
import Header from "./components/Header";
import { Loading, Request_url } from "./components/Utilites";

import Quran from "./components/Quran";

const base_api = import.meta.env.VITE_API;

export default function App() {
  const [surah, setsurah] = useState(1);
  const [active, setactive] = useState(false);
  const { data } = Request_url(base_api);

  const { data: data_surah, loading: loading_surah } = Request_url(
    base_api + surah
  );

  return (
    <>
      <Header setstate={setactive} />
      <div className="lg:flex">
        <div className="lg:overflow-y-scroll lg:h-screen">
          <List
            data={data}
            active={active}
            setactive={setactive}
            setsurah={setsurah}
          />
        </div>
        <div className="lg:flex-1 lg:overflow-y-scroll lg:h-screen">
          {loading_surah ? (
            <Loading />
          ) : data_surah && data_surah.number === surah ? (
            <Quran data={data_surah} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
}
