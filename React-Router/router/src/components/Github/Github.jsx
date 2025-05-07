import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://api.github.com/users/mwasiq11")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center bg-white text-black p-4 text-3xl">
      Github followers: {data ? `${data.followers}` : "loading..."}
      <img src={data.avatar_url} width={300} />
    </div>
  );
}

export default Github;
