import React, { useEffect, useState } from "react";
import { youTube_Vedio } from "../utils/Contents";

const Vediocontainer = () => {
  const [vedios, setVedioes] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await fetch(youTube_Vedio);
    const json = await data.json();
    setVedioes(json);
    console.log(vedios);
  };
  return <div>Vediocontainer</div>;
};

export default Vediocontainer;
