import React from "react";
import TabChange from "../TabChange/TabChange";
import TabpaneItems from "./TabpaneItems";
import useFirestore from "~/hooks/useFirestore";

function Tabpane() {
  const movies = useFirestore("films");
  let coming = []
  let showing = []
  movies.map(movie => {
    if(movie.coming === true) {
      coming.push(movie)
    } else if(movie.coming === false){
      showing.push(movie)
    }
  })
  
  return (
    <TabChange
      text1={"Now Showing"}
      text3={"Comming Soon"}
      content1={<TabpaneItems items={showing} />}
      content2={<TabpaneItems items={coming} />}
    />
  );
}

export default Tabpane;
