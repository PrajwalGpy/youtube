import React, { useEffect, useState } from "react";
import { youTube_Vedio } from "../utils/Contents";
import VedioCard from "./VedioCard";

const Vediocontainer = () => {
  const [vedios, setVedios] = useState(null); // Initialize vedios as null

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await fetch(youTube_Vedio);
      const json = await data.json();
      setVedios(json.items);
      console.log(json.items); // Log the items array, not vedios
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error state if needed
    }
  };

  // Render loading state while fetching data
  if (vedios === null) {
    return <p>Loading...</p>;
  }

  // Render VedioCard if vedios has data
  return vedios.length > 0 ? (
    <div className="grid grid-cols-3 my-4 mx-auto">
      {vedios.map((items, index) => {
        return <VedioCard key={index} info={items} />;
      })}
    </div>
  ) : (
    <p>No vedios found.</p>
  );
};

export default Vediocontainer;
