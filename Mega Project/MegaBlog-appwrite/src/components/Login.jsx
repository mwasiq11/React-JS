import React, { useState } from "react";
import { link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/AuthSlice";
import { Button, Logo, Input } from "./index";
import { useDispatch } from "react-redux";
import authService from "../Appwrite/Auth";
import { useForm } from "react-hook-form";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, submitHandler } = useForm();
  const [error, setError] = useState("");
  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userdata = await authService.getCurrentUser();

        if (userdata) {
          dispatch(authLogin(userdata));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return <div></div>;
}

export default Login;
