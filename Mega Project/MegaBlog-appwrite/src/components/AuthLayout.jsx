import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ childern, authentication = true }) {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {

    // Todo: make it eaiser later//
    // if(authStatus==true){
    //     navigate("/")
    // }
    // else if(!authStatus==false){
    //     navigate("/login")
    // }

    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false)
  }, [navigate, authentication, authStatus]);

  return(
    loader ?<h1>Loding...</h1>:<>{childern}</>
  )
}
