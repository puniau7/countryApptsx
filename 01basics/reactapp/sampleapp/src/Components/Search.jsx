import React, { useEffect } from "react";
import { useDataLayerValue } from "../DataLayer";

function Search() {
  const [{ username, isLoggedIn }] = useDataLayerValue();

  useEffect(() => {
    fetch("https://swapi.dev/api/planets");
  }, []);
  //   setInterval--> 60000
  // state
  // --> search --> 1
  // isAllowed
  //username
  // isAllowed- searchCount
  //!username==='LSKY' && searchCount++

  return <div>{username} inside search!!!</div>;
}

export default Search;
