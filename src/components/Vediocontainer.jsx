import React, { useEffect, useState } from "react";
import { youTube_Vedio } from "../utils/Contents";
import VedioCard from "./VedioCard";
import { Link } from "react-router-dom";

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
    <div className="grid md:grid-cols-4 md:my-4 mx-auto md:mt-4 w-11/12 grid-cols-1 mt-10">
      {vedios.map((items, index) => {
        return (
          <Link to={"/watch?v=" + items.id} key={index}>
            <VedioCard info={items} />
          </Link>
        );
      })}
    </div>
  ) : (
    <p>No vedios found.</p>
  );
};

export default Vediocontainer;
