import React, { useEffect } from "react";
import ReactLoading from "react-loading";
const LoadingScreen=()=>{

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {});
    }, 2000);
  }, []);

  return (
    <>
      <ReactLoading type={"bars"} color={"#03fc4e"} height={150} width={150} />
    </>
  );
}
export default LoadingScreen;