import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Api_Key } from "../utils/Contents";
import VedioCard from "./VedioCard";
import VedioCardForSerchresult from "./VedioCardForSerchresult";

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Extract query from searchParams
    const searchQuery = searchParams.get("search_query") || "";
    setQuery(searchQuery);

    if (searchQuery) {
      fetchSearchResults(searchQuery);
    }
  }, [searchParams]);

  const fetchSearchResults = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${encodeURIComponent(
          searchQuery
        )}&key=${Api_Key}`
      );
      const data = await response.json();
      console.log(data.items);
      setSearchResults(data.items || []); // Adjust based on API response
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="absolute  left-0 right-0 md:w-9/12 my-3 mx-auto flex flex-col justify-center items-center">
      <h1>Search Results for: {query}</h1>
      <ul>
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <Link to={"/watch?v=" + result.id.videoId} key={index}>
              {" "}
              <VedioCardForSerchresult info={result} key={index} />
            </Link>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchResultPage;
