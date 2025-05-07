import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data=useLoaderData()

  
  // const [data, setData] = useState();
  // useEffect(() => {
  //   fetch("https://api.github.com/users/mwasiq11")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center bg-white text-black p-4 text-3xl">
      Github followers: {data ? `${data.followers}` : "loading..."}
      <img src={data.avatar_url} width={300} />
    </div>
  );
}
export default Github

export  const githubloaderInfo=async()=>{
 const response= await fetch("https://api.github.com/users/mwasiq11")
  return response.json()
}

